import { ESLint as Lint } from 'eslint'
import Test from 'ava'

const Resolve = __resolve

Test('default', async (test) => {

  let code = 'export const FilePath = __filePath'
  let option = { 'extends': await Resolve('@virtualpatterns/eslint-config-mablung-makefile-environment') }

  let lint = new Lint({ 'baseConfig': option })
  let result = await lint.lintText(code)
  
  test.is(result.length, 1)
  test.is(result[0].messages.length, 0)

})
