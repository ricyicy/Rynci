module.exports = {
    name: 'play',
    aliases: ['p'],
    category: 'Music',
    utilisation: '{prefix}play [name/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send({
          embed: {
            color: 'YELLOW',
            description: `${client.emotes.error} - You're not in a voice channel !`,
        },
    }).then(msg => msg.delete({timeout: 3000}));

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send({
          embed: {
            color: 'YELLOW',
            description: `${client.emotes.error} - You are not in the same voice channel !`,
        },
         }).then(msg => msg.delete({timeout: 3000}));

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Please indicate the title of a song !`).then(msg => msg.delete({timeout: 3000}));

        client.player.play(message, args.join(" "), { firstResult: true });
    },
};