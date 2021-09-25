module.exports = {
    name: 'leave',
    aliases: ['l', 'dc','disconnect', 'dc'],
    category: 'Music',
    utilisation: '{prefix}join',

    execute(client, message) {
        message.member.voice.channel.leave();
        message.channel.send({
            embed: {
                color: 'GREEN',
                description: `Left **${message.member.voice.channel.name}** channel. See ya next time!`
            }
        }).then(async msg => {
      await msg.react('⏸')  
    })
},
};