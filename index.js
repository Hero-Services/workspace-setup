#!/usr/bin/env node

/**
 * Module dependencies.
 */

var program = require('commander');
var inquirer = require('inquirer');
var shell = require('shelljs');
var fs = require("fs");

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
                        'Install devtools and configuration files.',
                        'Only install devtools (node, npm, nvm, ember, vue, ...).'
                    ]
                }
            ])
            .then(answers => {
                if(answers.selection === 'Install everthing.') {
                    // check with user for whether any installs should be excluded
                    inquirer
                        .prompt([
                            {
                                type: 'checkbox',
                                name: 'config',
                                message: 'Unselect any options to ignore',
                                choices: [
                                    {
                                        name: 'gitignore',
                                        checked: 'true'
                                    },
                                    {
                                        name: 'bash_profile',
                                        checked: 'true'
                                    },
                                    {
                                        name: 'bashrc',
                                        checked: 'true'
                                    },
                                    {
                                        name: 'nvm',
                                        checked: 'true'
                                    },
                                    {
                                        name: 'tmux',
                                        checked: 'true'
                                    },
                                    {
                                        name: 'vimrc',
                                        checked: 'true'
                                    },
                                    {
                                        name: 'pathogen',
                                        checked: 'true'
                                    },
                                    {
                                        name: 'NERDTree',
                                        checked: 'true'
                                    }
                                ]
                            }
                        ])
                        .then(answers => {
                            // go through config files other than selected exclusions
                            for(var i=0; i < answers.config.length; i++) {
                                let file = '~/.' + answers.config[i];

                                // check for gitignore
                                if (answers.config[i] === 'gitignore' && !shell.test('-e', file)) {
                                    shell.exec('git config --global core.excludesfile ~/.gitignore');
                                    shell.exec('echo *.DS_Store >> ~/.gitignore');
                                } else {
                                    // file exists
                                    inquirer
                                        .prompt([
                                            {
                                                type: 'expand',
                                                message: '',
                                                name: 'overwrite',
                                                choices: [
                                                    {
                                                        key: 'Y',
                                                        name: 'Overwrite',
                                                        value: 'overwrite'
                                                    },
                                                    {
                                                        key: 'n',
                                                        name: 'Skip',
                                                        value: 'skip'
                                                    }
                                                ]
                                            }
                                        ])
                                        .then(answers => {
\                                            // overwrite current file
                                            if (answers.overwrite === 'overwrite') {
                                                shell.exec('git config --global core.excludesfile ~/.gitignore');
                                                shell.exec('echo *.DS_Store >> ~/.gitignore');
                                            }
                                        });
                                }

                                // check for bash profile
                                if (answers.config[i] === 'bash_profile' && !shell.test('-e', file)) {
                                    console.log('bash doesnt exist');
                                    break;
                                } else {
                                    console.log('file exists');
                                    break;
                                    // file exists
                                    inquirer
                                        .prompt([
                                            {
                                                type: 'expand',
                                                message: 'File Exists: ',
                                                name: 'overwrite',
                                                choices: [
                                                    {
                                                        key: 'y',
                                                        name: 'Overwrite',
                                                        value: 'overwrite'
                                                    },
                                                    {
                                                        key: 'n',
                                                        name: 'Skip',
                                                        value: 'skip'
                                                    }
                                                ]
                                            }
                                        ])
                                        .then(answers => {
                                            // overwrite current file
                                            console.log(answers);
                                        });
                                }

                                // check for bashrc
                                if (answers.config[i] === 'bashrc' && !shell.test('-e', file)) {
                                    console.log('bash doesnt exist');
                                    break;
                                } else {
                                    console.log('file exists');
                                    break;
                                    // file exists
                                    inquirer
                                        .prompt([
                                            {
                                                type: 'expand',
                                                message: 'File Exists: ',
                                                name: 'overwrite',
                                                choices: [
                                                    {
                                                        key: 'y',
                                                        name: 'Overwrite',
                                                        value: 'overwrite'
                                                    },
                                                    {
                                                        key: 'n',
                                                        name: 'Skip',
                                                        value: 'skip'
                                                    }
                                                ]
                                            }
                                        ])
                                        .then(answers => {
                                            // overwrite current file
                                            console.log(answers);
                                        });
                                }

                                // check for nvm config
                                if (answers.config[i] === 'nvm' && !shell.test('-e', file)) {
                                    console.log('bash doesnt exist');
                                    break;
                                } else {
                                    console.log('file exists');
                                    break;
                                    // file exists
                                    inquirer
                                        .prompt([
                                            {
                                                type: 'expand',
                                                message: 'File Exists: ',
                                                name: 'overwrite',
                                                choices: [
                                                    {
                                                        key: 'y',
                                                        name: 'Overwrite',
                                                        value: 'overwrite'
                                                    },
                                                    {
                                                        key: 'n',
                                                        name: 'Skip',
                                                        value: 'skip'
                                                    }
                                                ]
                                            }
                                        ])
                                        .then(answers => {
                                            // overwrite current file
                                            console.log(answers);
                                        });
                                }

                                // check for tmux config
                                if (answers.config[i] === 'tmux' && !shell.test('-e', file)) {
                                    console.log('bash doesnt exist');
                                    break;
                                } else {
                                    console.log('file exists');
                                    break;
                                    // file exists
                                    inquirer
                                        .prompt([
                                            {
                                                type: 'expand',
                                                message: 'File Exists: ',
                                                name: 'overwrite',
                                                choices: [
                                                    {
                                                        key: 'y',
                                                        name: 'Overwrite',
                                                        value: 'overwrite'
                                                    },
                                                    {
                                                        key: 'n',
                                                        name: 'Skip',
                                                        value: 'skip'
                                                    }
                                                ]
                                            }
                                        ])
                                        .then(answers => {
                                            // overwrite current file
                                            console.log(answers);
                                        });
                                }

                                // check for vimrc config
                                if (answers.config[i] === 'vimrc' && !shell.test('-e', file)) {
                                    console.log('bash doesnt exist');
                                    break;
                                } else {
                                    console.log('file exists');
                                    break;
                                    // file exists
                                    inquirer
                                        .prompt([
                                            {
                                                type: 'expand',
                                                message: 'File Exists: ',
                                                name: 'overwrite',
                                                choices: [
                                                    {
                                                        key: 'y',
                                                        name: 'Overwrite',
                                                        value: 'overwrite'
                                                    },
                                                    {
                                                        key: 'n',
                                                        name: 'Skip',
                                                        value: 'skip'
                                                    }
                                                ]
                                            }
                                        ])
                                        .then(answers => {
                                            // overwrite current file
                                            console.log(answers);
                                        });
                                }
                            }
                        })
                    } else {
                        inquirer
                        .prompt([
                            {
                                type: 'list',
                                name: 'configuration',
                                message: 'Select options to ignore (if any)',
                                choices: [
                                    '',
                                ]
                            }
                        ])
                        .then(answers => {
                            // shell.exec();
                        })
                    }
                })
            })
            .parse(process.argv);
