#!/usr/bin/env node

/**
 * Module dependencies.
 */

const program = require('commander');
const inquirer = require('inquirer');
const { prompt } = require('inquirer');
const shell = require('shelljs');
const fs = require("fs");

// run setup program
program
    .version('1.0.0', '-v, --version')
    .option('-a, --all', 'add everything')
    .option('-t, --devtools', 'tools only')
    .parse(process.argv);

// async function to wait for response from user
(async () => {
    var response = await choose_install();

    if(response === 'Install everthing.') {
        await install_config();
        await install_devtools();
    }

    if(response === 'Install everything except the configuration files (.bash_profile, .nvm ...).') {
        await install_devtools();
    }
})()

async function choose_install() {
    const response = await prompt([
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

    return response.selection;
}

async function install_config() {
    // check with user for whether any installs should be excluded
    const response = await prompt([
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

    // go through config files other than selected exclusions
    for(var i=0; i < response.config.length; i++) {
        let file = '~/.' + response.config[i];
        // check for gitignore
        if (response.config[i] === 'gitignore') {
            if (!shell.test('-e', file)) {
                console.log("install gitignore");
                // shell.exec('git config --global core.excludesfile ~/.gitignore');
                // shell.exec('echo *.DS_Store >> ~/.gitignore');
            } else {
                console.log("file exists");
                if(await overwrite('File exists: Overwrite .gitignore?')) {
                    console.log("overwrite");
                    // shell.exec('git config --global core.excludesfile ~/.gitignore');
                    // shell.exec('echo *.DS_Store >> ~/.gitignore');
                }
            }
        }
        // check for bash profile
        if (response.config[i] === 'bash_profile') {
            if (!shell.test('-e', file)) {
                console.log("install bash_profile");
                // terminal settings | create bash_profile
                // shell.exec('cat ./tools/bash_profile > ~/.bash_profile');
                // initialize bash_profile
                // shell.exec('source ~/.bash_profile');
            } else {
                console.log("file exists");
                if(await overwrite('File exists: Overwrite .bash_profile?')) {
                    console.log("overwrite");
                    // terminal settings | create bash_profile
                    // shell.exec('cat ./tools/bash_profile > ~/.bash_profile');
                    // initialize bash_profile
                    // shell.exec('source ~/.bash_profile');
                }
            }
        }
        // check for bashrc
        if (response.config[i] === 'bashrc') {
            if (!shell.test('-e', file)) {
                console.log("install bashrc");
                // terminal settings | create bash_profile
                // shell.exec('cat ./tools/bashrc > ~/.bashrc');
                // initialize bash_profile
                // shell.exec('source ~/.bashrc');
            } else {
                console.log("file exists");
                if(await overwrite('File exists: Overwrite .bashrc?')) {
                    console.log('overwrite');
                    // terminal settings | create bash_profile
                    // shell.exec('cat ./tools/bashrc > ~/.bashrc');
                    // initialize bash_profile
                    // shell.exec('source ~/.bashrc');
                }
            }
        }
        // check for nvm config
        if (response.config[i] === 'nvm') {
            if (!shell.test('-e', file)) {
                console.log("install nvm");
                // create nvm directory
                // shell.exec('mkdir ~/.nvm');
            } else {
                console.log("file exists");
                if(await overwrite('File exists: Overwrite .nvm?')) {
                    console.log('overwrite');
                    // create nvm directory
                    // shell.exec('mkdir ~/.nvm');
                }
            }
        }
        // check for tmux config
        if (response.config[i] === 'tmux') {
            if(!shell.test('-e', file)) {
                console.log("install tmux");
                // tmux settings | create tmux.conf
                // shell.exec('cat ./tools/tmux.conf > ~/.tmux.conf');
                // initialize .tmux.conf
                // tmux source-file ~/.tmux.conf
            } else {
                console.log("file exists");
                if(await overwrite('File exists: Overwrite .tmux?')) {
                    console.log('overwrite');
                    // tmux settings | create tmux.conf
                    // shell.exec('cat ./tools/tmux.conf > ~/.tmux.conf');
                    // initialize .tmux.conf
                    // tmux source-file ~/.tmux.conf
                }
            }
        }
        // check for vimrc config
        if (response.config[i] === 'vimrc') {
            if (!shell.test('-e', file)) {
                console.log("install vimrc");
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
                console.log("file exists");
                if(await overwrite('File exists: Overwrite .vimrc?')) {
                    console.log('overwrite');
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
            }
        }
    }

    async function overwrite(message) {
        const response = await prompt([
            {
                type: 'expand',
                message: message,
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

        return response.overwrite === 'overwrite';
    }
}


async function install_devtools() {
    // check with user for whether any installs should be excluded
    const response = await prompt([
        {
            type: 'checkbox',
            name: 'config',
            message: 'Unselect any options to ignore',
            choices: [
                {
                    name: 'xcode-select',
                    checked: 'true'
                },
                {
                    name: 'homebrew',
                    checked: 'true'
                },
                {
                    name: 'homebrew cask',
                    checked: 'true'
                },
                {
                    name: 'node',
                    checked: 'true'
                },
                {
                    name: 'php',
                    checked: 'true'
                },
                {
                    name: 'python',
                    checked: 'true'
                },
                {
                    name: 'nvm',
                    checked: 'true'
                },
                {
                    name: 'npm',
                    checked: 'true'
                },
                {
                    name: 'yarn',
                    checked: 'true'
                },
                {
                    name: 'bower',
                    checked: 'true'
                },
                {
                    name: 'composer',
                    checked: 'true'
                },
                {
                    name: 'ember',
                    checked: 'true'
                },
                {
                    name: 'vue',
                    checked: 'true'
                },
                {
                    name: 'angular',
                    checked: 'true'
                },
                {
                    name: 'react',
                    checked: 'true'
                },
                {
                    name: 'laravel',
                    checked: 'true'
                }
            ]
        }
    ])

    let installed = [];
    let exist = [];

    // go through config files other than selected exclusions
    for(var i=0; i < response.config.length; i++) {
        // install xcode-select
        if (response.config[i] === 'xcode-select') {
            if (shell.exec('node --version', { silent: true }).code != 0) {
                shell.exec('xcode-select --install');
                console.log("install");
                // update installed
                installed.push(response.config[i])
            } else {
                // update exist
                exist.push(response.config[i])
            }
        }
        // install homebrew
        if (response.config[i] === 'homebrew') {
            if (shell.exec('brew -v', { silent: true }).code != 0) {
                shell.exec('/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"');
                // update installed
                installed.push(response.config[i])
            } else {
                // update exist
                exist.push(response.config[i])
            }
        }
        // install homebrew cask
        if (response.config[i] === 'homebrew cask') {
            if (shell.exec('brew info cask', { silent: true }).code != 0) {
                shell.exec('brew cask');
                // update installed
                installed.push(response.config[i])
            } else {
                // update exist
                exist.push(response.config[i])
            }
        }
        // install node
        if (response.config[i] === 'node') {
            if (shell.exec('node -v', { silent: true }).code != 0) {
                shell.exec('brew install node');
                // update installed
                installed.push(response.config[i])
            } else {
                // update exist
                exist.push(response.config[i])
            }
        }
        // install php
        if (response.config[i] === 'php') {
            if (shell.exec('php --version', { silent: true }).code != 0) {
                shell.exec('brew install php70');
                // update installed
                installed.push(response.config[i])
            } else {
                // update exist
                exist.push(response.config[i])
            }
        }
        // install python
        if (response.config[i] === 'python') {
            if (shell.exec('python --version', { silent: true }).code != 0) {
                shell.exec('brew install python');
                // update installed
                installed.push(response.config[i])
            } else {
                // update exist
                exist.push(response.config[i])
            }
        }
        // install nvm
        if (response.config[i] === 'nvm') {
            if (shell.exec('nvm --version', { silent: true }).code != 0) {
                shell.exec('brew install nvm');
                // update installed
                installed.push(response.config[i])
            } else {
                // update exist
                exist.push(response.config[i])
            }
        }
        // install npm
        if (response.config[i] === 'npm') {
            if (shell.exec('npm -v', { silent: true }).code != 0) {
                shell.exec('brew install npm');
                // update installed
                installed.push(response.config[i])
            } else {
                // update exist
                exist.push(response.config[i])
            }
        }
        // install yarn
        if (response.config[i] === 'yarn') {
            if (shell.exec('yarn -v', { silent: true }).code != 0) {
                shell.exec('brew install yarn');
                // update installed
                installed.push(response.config[i])
            } else {
                // update exist
                exist.push(response.config[i])
            }
        }
        // install bower
        if (response.config[i] === 'bower') {
            if (shell.exec('bower -v', { silent: true }).code != 0) {
                shell.exec('brew install bower');
                // update installed
                installed.push(response.config[i])
            } else {
                // update exist
                exist.push(response.config[i])
            }
        }
        // install composer
        if (response.config[i] === 'composer') {
            if (shell.exec('composer --version', { silent: true }).code != 0) {
                shell.exec('brew install composer');
                // update installed
                installed.push(response.config[i])
            } else {
                // update exist
                exist.push(response.config[i])
            }
        }
        // install ember
        if (response.config[i] === 'ember') {
            if (shell.exec('ember --version', { silent: true }).code != 0) {
                shell.exec('npm install -g ember-cli');
                // update installed
                installed.push(response.config[i])
            } else {
                // update exist
                exist.push(response.config[i])
            }
        }
        // install vue
        if (response.config[i] === 'vue') {
            if (shell.exec('vue --version', { silent: true }).code != 0) {
                shell.exec('npm install -g @vue/cli');
                // update installed
                installed.push(response.config[i])
            } else {
                // update exist
                exist.push(response.config[i])
            }
        }
        // install angular
        if (response.config[i] === 'angular') {
            if (shell.exec('ng --version', { silent: true }).code != 0) {
                shell.exec('npm install -g @angular/cli');
                // update installed
                installed.push(response.config[i])
            } else {
                // update exist
                exist.push(response.config[i])
            }
        }
        // install laravel
        if (response.config[i] === 'laravel') {
            if (shell.exec('laravel --version', { silent: true }).code != 0) {
                shell.exec('composer global require laravel/installer');
                // update installed
                installed.push(response.config[i])
            } else {
                // update exist
                exist.push(response.config[i])
            }
        }
        // install tmux
        if (response.config[i] === 'tmux') {
            if (shell.exec('tmux -V', { silent: true }).code != 0) {
                shell.exec('brew install tmux');
                // update installed
                installed.push(response.config[i])
            } else {
                // update exist
                exist.push(response.config[i])
            }
        }
    }

    console.log("already installed");
    console.log(exist);
    console.log("installed");
    console.log(installed);
}
