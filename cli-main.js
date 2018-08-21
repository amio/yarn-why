const fs = require('fs')
const path = require('path')
const kleur = require('kleur')
const why = require('./index.js')

/**
 * Run npm-why in a directory
 *
 * @param {String} dir Workding directory
 * @param {String} packageName The package to lookup
 */
module.exports = function main (dir, packageName) {
  let rootName = path.parse(dir).name
  try {
    rootName = require(path.join(dir, 'package.json')).name || rootName
  } catch (e) {}

  const reasons = why(
    loadLockfile(dir, 'yarn.lock'),
    packageName,
    rootName
  )

  if (!reasons.length) {
    console.log(`\n  No one requires ${kleur.blue(packageName)}.`)
  } else {
    console.log(`\n  Who required ${kleur.blue(packageName)}:\n`)
    print(reasons)
    console.log('')
  }
}

function loadLockfile (dir, file) {
  try {
    return fs.readFileSync(path.resolve(dir, file), 'utf8')
  } catch (e) {
    if (e.code === 'MODULE_NOT_FOUND') {
      console.error(`\n  ${kleur.red('ERROR')} Cannot find ${kleur.yellow(file)}.\n`)
    } else {
      console.error(`\n  ${kleur.red('ERROR')} ${e.message}\n`)
    }
    process.exit(1)
  }
}

function print (reasons) {
  reasons.map(reason => {
    const versionTag = kleur.dim('@' + reason[0].version)
    return reason.reverse().map(rs => {
      return kleur.blue(rs.name)
    }).join(' > ') + versionTag
  }).sort().forEach(x => console.log('  ' + x))
}
