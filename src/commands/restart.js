/*eslint no-unused-vars: ["error", { "args": "none" }]*/
var config = require('../../config.json')

exports.run = (bot, msg, args) => {
    if (msg.author.id != config.owner_id) {
        return
    }

    msg.channel.send('Restarting...').then(() => {
        process.exit(0)
    })
}

exports.help = {
    name: 'restart',
    usage: 'restart',
    description: 'restart. restart the bot',
    rank: 3
}
