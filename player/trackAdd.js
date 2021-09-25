module.exports = (client, message, queue, track) => {
    message.channel.send({
        embed: {
            color: 'GREEN',
            author: { name: `Added to the queue`},
            fields: [
                { name: 'Track', value: `[**${track.title}**](${track.url})`, inline: false },
                { name: 'Requested by', value: track.requestedBy.username, inline: true },

                { name: 'Duration', value: track.duration, inline: true },
            ],
            thumbnail: { url: track.thumbnail },
            timestamp: new Date(),
        },
    });
};