module.exports = (client, message, queue, playlist) => {
    message.channel.send({
        embed: {
            color: 'GREEN',
            description: `${client.emotes.music} - ${playlist.title} has been **added** to the queue (**${playlist.tracks.length}** songs) !`,
        },
    }); 
};