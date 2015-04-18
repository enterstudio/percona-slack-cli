# percona-slack-cli

Summary
=======
A simple node.js library for send notifications to [Slack](https://slack.com/) via Incoming WebHooks.


Installation
=======

Install nodeJS from repository: [check here](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)

Then install with npm:
```sh
npm install -g percona-slack-cli
```

Configure the client:
```sh
export SLACK_URL="https://hooks.slack.com/services/your/custom/slackWebbHook"
```

Define some defaults:
```sh
export SLACK_CHANNEL="#general"
export SLACK_USER="messenger"
```

###Send message:

Use your defaults
```sh
slack -m "nice foobared message"
```

Override your defaults
```sh
slack -u newBot -c "#channel" -m "nice new message wihtout defaults"
```

Send a Direct Message
```sh
slack -c "@someuser" -m "Direct message from bot"
```

Change status style
```sh
slack -s danger -m "Houston! we have a problem!"
```

###TODO:

- Customize your attachments
- Send to multiples channels
