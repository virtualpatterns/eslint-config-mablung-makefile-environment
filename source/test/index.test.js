import { ESLint as Lint } from 'eslint'
import Test from 'ava'

const Require = __require

Test('__filePath', async (test) => {

  let code = 'const FilePath = __filePath // eslint-disable-line no-unused-vars'
  let option = {
    'extends': Require.resolve('@virtualpatterns/eslint-config-mablung-makefile-environment')
  }

  let lint = new Lint({ 'baseConfig': option })
  let result = await lint.lintText(code)
  
  test.is(result.length, 1)
  test.is(result[0].messages.length, 0)

})

Test('__require', async (test) => {

  let code = 'const Require = __require // eslint-disable-line no-unused-vars'
  let option = {
    'extends': Require.resolve('@virtualpatterns/eslint-config-mablung-makefile-environment')
  }

  let lint = new Lint({ 'baseConfig': option })
  let result = await lint.lintText(code)

  test.is(result.length, 1)
  test.is(result[0].messages.length, 0)

})
