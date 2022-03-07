# 
[![Node.js CI](https://github.com/ConniBug//actions/workflows/node.js.yml/badge.svg)](https://github.com/ConniBug//actions/workflows/node.js.yml)

## Methodology / Technique

### Method 1 -Fast and Efficient
The first method for checking stock on shopify sites is to query a link to a shopify site listing and but appending ".json" onto the end which will return json object containing stock levels for each variant/size of the product, as a result we can use this to actively monitor stock levels for your chosen size, this method is very efficient and not expensive to run.

#### Example:

TODO

### Method 2 - Slow and Inefficient
The second method for checking stock on shopify can be alot less efficient as it involves downloading the webpage and using regex to try and locate your product and if its in stock or not, this method has the downside that we cant get specific stock values and alot of the time the regex fails to find the correct infomation, this is typically used a s alast resort or if the site doesnt list stock infomation within its .json file.

#### Example:

TODO
  
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
