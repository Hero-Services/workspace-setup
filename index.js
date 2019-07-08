#!/usr/bin/env node
 
/**
 * Module dependencies.
 */

var co = require('co');
var prompt = require('co-prompt');
var program = require('commander');
 
program
  .version('1.0.0')
  .option('-a, --all', 'Add All')
  .option('-t, --tools', 'Tools Only')
.action(function(file) {
    co(function *() {
        var username = yield prompt('username: ');
        var password = yield prompt.password('password: ');
       
        console.log('user: %s pass: %s file: %s',
        program.username, program.password, file);
        username, password, file);
    });
  })
  // .parse(process.argv);

 
console.log('default');
if (program.all) console.log('add all');
if (program.tools) console.log('add tools only');
