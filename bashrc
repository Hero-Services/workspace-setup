# !/bin/bash

if [ -r ~/.profile ]; then ~/.profile; fi
case "$-" in *i*) if [ -r ~/.bashrc ]; then . ~/.bashrc; fi;; esac

# General
export PS1="⚓  [ \u ]:\W $ "
export CLICOLOR=1
export LSCOlORS=ExFxCxDxBxegedabagacad

# Load NVM
export NVM_DIR="$HOME/.nvm"	export NVM_DIR=~/.nvm
  [ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh"  # This loads nvm	source $(brew --prefix nvm)/nvm.sh
  [ -s "/usr/local/opt/nvm/etc/bash_completion" ] && . "/usr/local/opt/nvm/etc/bash_completion"  # This loads nvm bash_completion

# Setting PATH for Python 3.6
export PATH="/Library/Frameworks/Python.framework/Versions/3.6/bin:${PATH}"

# Setting PATH for VSCode
export PATH="$PATH:/Applications/Visual Studio Code.app/Contents/Resources/app/bin"
