<img align="right" height="100" src="https://github.com/midhunhk/artwork/blob/master/TripOMeter/exp/app_icon.png" />

# Trip-O-Meter-Web

[![Build Status](https://travis-ci.org/RaghuChandrasekaran/trip-o-meter-web.svg?branch=master)](https://travis-ci.org/RaghuChandrasekaran/trip-o-meter-web)
[![Coverage Status](https://coveralls.io/repos/github/RaghuChandrasekaran/trip-o-meter-web/badge.svg?branch=master)](https://coveralls.io/github/RaghuChandrasekaran/trip-o-meter-web?branch=master)
[![Dependency Status](https://img.shields.io/david/RaghuChandrasekaran/trip-o-meter-web.svg?style=flat-square)](https://david-dm.org/RaghuChandrasekaran/trip-o-meter-web)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTION.md#pull-requests)

Trip-O-Meter is an app to calculate fuel cost for a trip and provide other helpful things when planning for a trip.

This repo is the web version of Trip-O-Meter android app & also hosts API for fetching fuel prices.

API created for usage in [Trip-O-Meter Android App](https://github.com/midhunhk/trip-o-meter/)


## Features
- API for fuel prices in India
- Data ategorised by Metro,Capitals & State
- Web version of Trip-O-Meter Android App *[In Progress]*

## Documentation

The documentation for API is available at [Trip-O-Meter](https://tripometer.herokuapp.com).
The documentation is generated with the help of [apidocs](http://apidocjs.com/).

## Usage
### Example using Javascript
```
const axios=require('axios');

axios.get('https://tripometer.herokuapp.com/cost/IN/metro')
.then(res => console.log(res.data))
```

>Note: This application is hosted in Heroku in a free dyno.Since the app is web dyno,if it receives no traffic in a 30 minute period, the web dyno will sleep.

## Contribution

**Contributions are always welcome!**

Please take a moment to review the [guidelines for contributing](CONTRIBUTION.md).

* [Pull requests](CONTRIBUTION.md#pull-requests)
* [Development Process](CONTRIBUTION.md#development)

## Release

The codenames for releases are names of Lost or Mythical cities from world history. They are named in alphabetical order and correspond to features of a public release. 

The current development branch name is :

***Balanjar*** was a medieval city located in the North Caucasus region, between the cities of Derbent and Samandar, which flourished from the seventh to the tenth centuries CE.

See more - [Codenames](https://github.com/midhunhk/trip-o-meter/wiki/Codenames)

## License
This project is released under [MIT license](https://github.com/RaghuChandrasekaran/trip-o-meter-web/blob/master/LICENSE).

## Thanks!
- [Midhun Harikumar](https://github.com/midhunhk)
