# !/bin/bash

# General
export PS1="⚓  [ \u ]:\W $ "
export CLICOLOR=1
export LSCOlORS=ExFxCxDxBxegedabagacad
alias home='cd ~/Desktop'

# Application Commands
alias phone='open/Applications/Xvode.app/Contents/Developer/Applications/Simulator.app'
alias server = 'python3 -m http.server'
alias chrom='open -a "Google Chome" --args'
alias atom='atom .'
alias open='open .'

# Load NVM
export NVM_DIR="HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

# Setting PATH for Python 3.6
PATH="/Library/Frameworks/Python.framework/Versions/3.6/bin:${PATH}"
export PATH
