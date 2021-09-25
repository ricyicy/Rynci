module.exports = (client, message, track) => {
    message.channel.send({
        embed: {
            color: 'WHITE',
            author: { name:(`Started playing in: ${message.member.voice.channel.name}`)},
            fields: [
                { name: 'Track', value: `[**${track.title}**](${track.url})`, inline: false },
            ],
            thumbnail: { url: track.thumbnail },
            timestamp: new Date(),
        },
    })
};