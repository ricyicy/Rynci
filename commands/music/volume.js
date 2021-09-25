module.exports = {
    name: 'volume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}volume [1-100]',

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

        if (!args[0] || isNaN(args[0]) || args[0] === 'Infinity') return message.channel.send(`${client.emotes.error} - Please enter a valid number !`);

        if (Math.round(parseInt(args[0])) < 1 || Math.round(parseInt(args[0])) > 100) return message.channel.send(`${client.emotes.error} - Please enter a valid number (between 1 and 100) !`).then(msg => msg.delete({timeout: 3000}));

        const success = client.player.setVolume(message, parseInt(args[0]));

        if (success) message.channel.send(`${client.emotes.success} - Volume set to **${parseInt(args[0])}%** !`);
    },
};