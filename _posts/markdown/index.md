---
title: 'index'
description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, distinctio, placeat! Consectetur, maxime, repellat. Accusantium officia porro aspernatur enim illum ipsam ex aliquid minima consectetur molestias, laboriosam et blanditiis, soluta.
author: '@james quinn'
keywords: website, with, meta, tags
image: https://i.pinimg.com/736x/90/dc/c6/90dcc62a37c80a17a1e536b47b03f5b1--digital-portrait-digital-artwork.jpg
site_name: '@ayuplus.io'
youtube:
siema:
macy:
---
# gulp-markdown [![Build Status](https://travis-ci.org/sindresorhus/gulp-markdown.svg?branch=master)](https://travis-ci.org/sindresorhus/gulp-markdown)

> Markdown to HTML with [`marked`](https://github.com/chjj/marked)

*Issues with the output should be reported on the `marked` [issue tracker](https://github.com/chjj/marked/issues).*


## Install

```
$ npm install --save-dev gulp-markdown
```

![photo](http://imagecache6.allposters.com/LRG/19/1919/IXM9D00Z.jpg)

## Usage

```js
const gulp = require('gulp');
const markdown = require('gulp-markdown');

gulp.task('default', () =>
	gulp.src('intro.md')
		.pipe(markdown())
		.pipe(gulp.dest('dist'))
);
```


## API

### markdown([options])

See the `marked` [options](https://github.com/chjj/marked#options-1).

### markdown.marked

Access the `marked` object to customize the [lexer](https://github.com/chjj/marked#access-to-lexer-and-parser), [parser](https://github.com/chjj/marked#access-to-lexer-and-parser) or [renderer](https://github.com/chjj/marked#renderer).


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
![photo](https://ongoingpro.com/wp-content/uploads/2014/05/ten-inspiring-photographer-quotes-ansel-adams-620x3201-620x320.jpg)
