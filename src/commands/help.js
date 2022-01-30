/*eslint no-unused-vars: ["error", { "args": "none" }]*/
const Discord = require('discord.js')

function sendHelpEmbed(bot, msg, tier, colour, title, largerThanCheck = false) {
    const tmpEmbed = new Discord.MessageEmbed()
    tmpEmbed
        .setColor(colour)
        .setFooter(bot.ownersDiscordTag, 'https://i.imgur.com/.png')
        .setTitle(title)
    bot.commands.forEach(e => {
        if(e.help.rank == tier || (largerThanCheck && e.help.rank >= tier)) {
            tmpEmbed.addField(`${e.help.name}`, e.help.description + '\n \n Usage \n' + bot.config.prefix + e.help.usage, false)
        }
    })
    msg.channel.send(tmpEmbed)
}

exports.run = (bot, msg, args) => {
    sendHelpEmbed(bot, msg, 0, 16726994, `${bot.user.username} - Commands for Everyone!`);
    if(msg.author.id == bot.config.owner_id) {
        sendHelpEmbed(bot, msg, 2, 16726994, `${bot.user.username} - Commands for Bot Owner!`, true);
    }
}

exports.test = (bot) => {

}

exports.help = {
    name: 'help',
    usage: 'help',
    description: 'Lists all commands.',
    rank: 0
}
