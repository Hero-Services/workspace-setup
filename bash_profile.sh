# !/bin/bash

# on startup
if command -v tmux>/dev/null; then
    [[ ! $TERM =~ screen ]] && [ -z $TMUX ] && exec tmux
fi

# General
export PS1="⚓  [ \u ]:\W $ "
export CLICOLOR=1
export LSCOlORS=ExFxCxDxBxegedabagacad
alias home='cd ~/Desktop'

# Application Commands
alias phone='open/Applications/Xvode.app/Contents/Developer/Applications/Simulator.app'
alias simpleServer = 'python -m SimpleHTTPServer 1337'
alias chrom='open -a "Google Chome" --args'
alias atom='atom .'
alias open='open .'

# Python
alias python='python3'
alias pip='pip3'

# Load NVM
export NVM_DIR="HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

# Setting PATH for Python 3.6
PATH="/Library/Frameworks/Python.framework/Versions/3.6/bin:${PATH}"
export PATH
