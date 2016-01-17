## import-directory [![Build Status](https://travis-ci.org/raymondsze/import-directory.svg)](https://travis-ci.org/raymondsze/import-directory.svg?branch=master)
<p>Same as <a href="https://github.com/troygoode/node-require-directory">require-directory</a></p>
<p>But support to use import and export default syntax in your file inside the directory.</p>
## Install
<p><b>npm install --save require-directory import-directory</b></p>

## How it works
<p>If we use export default inside the directory with <a href="https://github.com/troygoode/node-require-directory">require-directory</a>, the result will become like that..</p>
```javascript
{
	model1: {
		default: {
			name: 'Model1'
		}
	},
	model2: {
		default: {
			name: 'Model2'
		}
	}
}
```
<p>Because export default is same as module.exports = {default: ....}.</p>
<p>But what we want is </p>
```javascript
{
	model1: {
		name: 'Model1'
	},
	model2: {
		name: 'Model2'
	}
}
```
<p>The logic behind is just change the 'visit' option provided by <a href="https://github.com/troygoode/node-require-directory">require-directory</a>.</p>
<p>Note: There the object that export other than <b>export default</b> like <b>export {... as ...}</b> or just <b>export ....</b> will be ignored. </p>

## How to use
<p> as usual as <a href="https://github.com/troygoode/node-require-directory">require-directory</a>, but change the import statement
```javascript
import importDirectory from 'import-directory';
export default importDirectory(module);
```

## LICENSE
The MIT License (MIT)

Copyright (c) 2016 Sze Ka Wai Raymond

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
