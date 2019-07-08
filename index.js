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
              name: 'theme',
              message: 'What do you want to do?',
              choices: [
                'Order a pizza',
                'Make a reservation',
                new inquirer.Separator(),
                'Ask for opening hours',
                {
                  name: 'Contact support',
                  disabled: 'Unavailable at this time'
                },
                'Talk to the receptionist'
              ]
            },
            {
              type: 'list',
              name: 'size',
              message: 'What size do you need?',
              choices: ['Jumbo', 'Large', 'Standard', 'Medium', 'Small', 'Micro'],
              filter: function(val) {
                return val.toLowerCase();
              }
            }
          ])
          .then(answers => {
            console.log(JSON.stringify(answers, null, '  '));
          });
  })
  .parse(process.argv);
