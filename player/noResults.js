module.exports = (client, message, query) => {
   message.channel.send({
        embed: {
            color: 'RED',
            description: `${client.emotes.error} - No results found on YouTube for ${query} !`,
        },
    }).then(msg => msg.delete({timeout: 5000}));
};