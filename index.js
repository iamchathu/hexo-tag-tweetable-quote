/**
 * @file This is a tweetable quotes tag plugin for the Hexo static site generator.
 * @copyright Chathu Vishwajith 2015-2016
 * @author Chathu Vishwajith
 * @license MIT
 */
const path = require('path');
const nunjucks = require('nunjucks');
const querystring = require('querystring');

//nunjucks.configure(__dirname, {watch: false});

hexo.extend.tag.register('tweetable-tag', function(args) {

	let qoute = arg[0];
	let author = arg[1];
	const url = 'https://twitter.com/intent/tweet?text='+querystring.stringify(quote+"-"+author);

	const data = {quote: quote, author: author,url:url};

	return new Promise(function (resolve, reject) {
    	nunjucks.render('tweetable-quote.njk', data, function (err, res) {
      	if (err) {
       		return reject(err);
      	}
      		resolve(res);
    	});
  	});
  
},{async: true});
