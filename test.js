var crawler = require('./index')
var AWS = require('aws-sdk')
AWS.config.update({region: "eu-central-1"})

crawler.handler({url: 'https://www.storyblok.com', tentant: 'storyblok'})