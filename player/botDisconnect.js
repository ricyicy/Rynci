module.exports = (client, message, queue) => {
    message.channel.send({
        embed: {
            color: 'RED',
            description: `${client.emotes.error} - Music **stopped** as i have been disconnected from the channel !`,
        },
    });
};