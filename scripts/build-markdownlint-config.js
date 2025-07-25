#!/usr/bin/env node

/**
 * Build markdownlint configuration by merging proper names from external file
 * This keeps the main config clean and the proper names list maintainable
 */

const fs = require('fs')
const path = require('path')

const configPath = path.join(__dirname, '..', '.markdownlint-cli2.jsonc')
const properNamesPath = path.join(__dirname, '..', '.markdownlint-proper-names.json')

try {
  // Read the proper names configuration
  const properNamesConfig = JSON.parse(fs.readFileSync(properNamesPath, 'utf8'))

  // Flatten all proper names into a single array
  const allProperNames = Object.values(properNamesConfig).flat().sort()

  console.log(`Loaded ${allProperNames.length} proper names from configuration`)
  console.log('Categories:', Object.keys(properNamesConfig).join(', '))

  // For now, just log the names that would be used
  // In the future, this script could automatically update the config
  console.log('\nProper names to be used in MD044 rule:')
  console.log(JSON.stringify(allProperNames, null, 2))
} catch (error) {
  console.error('Error building markdownlint config:', error.message)
  process.exit(1)
}
