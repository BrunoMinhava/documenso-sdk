
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { Documenso2SDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = Documenso2SDK.test()
    equal(testsdk instanceof Documenso2SDK, true,
      'Documenso2SDK.test() must return a client synchronously')
  })

})
