# !/bin/bash

# General
export PS1="⚓  [ \u ]:\W $ "
export CLICOLOR=1
export LSCOlORS=ExFxCxDxBxegedabagacad
alias home='cd ~/Desktop'

# Application Commands
alias phone='open/Applications/Xvode.app/Contents/Developer/Applications/Simulator.app'
alias server='python3 -m http.server'
alias chrome='open -a "Google Chome" --args'
alias atom='atom .'
alias open='open .'

# Load NVM
export NVM_DIR="$HOME/.nvm"
  [ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh"  # This loads nvm
  [ -s "/usr/local/opt/nvm/etc/bash_completion" ] && . "/usr/local/opt/nvm/etc/bash_completion"  # This loads nvm bash_completion

# Setting PATH for Python 3.6
PATH="/Library/Frameworks/Python.framework/Versions/3.6/bin:${PATH}"
export PATH
