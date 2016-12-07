/**
 * @file This is a tweetable quotes tag plugin for the Hexo static site generator.
 * @copyright Chathu Vishwajith 2015-2016
 * @author Chathu Vishwajith
 * @license MIT
 */
const path = require('path');
const nunjucks = require('nunjucks');
const querystring = require('querystring');

nunjucks.configure(__dirname, {watch: false});

hexo.extend.tag.register('tweetableQuote', function(args) {

	let quote = args[0];
	let author = args[1];
	const url = 'https://twitter.com/intent/tweet?'+querystring.stringify({"text":quote+"-"+author,"via":"iamchathu"});

	const data = {"quote": quote, "author": author,"url":url};

	return new Promise(function (resolve, reject) {
    	nunjucks.render('tweetable-quote.njk', data, function (err, res) {
      	if (err) {
       		return reject(err);
      	}
      		resolve(res);
    	});
  	});
  
},{async: true});
