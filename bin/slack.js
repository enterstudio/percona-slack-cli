#!/usr/bin/env node

var Slack = require('node-slackr');
var argv = require('minimist')(process.argv.slice(2));

var slackUrl = process.env.SLACK_URL,
    channelName = argv.c || process.env.SLACK_CHANNEL,
    userName = argv.u || process.env.SLACK_USER || process.env.USER,
    message = argv.m;

// Variable validations
if ( slackUrl === undefined ) {
  console.log('undefined SLACK_TOKEN or slackUrl as Env Variable');
  process.exit(1);
}

if ( typeof(channelName) !== 'string' ){
  console.log('undefined channel argv: -c');
  process.exit(1);
}

if ( typeof(message) !== 'string' ){
  console.log('undefined message argv: -m');
  process.exit(1);
}

// Define an example for payload
var payload = { 
    username: userName,
    channel: channelName,
    icon_emoji: ":ghost:",
    text: message,
    attachments: [
       {
	  "pretext":"pretext",
	  "color": "#0000FF",
	  "fields":[
	     {
		"title":"title",
		"value":"foobar",
		"short":false
	     }
	  ]
       }
    ]
};

// Code
slack = new Slack(slackUrl);
slack.notify(payload, function(err, response) {
  if (err) console.log;
  if (process.env.DEBUG) console.log(response);
});
