# 
[![Node.js CI](https://github.com/ConniBug//actions/workflows/node.js.yml/badge.svg)](https://github.com/ConniBug//actions/workflows/node.js.yml)



## Prerequisites

Node JS - 14]([https://nodejs.org/en/)

# Setup

## Basic

npm install
npm start

### PM2 Setup

npm install pm2@latest -g

pm2 start bot.js

## Docker

docker build --pull --rm -f "dockerfile" -t shopifybot:latest "."
docker run -d shopifybot:latest

# commands
<br> 
`<prefix>info` - shows bot info
