# CONTRIBUTING

## Setup

```sh
$ git clone git@github.com:RaghuChandrasekaran/trip-o-meter-web.git
$ cd trip-o-meter-web
$ git checkout develop
$ git branch -b my-feature develop
$ npm install
$ npm start
```

## Workflow

This project follows simplified [gitflow](http://skoch.github.io/Git-Workflow/without-gitflow.html) model.

## Documentation

Documentation for each route is generated with help of [apidoc](http://apidocjs.com/) in `docs` folder.
To see documentation locally run:

```sh
$ npm run docs
$ npm start
```

Then open your browser and visit `http://127.0.0.1:3000` to see the documentation.

## Testing

```sh
$ npm test
```

## [Pull requests](#pull-requests)

We actively welcome your pull requests.

1. Fork the repo and create your feature branch from `develop`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code passes lints.

## License

By contributing to trip-o-meter-web, you agree that your contributions will be licensed
under its [MIT license](https://github.com/RaghuChandrasekaran/trip-o-meter-web/blob/master/LICENSE).
