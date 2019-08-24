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

tap.test('Exit 1 if no <package-name> provided', async t => {
  const { exitCode, stderr } = await cli([], { reject: false })
  t.is(exitCode, 1, 'exit code 1')
  t.matchSnapshot(stderr, 'stderr')
})

tap.test('find `mri` in npm-why', async t => {
  const cwd = path.join(__dirname, 'assets/npm-why')
  const { stdout } = await cli(['mri'], { cwd })
  t.matchSnapshot(stdout, 'stdout')
})

tap.test('find `chalk` in npm-why', async t => {
  const cwd = path.join(__dirname, 'assets/npm-why')
  const { stdout } = await cli(['chalk'], { cwd })
  t.matchSnapshot(stdout, 'stdout')
})

tap.test('find `chalk` in jest', async t => {
  const cwd = path.join(__dirname, 'assets/jest')
  const { stdout } = await cli(['chalk'], { cwd })
  t.matchSnapshot(stdout, 'stdout')
})
