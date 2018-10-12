/**
 * @file This is a tweetable quotes tag plugin for the Hexo static site generator.
 * @copyright Chathu Vishwajith 2015-2016
 * @author Chathu Vishwajith
 * @license MIT
 */

// Strict mode.
"use strict";

// Package modules.
const assign = require("object-assign");
const path = require("path");
const nunjucks = require("nunjucks");
const querystring = require("querystring");

// Configuration
hexo.config.tweetableQuote = assign({
  quote_font_color: "#258fb8",
  quote_font_size: "1.7em",
  link_font_color: "#6e7b8d",
  link_font_size: "1.0em",
  via_twitter_account: "",
  related_twitter_accounts: ""
}, hexo.config.tweetableQuote);

nunjucks.configure(__dirname, {watch: false});

hexo.extend.tag.register("tweetableQuote", function(args) {

  let quote = args[0];
  let author = args[1];
  let hashtags = args[2];

  let URLData = {};
  URLData.text = quote + " - " + author;
  if (hexo.config.tweetableQuote.via_twitter_account) {
    URLData.via = hexo.config.tweetableQuote.via_twitter_account;
  }
  if (hexo.config.tweetableQuote.related_twitter_accounts) {
    URLData.related = hexo.config.tweetableQuote.related_twitter_accounts;
  }
  if (hashtags) {
    URLData.hashtags = hashtags;
  }
  if (this.permalink) {
    URLData.url = this.permalink;
  }

  let tweetURL = "https://twitter.com/intent/tweet?" + querystring.stringify(URLData);

  const data = {
    "quote": quote,
    "author": author,
    "tweetURL": tweetURL,
    "quote_font_color": hexo.config.tweetableQuote.quote_font_color,
    "quote_font_size": hexo.config.tweetableQuote.quote_font_size,
    "link_font_size": hexo.config.tweetableQuote.link_font_size,
    "link_font_color": hexo.config.tweetableQuote.link_font_color
  };

  return new Promise(function(resolve, reject) {
    nunjucks.render("tweetable-quote.njk", data, function(err, res) {
      if (err) {
        return reject(err);
      }
      resolve(res);
    });
  });

}, {async: true});
