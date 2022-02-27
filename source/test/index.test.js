import { ESLint } from 'eslint'
import Test from 'ava'

const Lint = new ESLint({ 
  'baseConfig': { 
    'extends': '@virtualpatterns/eslint-config-mablung-makefile-environment'
  } 
})

Test('__filePath', async (test) => {

  let code = 'export const FilePath = __filePath'
  let result = await Lint.lintText(code)
  
  test.is(result.length, 1)
  test.is(result[0].messages.length, 0)

})

Test('__folderPath', async (test) => {

  let code = 'export const FolderPath = __folderPath'
  let result = await Lint.lintText(code)
  
  test.is(result.length, 1)
  test.is(result[0].messages.length, 0)

})

Test('__resolve', async (test) => {

  let code = 'export function GetFilePath() { return __resolve(\'./index.js\') }'
  let result = await Lint.lintText(code)

  test.is(result.length, 1)
  test.is(result[0].messages.length, 0)

})
