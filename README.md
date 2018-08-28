# yarn-why [![npm-version][npm-badge]][npm-link]

Identifies why a package has been installed.

__Difference to `yarn why`__

- Full requiring path (`yarn why` only list direct dependents).
- Read from `yarn.lock` locally (no network request), blazing fast.
- Simpler output, consistent with [`npm-why`](https://www.npmjs.com/package/npm-why).

## Install & Usage

```bash
npm install -g yarn-why
```

```bash
Usage

  $ yarn-why <package>

Examples

  $ yarn-why chalk
```

## Related

- [npm-why][npm-why-link] - Identifies why a package has been installed (by `package-lock.json`).
- [nls][nls-link] - Missing inspector for npm packages.

## License

MIT @ Amio

[amio-link]: https://github.com/amio
[npm-badge]: https://badgen.net/npm/v/yarn-why
[npm-link]: https://www.npmjs.com/package/yarn-why
[nls-link]: https://github.com/amio/nls
[npm-why-link]: https://github.com/amio/npm-why
