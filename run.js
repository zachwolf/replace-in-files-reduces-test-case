#!/usr/bin/env node

const path = require('path')
const replaceInFiles = require('replace-in-files')

const files = ['/tests'].map(s => {
  return path.join(process.cwd(), s)
})

replaceInFiles(
  {
    files,
    from:  /%%app%%/g,
    to: 'TESTING',
  }
)
