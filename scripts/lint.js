const fs = require('fs')
const path = require('path')
const { exec } = require('child_process')
const pkg = require('../package.json')

const libPath = path.join(__dirname, '../lib')
const examplePath = path.join(__dirname, '../example')
const exampleModulesPath = path.join(examplePath, 'node_modules')
const examplePkgPath = path.join(exampleModulesPath, pkg.name)

try {
  fs.accessSync(exampleModulesPath)
  fs.mkdirSync(examplePkgPath, { recursive: true })
} catch (err) {
  throw Error(err)
}

exec(`cp -rf ${libPath} ${examplePkgPath}`, (error, stdout, stderr) => {
  console.log(stdout)
  if (!error) {
    console.log('Copy lib to node_modules success!')
  } else {
    throw new Error(stderr)
  }
})

exec('yarn lint', {
  cwd: examplePath,
}, (error, stdout) => {
  console.log(stdout)
  if (error) {
    process.exit(1)
  }
})

