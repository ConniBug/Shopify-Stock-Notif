/*eslint no-unused-vars: ["error", { "args": "none" }]*/
exports.run = (bot, msg, args) => {
    msg.channel.send(':watch: | Ping!').then(m => {
        m.edit(`:watch: | Pong! \`${m.createdTimestamp - msg.createdTimestamp}ms\``)
    })
}

exports.help = {
    name: 'ping',
    usage: 'ping',
    description: 'Pings the bot to check its connection speed.',
    rank: 0
}
