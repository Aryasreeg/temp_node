# pkg-conf [![Build Status](https://travis-ci.org/sindresorhus/pkg-conf.svg?branch=master)](https://travis-ci.org/sindresorhus/pkg-conf)

> Get namespaced config from the closest package.json

Having tool specific config in package.json reduces the amount of metafiles in your repo (there are usually a lot!) and makes the config obvious compared to hidden dotfiles like `.jshintrc`, which can end up causing confusion. [XO](https://github.com/sindresorhus/xo), for example, use the `xo` namespace in package.json, and [ESLint](http://eslint.org) uses `eslintConfig`. Many more tools supports this, like [AVA](https://ava.li), [Babel](https://babeljs.io), [nyc](https://github.com/bcoe/nyc), etc.


## Install

```
$ npm install --save pkg-conf
```


## Usage

```json
{
	"name": "some-package",
	"version": "1.0.0",
	"unicorn": {
		"rainbow": true
	}
}
```

```js
const pkgConf = require('pkg-conf');

pkgConf('unicorn').then(config => {
	console.log(config.rainbow);
	//=> true
});
```


## API

It [walks up](https://github.com/sindresorhus/find-up) parent directories until a `package.json` can be found, reads it, and returns the user specified namespace or an empty object if not found.

### pkgConf(namespace, [options])

Returns a promise that resolves to the config.

### pkgConf.sync(namespace, [options])

Returns the config.

#### namespace

Type: `string`

The package.json namespace you want.

#### options

##### cwd

Type: `string`<br>
Default: `process.cwd()`

Directory to start looking up for a package.json file.

##### defaults

Type: `Object`<br>

Default config.

### pkgConf.filepath(config)

Pass in the `config` returned from any of the above methods.

Returns the filepath to the package.json file or `null`.


## Related

- [read-pkg-up](https://github.com/sindresorhus/read-pkg-up) - Read the closest package.json file
- [read-pkg](https://github.com/sindresorhus/read-pkg) - Read a package.json file
- [find-up](https://github.com/sindresorhus/find-up) - Find a file by walking up parent directories


## License

MIT ?? [Sindre Sorhus](https://sindresorhus.com)
