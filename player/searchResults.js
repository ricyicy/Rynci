module.exports = (client, message, query, tracks) => {
    message.channel.send({
        embed: {
            color: 'WHITE',
            author: { name: `Here are your search results for ${query}` },
            footer: { text: 'Recreated by Rice! Big thanks to Zerio (ZerioDev)!' },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });
};