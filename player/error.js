module.exports = (client, error, message, ...args) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send({
        embed: {
            color: 'YELLOW',
            description: `${client.emotes.error} - There is no music being played on this server !`,
        },
    }).then(msg => msg.delete({timeout: 3000})); 
            break;
        case 'NotConnected':
            message.channel.send({
        embed: {
            color: 'YELLOW',
            description: `${client.emotes.error} - You are not connected in any voice channel !`,
        },
    }).then(msg => msg.delete({timeout: 3000})); 
            break;
        case 'UnableToJoin':
            message.channel.sendmessage.channel.send({
        embed: {
            color: 'YELLOW',
            description: `${client.emotes.error} - I am not able to join your voice channel, please check my permissions !`,
        },
    }).then(msg => msg.delete({timeout: 3000})); 
            break;
        case 'VideoUnavailable':
            message.channel.send({
        embed: {
            color: 'YELLOW',
            description: `${client.emotes.error} - ${args[0].title} is not available in your country! Skipping...`,
        },
    }).then(msg => msg.delete({timeout: 3000})); 
            break;
        case 'MusicStarting':
            message.channel.send({
        embed: {
            color: 'YELLOW',
            description: `The music is starting... please wait and retry!`,
        },
    }).then(msg => msg.delete({timeout: 3000})); 
            break;
        default:
            message.channel.send({
        embed: {
            color: 'YELLOW',
            description: `${client.emotes.error} - Something went wrong ...`,
        },
    }).then(msg => msg.delete({timeout: 2000})); 
    }
};
