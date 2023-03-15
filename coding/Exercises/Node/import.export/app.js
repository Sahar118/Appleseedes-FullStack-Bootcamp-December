// 1


//  Q -What is the difference between import and require?

// One of the major differences between require() and import() is that require() can be called from anywhere inside the program whereas import() cannot be called conditionally, it always runs at the beginning of the file.

// To use the require() statement, a module must be saved with .js extension as opposed to .mjs when the import() statement is used.

// ES modules can be loaded dynamically via the import() function unlike require().


// How can you enable using the import syntax using node js?

// you have to specify the type as module in package.json


// Give 2 node.js environment variables that are not available when using the import syntax.
//  __dirname and __filename.

import { firstName, lastName } from './functions'

// Import the file system module using the import syntax.

import fs from 'fs'