# node-fetch-twilio-text
Node application that fetches a web page, parses and processes the HTML, and texts the result to a phone number using the twilio API. Requires a [twilio](https://www.twilio.com/) API Key.

## Dependencies

* `twilio`
* `jsdom`
* `dotenv`

## To install:

1) `yarn install` to install dependencies.
2) `cp .env.sample .env` to copy sample .env file and edit the following values: 
	* Twilio Account SID and Auth Token 
	* Twilio Phone #
	* Recipient Phone # 
	* The URL to fetch
4) Edit `parse.js` to parse the HTML response into a string that `message.js` can send.

## To run:

```
yarn start
```

To run on a schedule, you can use [cron](https://en.wikipedia.org/wiki/Cron) :

`chmod +x app.js` - make app.js executable

`crontab -e` edit crontab and add a line with something like:

	`* * * * * path/to/app.js`

See [https://crontab.guru/](https://crontab.guru/) for `crontab` formatting and [https://linux.die.net/man/1/crontab](https://linux.die.net/man/1/crontab) for `cron` details.

