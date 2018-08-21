const path = require('path')
const execa = require('execa')
const tap = require('tap')

const cwd = path.resolve(__dirname, '..')
const bin = path.join(cwd, 'bin/yarn-why')
const cli = (args, opts) => execa(bin, args, opts)

tap.test('runs `--version`', async t => {
  const packageJson = require(path.join(cwd, 'package.json'))
  const { stdout } = await cli(['--version'])
  t.is(stdout, packageJson.version, 'output version.')
})

tap.test('runs `chalk`', async t => {
  const { stdout } = await cli(['mri', '--noir'], { cwd: __dirname })
  t.is(stdout.trim(), `Who required mri:

  test > npm-why > mri@^1.1.1`, 'output correct result.')
})

// Issue #1
tap.test('Exit 1 if no <package-name> provided', async t => {
  const { code, stderr } = await cli(['--noir'], { 'reject': false })
  t.is(code, 1, 'exit code 1')
  t.is(stderr.trim(), 'ERROR A <package-name> is required.', 'output hint.')
})
