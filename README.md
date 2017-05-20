Generic error reporter.

> **Development status:** Right now the only supported service is Sentry.

## Install

```sh
$ yarn add x-error-reporter   # or npm install --save x-error-reporter
```

## Usage

```js
  import Raven from 'raven'
  import { Reporter, RavenAdapter } from 'x-error-reporter'

  // Normal Raven configuration.
  const raven = Raven.config('https://***********@sentry.io/xxxxxx', {
    release: '1.3.0',
    environment: 'staging'
  })

  // Setup.
  const adapter = new RavenAdapter(raven)
  const reporter = new Reporter(adapter)

  // Error.
  const error = new Error('Foo')

  // Additional data.
  const user = {
    id: 'test-user-id'
  }
  const req = {
    user,

    ip: '127.0.0.1'
  }
  const tags = [ 'unexpected', 'bug' ]

  // Report error.
  reporter.capture(error, { req, tags })
    .then((result) => {
      console.log(result.id)   // print log event id.
    })
    .catch((error) => {
      console.log('Error:', error)
    })
```

## Tests

```sh
$ yarn test               # or npm test, run unit test, does not require external setup.

$ yarn test-integration   # or npm run test-integration, run integration test,
                          # requires external setup, see `test/integration/config.js.example`.
```

# License

Copyright 2017 Saran Siriphantnon &lt;deoxen0n2@gmail.com&gt; MIT License.
