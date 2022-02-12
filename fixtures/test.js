const path = require('path')
const fs = require('fs')

const { ESLint } = require('eslint')

const { logError, logTitle, logInfo } = require('./helpers')

const jsTestRootFiles = ['react', 'javascript']
const tsTestRootFiles = ['react-ts', 'typescript']

const PASS_ICON = '✅'
const FAIL_ICON = '❌'

// root path
const ROOT_PATH = path.join(process.cwd(), '/fixtures')

// Test Result Flag
let TEST_RESULT = true

/**
 * 获取文件夹下的所有文件
 * @param {*} folderPath
 * @returns
 */
const getFilesUnderFolder = folderPath => {
  const ans = []
  fs.readdirSync(folderPath).forEach(testFile => {
    const curTestFile = path.join(folderPath, testFile)
    const statsObj = fs.statSync(curTestFile)
    if (statsObj.isFile) {
      ans.push({
        path: curTestFile,
        name: testFile,
      })
    }
  })
  return ans
}

/**
 * 分别运行执行文件目录下的 pass 和 fail 的根目录文件
 * @param {*} name
 * @param {*} targetFiles
 * @param {*} lintInstance
 */
const runTestInTargetFiles = async (name, targetFiles, lintInstance) => {
  logTitle(`\n${name} config test result: `)

  for (const fileName of targetFiles) {
    // start PASS files
    logTitle(`\n  ${fileName} - pass`)

    const testPassPath = path.join(ROOT_PATH, `${fileName}/pass`)

    for (const fileObj of getFilesUnderFolder(testPassPath)) {
      const [passLintRes] = await lintInstance.lintFiles(fileObj.path)
      const testPass = passLintRes.errorCount === 0 && passLintRes.warningCount === 0
      logInfo(`\n    -- ${fileObj.name}   ${testPass ? PASS_ICON : FAIL_ICON}`)
      if (!testPass) {
        TEST_RESULT = false
        logError(...passLintRes.messages.map(msg => `\n${msg.line},${msg.column}: ${msg.message}`))
      }
    }

    // start FAIL files
    logTitle(`\n  ${fileName} - fail`)

    const testFileFailPath = path.join(ROOT_PATH, `${fileName}/fail`)

    for (const fileObj of getFilesUnderFolder(testFileFailPath)) {
      const [passLintRes] = await lintInstance.lintFiles(fileObj.path)
      // 不够严谨，最好是在 fail 文件中配置 errorCount 和 warningCount，然后再判断是否可以 pass
      const testPass = passLintRes.errorCount !== 0 || passLintRes.warningCount !== 0
      logInfo(`\n    -- ${fileObj.name}   ${testPass ? PASS_ICON : FAIL_ICON}`)
      logInfo(`     ErrorCount: ${passLintRes.errorCount}  WarningCount: ${passLintRes.warningCount}`)
      logInfo(`     ${passLintRes.messages.map(msg => msg.messageId).join('; ')}`)

      if (!testPass) {
        TEST_RESULT = false
      }
    }
  }
}

/* =========== es 测试 ========= */
const testEsConfig = async () => {
  const lintInstance = new ESLint({
    cwd: ROOT_PATH,
    useEslintrc: false,
    overrideConfigFile: path.join(ROOT_PATH, 'eslintrc.js')
  })

  await runTestInTargetFiles(
    'ES',
    jsTestRootFiles,
    lintInstance,
  )
}

/* =========== ts 测试 ========= */
const testTsConfig = async () => {
  const lintInstance = new ESLint({
    cwd: ROOT_PATH,
    useEslintrc: false,
    overrideConfigFile: path.join(ROOT_PATH, 'eslintrc-ts.js')
  })

  await runTestInTargetFiles(
    'TS',
    tsTestRootFiles,
    lintInstance,
  )
}

const runTest = async () => {
  await testEsConfig()
  await testTsConfig()

  if (!TEST_RESULT) {
    logError('\nPlease Check Your Test Cases!\n')
    process.exit(1)
  } else {
    logInfo(`\nAll Tests Passed!\n`)
  }
}

runTest()
