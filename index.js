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

        var response = choose_install();

        if(response.selection === 'Install everthing.' ||
            response.selection === 'Install devtools and configuration files, no extra apps.') {

            // install_config();
            // install_devtools();
            // install_apps();
        }

        if(response.selection === 'Install everthing.' ||
            response.selection === 'Install devtools and configuration files, no extra apps.'
            response.selection === '')

        })
        .parse(process.argv);


async function choose_install() {
    let response = await inquirer
        .prompt([
            {
                type: 'list',
                name: 'selection',
                message: 'What do you want to do?',
                choices: [
                    'Install everthing.',
                    'Install everything except the configuration files (.bash_profile, .nvm ...).',
                    'Install devtools and configuration files, no extra apps.',
                    'Only install devtools (node, npm, nvm, ember, vue, ...).'
                ]
            }
        ]);

    return response;
}

async function install_config() {
    // check with user for whether any installs should be excluded
    await inquirer
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
                    // shell.exec('git config --global core.excludesfile ~/.gitignore');
                    // shell.exec('echo *.DS_Store >> ~/.gitignore');
                } else {
                    // file exists
                    inquirer
                        .prompt([
                            {
                                type: 'expand',
                                message: 'File exists: Overwrite .gitignore?',
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
                            // overwrite current file
                            if (answers.overwrite === 'overwrite') {
                                // shell.exec('git config --global core.excludesfile ~/.gitignore');
                                // shell.exec('echo *.DS_Store >> ~/.gitignore');
                            }
                        });
                }

                // check for bash profile
                if (answers.config[i] === 'bash_profile' && !shell.test('-e', file)) {
                    // terminal settings | create bash_profile
                    // shell.exec('cat ./tools/bash_profile > ~/.bash_profile');
                    // initialize bash_profile
                    // shell.exec('source ~/.bash_profile');
                } else {
                    // file exists
                    inquirer
                        .prompt([
                            {
                                type: 'expand',
                                message: 'File exists: Overwrite .bash_profile?',
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
                            if (answers.overwrite === 'overwrite') {
                                // terminal settings | create bash_profile
                                // shell.exec('cat ./tools/bash_profile > ~/.bash_profile');
                                // initialize bash_profile
                                // shell.exec('source ~/.bash_profile');
                            }
                        });
                }

                // check for bashrc
                if (answers.config[i] === 'bashrc' && !shell.test('-e', file)) {
                    // terminal settings | create bash_profile
                    // shell.exec('cat ./tools/bashrc > ~/.bashrc');
                    // initialize bash_profile
                    // shell.exec('source ~/.bashrc');
                } else {
                    // file exists
                    inquirer
                        .prompt([
                            {
                                type: 'expand',
                                message: 'File Exists: Overwrite .bashrc?',
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
                            if (answers.overwrite === 'overwrite') {
                                // terminal settings | create bash_profile
                                // shell.exec('cat ./tools/bashrc > ~/.bashrc');
                                // initialize bash_profile
                                // shell.exec('source ~/.bashrc');
                            }
                        });
                }

                // check for nvm config
                if (answers.config[i] === 'nvm' && !shell.test('-e', file)) {
                    // create nvm directory
                    // shell.exec('mkdir ~/.nvm');
                } else {
                    // file exists
                    inquirer
                        .prompt([
                            {
                                type: 'expand',
                                message: 'File Exists: Overwrite .nvm?',
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
                            if (answers.overwrite === 'overwrite') {
                                // create nvm directory
                                // shell.exec('mkdir ~/.nvm');
                            }
                        });
                }

                // check for tmux config
                if (answers.config[i] === 'tmux' && !shell.test('-e', file)) {
                    // tmux settings | create tmux.conf
                    // shell.exec('cat ./tools/tmux.conf > ~/.tmux.conf');
                    // initialize .tmux.conf
                    // tmux source-file ~/.tmux.conf
                } else {
                    // file exists
                    inquirer
                        .prompt([
                            {
                                type: 'expand',
                                message: 'File Exists: Overwrite .tmux?',
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
                            if (answers.overwrite === 'overwrite') {
                                // tmux settings | create tmux.conf
                                // shell.exec('cat ./tools/tmux.conf > ~/.tmux.conf');
                                // initialize .tmux.conf
                                // tmux source-file ~/.tmux.conf
                            }
                        });
                }

                // check for vimrc config
                if (answers.config[i] === 'vimrc' && !shell.test('-e', file)) {
                    // vim settings | create .vimrc
                    // shell.exec('touch .vimrc');
                    // copy over .vimrc
                    // shell.exec('cat .vimrc > ~/.vimrc');
                    // vim package manager ~ pathogen
                    // shell.exec('mkdir -p ~/.vim/autoload ~/.vim/bundle && \
                    // curl -LSso ~/.vim/autoload/pathogen.vim https://tpo.pe/pathogen.vim');
                    // install NERDTree
                    // shell.exec('git clone https://github.com/scrooloose/nerdtree.git ~/.vim/bundle/nerdtree');
                    // link .vimrc
                    // shell.exec('source ~/.vimrc');
                } else {
                    // file exists
                    inquirer
                        .prompt([
                            {
                                type: 'expand',
                                message: 'File Exists: Overwrite .vimrc?',
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
                            if (answers.overwrite === 'overwrite') {
                                // vim settings | create .vimrc
                                // shell.exec('touch .vimrc');
                                // copy over .vimrc
                                // shell.exec('cat .vimrc > ~/.vimrc');
                                // vim package manager ~ pathogen
                                // shell.exec('mkdir -p ~/.vim/autoload ~/.vim/bundle && \
                                // curl -LSso ~/.vim/autoload/pathogen.vim https://tpo.pe/pathogen.vim');
                                // install NERDTree
                                // shell.exec('git clone https://github.com/scrooloose/nerdtree.git ~/.vim/bundle/nerdtree');
                                // link .vimrc
                                // shell.exec('source ~/.vimrc');
                            }
                        });
                }
            }
        })
}

async function install_devtools() {
    // install devtools
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

        });
}
