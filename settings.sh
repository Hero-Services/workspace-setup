#!/bin/sh

###########################
# TT Workspace Setup: Mac #
###########################

# Configure .gitignore
git config --global core.excludesfile ~/.gitignore
echo *.DS_Store >> ~/.gitignore

# terminal settings | create bash_profile
cat bash_profile.sh > ~/.bash_profile.sh
source ~/.bash_profile

# create nvm directory
mkdir ~/.nvm

# tmux settings | create tmux.conf
touch tmux.conf
# copy over tmux.conf
cat tmux.conf > ~/.tmux.conf

# vim settings | create .vimrc
touch .vimrc
# copy over .vimrc
cat .vimrc > ~/.vimrc
# vim package manager ~ pathogen
mkdir -p ~/.vim/autoload ~/.vim/bundle && \
curl -LSso ~/.vim/autoload/pathogen.vim https://tpo.pe/pathogen.vim
# install NERDTree
git clone https://github.com/scrooloose/nerdtree.git ~/.vim/bundle/nerdtree
# link .vimrc
source ~/.vimrc
