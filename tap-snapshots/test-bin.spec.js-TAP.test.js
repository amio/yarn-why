/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/bin.spec.js TAP Exit 1 if no <package-name> provided > stderr 1`] = `

  [31mERROR[39m A <package-name> is required.

`

exports[`test/bin.spec.js TAP find \`mri\` in npm-why > stdout 1`] = `

  Who required [34mmri[39m:

  [34mnpm-why[39m > [34mnpm-why[39m > [34mmri[39m[2m@^1.1.1[22m

`

exports[`test/bin.spec.js TAP find \`chalk\` in npm-why > stdout 1`] = `

  No one requires [34mchalk[39m.
`

exports[`test/bin.spec.js TAP find \`chalk\` in jest > stdout 1`] = `

  Who required [34mchalk[39m:

  [34mjest[39m > [34mbabel-register[39m > [34mbabel-core[39m > [34mbabel-code-frame[39m > [34mchalk[39m[2m@^1.1.3[22m
  [34mjest[39m > [34mbabel-register[39m > [34mbabel-core[39m > [34mbabel-helpers[39m > [34mbabel-template[39m > [34mbabel-traverse[39m > [34mbabel-code-frame[39m > [34mchalk[39m[2m@^1.1.3[22m
  [34mjest[39m > [34mbabel-register[39m > [34mbabel-core[39m > [34mbabel-template[39m > [34mbabel-traverse[39m > [34mbabel-code-frame[39m > [34mchalk[39m[2m@^1.1.3[22m
  [34mjest[39m > [34mbabel-register[39m > [34mbabel-core[39m > [34mbabel-traverse[39m > [34mbabel-code-frame[39m > [34mchalk[39m[2m@^1.1.3[22m

`
