module.exports = (client, message, queue) => {
    message.channel.send({
        embed: {
            color: 'RED',
            description: `${client.emotes.error} - Music **stopped** as there is no more music in the queue!`,
        },
    }); 
};