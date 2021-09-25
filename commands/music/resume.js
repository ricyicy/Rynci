module.exports = {
    name: 'resume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}resume',

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

        if (!client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - The music is already playing !`).then(msg => msg.delete({timeout: 3000}));

        const success = client.player.resume(message);

        if (success) message.channel.send(`${client.emotes.success} - Song ${client.player.getQueue(message).playing.title} resumed !`);
    },
};