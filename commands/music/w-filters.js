module.exports = {
    name: 'w-filters',
    aliases: ['filters'],
    category: 'Music',
    utilisation: '{prefix}w-filters',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`).then(msg => msg.delete({timeout: 3000}));

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

        const filtersStatuses = [[], []];

        client.filters.forEach((filterName) => {
            const array = filtersStatuses[0].length > filtersStatuses[1].length ? filtersStatuses[1] : filtersStatuses[0];
            array.push(filterName.charAt(0).toUpperCase() + filterName.slice(1) + " : " + (client.player.getQueue(message).filters[filterName] ? client.emotes.success : client.emotes.off));
        });

        message.channel.send({
            embed: {
                color: 'WHITE',
                footer: { text: 'Recreated by Rice! Big thanks to Zerio (ZerioDev)!' },
                fields: [
                    { name: 'Filters', value: filtersStatuses[0].join('\n'), inline: true },
                    { name: '** **', value: filtersStatuses[1].join('\n'), inline: true },
                ],
                timestamp: new Date(),
                description: `List of all filters enabled or disabled.\nUse \`${client.config.discord.prefix}filter\` to add a filter to a song.`,
            },
        });
    },
};