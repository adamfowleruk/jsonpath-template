# jsonpath-template
String template library inspired by both jsonpath and string-template projects

Uses jsonpath to provide the path handling. Kept as simple as possible - so no template loading or caching from files.

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.com/adamfowleruk/jsonpath-template.svg?branch=master)](https://travis-ci.com/adamfowleruk/jsonpath-template)
[![Coverage Status](https://coveralls.io/repos/github/adamfowleruk/jsonpath-template/badge.svg?branch=master)](https://coveralls.io/github/adamfowleruk/jsonpath-template?branch=master)
![David](https://img.shields.io/david/adamfowleruk/jsonpath-template.svg)
![npm](https://img.shields.io/npm/v/jsonpath-template.svg)
![npm](https://img.shields.io/npm/dt/jsonpath-template.svg)
![node](https://img.shields.io/node/v/jsonpath-template.svg)

## Usage

Basic usage is as below:-

```js
const jpt = require('jsonpath-template');
var tplString = "Hello there {$.person.name}, isn't it a {$.daytype} day?";
var json = {person:{name:"Adam"},daytype: "nice"};
var template = new jpt(tplString);
console.log(template.apply(json));
```

This produces:-

```text
Hello there Adam, isn't is a nice day?
```

You can also specify custom start and end tags:-

```js
const jpt = require('jsonpath-template');
var tplString = "Hello there [[$.person.name]], isn't it a [[$.daytype]] day?";
var json = {person:{name:"Adam"},daytype: "nice"};
var template = new jpt(tplString);
console.log(template.tags("[[","]]").apply(json));
```

Which produces the same output as the first example. Note that you can chain tags and apply, for convenience.

As jsonpath is used for path handling you shouldn't use any tag values that can be found within a jsonpath. An example of this would be single quote characters, or dollar signs, or single square brackets. Double of each of these should be fine, as in the above example.

Any jsonpath suported by the jsonpath library is valid. So for example, the following template string would work with the last example:-

```js
var tplString = "Hello there [[$['person'].name]], isn't it a [[$.daytype]] day?";
```

## License and Copyright

Copyright Adam Fowler. License is MIT.