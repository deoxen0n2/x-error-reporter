import test from 'tape'
import config from './config'
import Raven from 'raven'

import { Reporter, RavenAdapter } from '../../src/'

test('reporting error with raven (Sentry)', (t) => {
  t.plan(1)

  const raven = Raven.config(config.raven.dsn, config.raven.options)

  const adapter = new RavenAdapter(raven)

  const user = {
    id: 'test-user-id-1234'
  }

  const req = {
    user,

    ip: '127.0.0.1'
  }

  const tags = [ 'test', 'bug' ]

  const reporter = new Reporter(adapter)

  const error = new Error('Foo')

  reporter.capture(error, { req, tags })
    .then((result) => {
      t.ok(typeof result.id === 'string', 'should have id property on result')
    })
    .catch(t.error)
})
