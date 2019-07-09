#!/usr/bin/env node

/**
 * Module dependencies.
 */

var program = require('commander');
var inquirer = require('inquirer');
var shell = require('shelljs');

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
                'Install everthing.',
                'Install everything except the configuration files (.bash_profile, .nvm ...).',
                'Install devtools and configuration files.'
                'Only install devtools (node, npm, nvm, ember, vue, ...).'
              ]
            }
          ])
          .then(answers => {
            console.log(JSON.stringify(answers, null, '  '));

            if(answers === 'Install everthing.') {
                inquirer
                    .prompt([
                        {
                          type: 'list',
                          name: 'configuration',
                          message: 'Select options to ignore (if any)',
                          choices: ['.gitignore', '.bash_profile', '.bashrc', '.', '.nvm', '.tmux', '.vimrc', 'pathogen', 'NERDTree']
                        }
                    ])
                    .then(answers => {
                        // shell.exec();
                    })
                });
            } else {
                inquirer
                    .prompt([
                        {
                          type: 'list',
                          name: 'configuration',
                          message: 'Select options to ignore (if any)',
                          choices: ['Jumbo', 'Large', 'Standard', 'Medium', 'Small', 'Micro']
                        }
                    ])
                    .then(answers => {
                        // shell.exec();
                    })
                });
            }
  })
  .parse(process.argv);
