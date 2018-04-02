module.exports.run = async (client, message, args) => {

    // Send the info message to the current channel.
    message.channel.send(":gear:  |  I'm Robosa, the now fully-functional Raposa robot.\n:gear:  |  Made by Sei. If you have any suggestion to improve me, make sure to DM her!\n:gear:  |  Version: 1.0.2");

}

module.exports.info = {

    // Set the command name.
    name: "info"

}