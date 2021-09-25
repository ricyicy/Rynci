module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    category: 'Music',
    utilisation: '{prefix}loop',

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

        if (!client.player.getQueue(message)) return message.channel.send({
          embed: {
            color: 'YELLOW',
            description: `${client.emotes.error} - No music currently playing !`,
        },
         }).then(msg => msg.delete({timeout: 3000}));

        if (args.join(" ").toLowerCase() === 'queue') {
            if (client.player.getQueue(message).loopMode) {
                client.player.setLoopMode(message, false);
                return message.channel.send({
            embed: {
                color: 'GREEN',
                description:  `${client.emotes.success} - Repeat mode **disabled** !`,
            },
        });
            } else {
                client.player.setLoopMode(message, true);
                return message.channel.send({
            embed: {
                color: 'GREEN',
                description: `${client.emotes.success} - Repeat mode **enabled** the whole queue will be repeated endlessly !`,
            },
        });
            };
        } else {
            if (client.player.getQueue(message).repeatMode) {
                client.player.setRepeatMode(message, false);
                return message.channel.send({
            embed: {
                color: 'GREEN',
                description: `${client.emotes.success} - Repeat mode **disabled** !`,
            },
        }); 
            } else {
                client.player.setRepeatMode(message, true);
                return message.channel.send({
            embed: {
                color: 'GREEN',
                description: `${client.emotes.success} - Repeat mode **enabled** the current music will be repeated endlessly !`,
            },
        });
            };
        };
    },
};