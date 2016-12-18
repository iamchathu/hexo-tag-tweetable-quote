# hexo-tag-tweetable-quote for [Hexo](https://hexo.io)


[![npm](https://img.shields.io/npm/v/hexo-tag-tweetable-quote.svg)](https://www.npmjs.com/package/hexo-tag-tweetable-quote)
[![Known Vulnerabilities](https://snyk.io/test/github/iamchathu/hexo-tag-tweetable-quote/badge.svg)](https://snyk.io/test/github/iamchathu/hexo-tag-tweetable-quote)
[![Build Status](https://travis-ci.org/iamchathu/hexo-tag-tweetable-quote.svg?branch=master)](https://travis-ci.org/iamchathu/hexo-tag-tweetable-quote)
[![Dependency Status](https://gemnasium.com/badges/github.com/iamchathu/hexo-tag-tweetable-quote.svg)](https://gemnasium.com/github.com/iamchathu/hexo-tag-tweetable-quote)
[![Code Climate](https://codeclimate.com/github/iamchathu/hexo-tag-tweetable-quote/badges/gpa.svg)](https://codeclimate.com/github/iamchathu/hexo-tag-tweetable-quote)
[![bitHound Overall Score](https://www.bithound.io/github/iamchathu/hexo-tag-tweetable-quote/badges/score.svg)](https://www.bithound.io/github/iamchathu/hexo-tag-tweetable-quote)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/b638099f4ae54d66ad048f7fddb4326c)](https://www.codacy.com/app/imchathu/hexo-tag-tweetable-quote?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=iamchathu/hexo-tag-tweetable-quote&amp;utm_campaign=badger)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/iamchathu/hexo-tag-tweetable-quote/master/LICENSE)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/iamchathu/hexo-tag-tweetable-quote.svg?style=social)](https://twitter.com/intent/tweet?text=Tweetable+Quotes+plugin+for+%40hexojs&url=https%3A%2F%2Fgithub.com%2Fiamchathu%2Fhexo-tag-tweetable-quote)


Click to Tweet / Tweetable quotes for [Hexo](https://hexo.io)

# About

This is a [Hexo](https://hexo.io) tag plugin for including a tweetable quote into your pages/posts. Example of what they can look like is attached below:

![](https://raw.githubusercontent.com/iamchathu/hexo-tag-tweetable-quote/master/screens/preview.png)

Inspired by [RisingStack Blog](https://blog.risingstack.com/node-hero-node-js-authentication-passport-js/).

# Installation

The same as other Hexo plugins its simply:

```npm i -S hexo-tag-tweetable-quote```

In your Hexo project root.


# Usage

## Options
You can configure this plugin in `_config.yml`.

```yaml
tweetableQuote:
  quote_font_color : #258fb8
  quote_font_size  : 1.7em
  link_font_color  : #6e7b8d
  link_font_size   : 1.0em
  via_twitter_account : iamchathu
  related_twitter_accounts : iamchathu,twitter
```

- **quote_font_color** - Font color of quote. Defaults to `#258fb8`.
- **quote_font_size** - Font size of the quote. Defaults to `1.7em`.
- **link_font_color** - Click to tweet link font color. Defaults to `#6e7b8d`.
- **link_font_size** - Click to tweet link font size. Defaults to `1.0em`.
- **via_twitter_account** - Add via @twitter handle. Defaults to ``.
- **related_twitter_accounts** - Add related twitter accounts to show after tweeting. Can add comma separated multiple accounts. Defaults to ``.

The full tag format is as follows:

```
{% tweetableQuote 'quote' 'author' ['hashtags'] %}
```

- **quote** - Quote. Defaults to ``.
- **author** - author name of quote. Defaults to ``.
- **hashtags** - [**Optional**] Comma separated hastags. Defaults to ``.

**Example:**

```
{% tweetableQuote 'I am a deeply superficial person.' 'Andy Warhol' 'quote,qod' %}
```


# Example in the Wild

I normally add Tweetable quote to my blog posts.

You can check one of them at [Chathu's Visionaries](http://chathu.me/about/)

## Tested themes

* [landscape](https://github.com/hexojs/hexo-theme-landscape)

* [icarus](https://github.com/ppoffice/hexo-theme-icarus)

## Todo

- [ ] Add Post URL to tweet [(Issue : Accessing Post/Page URL inside plugin)](https://github.com/hexojs/hexo/issues/2305)
