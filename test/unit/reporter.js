import test from 'tape'
import * as sinon from 'sinon'

import Reporter from '../../src/reporter'

test('reporting error', (t) => {
  t.plan(2)

  const adapter = {
    capture: sinon.stub().returns(Promise.resolve({}))
  }

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
    .then(() => {
      t.ok(adapter.capture.calledOnce, 'should called adapter#capture() once')
      t.ok(adapter.capture.calledWithExactly(error, { req, tags }), 'should called adapter#capture() with exactly error and additional data')
    })
    .catch(t.error)
})
