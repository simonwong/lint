import * as path from 'path'
import * as fs from 'fs'

// const esConfig = {
//   file: '.eslintrc.js',
//   template: `module.exports = {
//   extends: [require.resolve('@yueqing/lint/lib/eslint')],
//   ignorePatterns: ["**/lib/*"],
//   rules: {
//   },
// }

// `
// }

const tsConfig = {
  file: '.eslintrc.js',
  template: `module.exports = {
  extends: [require.resolve('@yueqing/lint/lib/ts-eslint')],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
  },
}

`
}

const prettierConfig = {
  file: '.prettierrc.js',
  template: `const fabric = require('@yueqing/lint')

module.exports = {
  ...fabric.prettier,
}

`
}

// const esConfigList = [
//   esConfig,
//   prettierConfig
// ]

const tsConfigList = [
  tsConfig,
  prettierConfig
]

const rootPath = process.cwd()

const writeConfig = async () => {
  for (const { file, template } of tsConfigList) {
    const filePath = path.join(rootPath, file)
    if (fs.existsSync(filePath)) {
      console.log(`${file} already exists, skipping creation`)
    } else {
      fs.writeFile(filePath, template, (e) => {
        if (e) {
          throw e
        }
        console.log(`${file} created successfully`)
      })
    }
  }
}

writeConfig()
