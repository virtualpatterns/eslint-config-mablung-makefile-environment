import { Check } from '@virtualpatterns/mablung-check-dependency'

import Test from 'ava'

const Process = process

Test('default', async (test) => {

  let dependency = await Check()

  test.deepEqual(dependency.missing, {})
  test.deepEqual(dependency.unused, [])

})

Test('section', async (test) => {

  let dependency = await Check(Process.cwd(), {
    'ignoreMatch': [
      '@virtualpatterns/eslint-config-mablung-makefile'
    ]
  })

  test.deepEqual(dependency.section, {})

})
