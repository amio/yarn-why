/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/bin.spec.js TAP Exit 1 if no <package-name> provided > stderr 1`] = `

  ERROR A <package-name> is required.
`

exports[`test/bin.spec.js TAP find \`chalk\` in jest > stdout 1`] = `

  Who required chalk:

  jest > babel-register > babel-core > babel-code-frame > chalk@^1.1.3
  jest > babel-register > babel-core > babel-helpers > babel-template > babel-traverse > babel-code-frame > chalk@^1.1.3
  jest > babel-register > babel-core > babel-template > babel-traverse > babel-code-frame > chalk@^1.1.3
  jest > babel-register > babel-core > babel-traverse > babel-code-frame > chalk@^1.1.3

`

exports[`test/bin.spec.js TAP find \`chalk\` in npm-why > stdout 1`] = `

  No one requires chalk.
`

exports[`test/bin.spec.js TAP find \`mri\` in npm-why > stdout 1`] = `

  Who required mri:

  npm-why > npm-why > mri@^1.1.1

`
