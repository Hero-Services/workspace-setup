#!/bin/sh

###########################
# TT Workspace Setup: Mac #
###########################


## DEVELOPER TOOLS ##

echo "Setting up developer tools ..."

# Install Xcode Command Line Tools
if ! command xcode-select -v > /dev/null; then
    echo Installing Xcode command line tools ...
    xcode-select --install
else
    echo Xcode command line tools installed, version:
    xcode-select -v
fi

# Install HomeBrew
if ! command brew -v > /dev/null; then
    echo Installing Homebrew ...
    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
else
    echo Hombrew installed, version:
    brew -v
fi

# Install Tmux
if ! command tmux -v > /dev/null; then
    echo Installing tmux ...
    brew install tmux
else
    echo tmux installed, version:
    tmux -v
fi

# Install Homebrew Cask
if ! command brew cask --version > /dev/null; then
    echo installing brew cask ...
    brew cask
else
    echo brew cask installed, version:
    echo brew cask -v
fi

# Install Node
if ! command node -v > /dev/null; then
    echo Installing node ...
    brew install node
else
    echo node installed, version:
    node -v
fi

# Install Node Version Manager (NVM)
if ! command nvm --version > /dev/null; then
    echo Installing nvm ...
    brew install nvm
else
    echo nvm installed, version:
    nvm --version
fi

# Install Node Package Manager (NPM)
if ! command npm -v > /dev/null; then
    echo Installing npm ...
    npm install npm@latest -g
else
    echo npm installed, version:
    npm -v
fi

# Install Bower
if ! command bower -v > /dev/null; then
    echo installing bower ...
    brew install bower
else
    echo bower installed, version:
    bower -v
fi

# Install Ember
if ! command ember -v > /dev/null; then
    echo Installing ember ...
    npm install -g ember-cli
else
    echo ember installed, version:
    ember -v
fi

# Install Vue
if ! command vue --version > /dev/null; then
    echo Installing vue ...
    npm install -g @vue/cli
else
    echo vue installed, version:
    vue --version
fi

# Install Latest PHP
brew install php70

# Install Composer
if ! command composer --version > /dev/null; then
    echo Installing composer ...
    brew install composer
else
    echo composer installed, version:
    composer --version
fi

# Install Latest Python
brew install python

# Install Laravel
composer global require "laravel/installer"

echo ###
echo ###
echo ###
echo verifying installs ...

echo ###
xcode-select --version
brew -v
echo ###
brew cask --version
echo ###
node -v
echo ###
nvm --version
echo ###
npm -v
echo ###
ember -v
echo ###
vue --version
echo ###
php -v
echo ###
composer --version
echo ###
python --version

echo ###
echo ###
echo ###
echo developer tools installed

# Install Iterm2
brew cask install iterm2

cat bash_profile.sh > ~/.bash_profile.sh
source ~/.bash_profile

