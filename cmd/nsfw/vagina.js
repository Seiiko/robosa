const randomPussy = require('random-vagina');

module.exports.run = async (client, message, args) => {

    // Check if channel is NSFW.
    if(message.channel.id !== "430024119971741705")
      return message.channel.send(":no_entry_sign:  |  This is not a NSFW channel!");

    // Send the vagina picture.
    randomPussy()
      .then(url => {
        message.channel.send(url);
      })

}

module.exports.info = {

    // Set the command name.
    name: "vagina"

}