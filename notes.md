
# PATH

- A list of folderse When you run a command, the terminal looks inside each folder for an executable file that hasthe same name as the command you just typed in.

Example PATH:

$ echo $PATH
/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin


# nvm - node version manager

- Install multiple versions of node

These commands were run:

$ brew install nvm
$ mkdir ~/.nvm
$ cp $(brew --prefix nvm)/nvm-exec ~/.nvm/
$ subl ~/.bash_profile

    export NVM_DIR=~/.nvm
    source $(brew --prefix nvm)/nvm.sh

$ # open new teriminal window
$ nvm install v0.12.4


$ ~/.bash_profile

- located in home folder ~
- runs every time you open a terminal window

# node.js

- Run JavaScript outside of the browser


# Browser

command + option + j - Open javascript console


# Node Replay
https://github.com/assaf/node-replay

- Recordand play back HTTP requests
- Example usage:

$ REPLAY=record node scrape.js  # THIS RECORDS NEW HTTP REQUESTS
$ node scrape.js 				# THIS PLAYS BACK RECORDED HTTP REQUESTS
