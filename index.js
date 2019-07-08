#!/usr/bin/env node

/**
 * Module dependencies.
 */

var program = require('commander');
var inquirer = require('inquirer');

// run setup program
program
  .version('1.0.0')
  .option('-a, --all', 'Add All')
  .option('-t, --devtools', 'Tools Only')
  .action(function() {
      inquirer
          .prompt([
            {
              type: 'list',
              name: 'selection',
              message: 'What do you want to do?',
              choices: [
                'Install Everything',
                'Only Install DevTools'
              ]
            }
          ])
          .then(answers => {
            console.log(JSON.stringify(answers, null, '  '));

            inquirer
                .prompt([
                    {
                      type: 'list',
                      name: 'choices',
                      message: 'Select options to ignore (if any)',
                      choices: ['Jumbo', 'Large', 'Standard', 'Medium', 'Small', 'Micro'],
                      filter: function(val) {
                        return val.toLowerCase();
                      }
                    }
                ])
                .then(answers => {
                    
                })
          });
  })
  .parse(process.argv);
