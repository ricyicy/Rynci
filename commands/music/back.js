module.exports = {
    name: 'back',
    aliases: ['previous'],
    category: 'Music',
    utilisation: '{prefix}back',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send({
            embed: {
                color: 'YELLOW',
                description: `${client.emotes.error} - You're not in a voice channel !`,
            },
        }); 

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

         if (client.player.getQueue(message).previousTracks.length < 1) return message.channel.send({
            embed: {
                color: 'YELLOW',
                description: `${client.emotes.error} - No previous track was found !`,
            },
        }).then(msg => msg.delete({timeout: 3000}));

        client.player.back(message);


        message.channel.send({
            embed: {
                color: 'GREEN',
                description: `${client.emotes.error} - No previous track was found !`,
            },
        }); 
    },
};