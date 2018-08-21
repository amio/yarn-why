const lockfile = require('@yarnpkg/lockfile')

/**
 * Find who depend upon a target package.
 *
 * @param {String} lockContent content of yarn.lock
 * @param {String} target target package name
 * @param {Function} printer
 */
module.exports = function (lockContent, name, printer) {
  const tree = lockfile.parse(lockContent)

  if (tree.type !== 'success') {
    throw new Error('Malformed yarn.lock')
  }

  const targets = Object.keys(tree.object).filter(
    x => parseNameVersion(x).name === name
  )

  // console.log(JSON.stringify(tree, null, 2))
  // console.log(Object.keys(tree.object))
  // console.log(targets)

  // Find requiredBy for those targets
  const results = []
  targets.forEach(t => {
    lookupDependents(t, tree.object, [], results)
  })
  return results.map(breadcrumbs => {
    return breadcrumbs.map(b => parseNameVersion(b))
  })
  // return targets.reduce((accu, curr) => {
  //   lookupDependents(curr, tree.object, [], accu)
  //   return accu
  // }, []).map(reasons => {
  //
  // })
  // return results
}

function lookupDependents (target, root, breadcrumb = [], results) {
  breadcrumb = breadcrumb.concat(target)

  const dependents = Object.entries(root).filter(([pkg, meta]) => {
    return meta.dependencies && Object.entries(meta.dependencies).find(x => {
      return x.join('@') === target
    })
  })

  if (dependents.length) {
    dependents.forEach(dept => lookupDependents(dept[0], root, breadcrumb, results))
  } else {
    results.push(breadcrumb)
  }
}

// `@yarnpkg/lockfile@^1.0.2` => { name: '@yarnpkg/lockfile', version: '^1.0.2' }
function parseNameVersion (nameVersion) {
  const nv = nameVersion.split('@')
  return {
    name: nv.slice(0, -1).join('@'),
    version: nv.slice(-1)
  }
}
