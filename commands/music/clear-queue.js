module.exports = {
    name: 'clear-queue',
    aliases: ['cq','clear','clearqueue'],
    category: 'Music',
    utilisation: '{prefix}clear-queue',

    execute(client, message) {
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

        if (client.player.getQueue(message).tracks.length <= 1) return message.channel.send({
            embed: {
                color: 'YELLOW',
                description: `${client.emotes.error} - There is only one song in the queue.`,
            },
        }).then(msg => msg.delete({timeout: 3000}));

        client.player.clearQueue(message);

        message.channel.send({
            embed: {
                color: 'GREEN',
                description: `${client.emotes.success} - The queue has just been **removed** !`,
            },
        }); 
    },
};