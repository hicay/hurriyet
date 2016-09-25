# Hurriyet
NodeJs Wrapper for Hurriyet API

[![npm version](https://badge.fury.io/js/hurriyet.svg)](https://badge.fury.io/js/hurriyet)
[![Build Status](https://travis-ci.org/hicay/hurriyet.svg?branch=master)](https://travis-ci.org/hicay/hurriyet)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/ec451f098ff84503a8daa9beae6690fc)](https://www.codacy.com/app/caglarispirli/hurriyet?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=hicay/hurriyet&amp;utm_campaign=Badge_Grade)

https://www.npmjs.com/package/hurriyet
## Installation
Install using npm
```
npm install hurriyet
```

## Usage
Get an API key from [https://developers.hurriyet.com.tr](https://developers.hurriyet.com.tr)

```javascript
var hurriyet = require('hurriyet');
var h = new hurriyet('api token');
```

### Article
##### Callback Function
```javascript
var newsCallback = function(err, data)
  if (err)
    console.log(err);
  console.log(data);
  //console.log(data[0].Description); // Description of first node
};
```
##### Get daily news
```javascript
h.Articles.getAll(newsCallback); // Get daily news
h.Articles.getAll({limit:4},newsCallback); // Get top 4 daily news
h.Articles.getAll({limit:4,select:'Description'},newsCallback); // Get top 4 daily news' descriptions
```
##### Get single news from id
```javascript
h.Articles.getWithId(40199111,newsCallback); // Get news from id = 40199111
h.Articles.getWithId(40199111,{select:'Description'},newsCallback); // Get news' description from id = 40199111
```
