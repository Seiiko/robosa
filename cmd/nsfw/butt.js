const randomAss = require('random-butt');

module.exports.run = async (client, message, args) => {

    // Check if channel is NSFW.
    if(message.channel.id !== "408579882084466688" && message.channel.id !== "408582748157116416")
      return message.channel.send(":no_entry_sign:  |  This is not a NSFW channel!");

    // Send the butt picture.
    randomAss()
      .then(url => {
        message.channel.send(url);
      })

}

module.exports.info = {

    // Set the command name.
    name: "butt"

}