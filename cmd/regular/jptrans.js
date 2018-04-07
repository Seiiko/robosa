const translate = require('translate-api');

module.exports.run = async (client, message, args) => {

  if (!args)
    return message.channel.send(":interrobang:  |  You did not specify a valid message!\n:interrobang:  |  **Usage:** .jptrans [what to translate]")

  translate.getText(args,{to: 'jp'}).then(function(text){
    message.channel.send(text)
  });

}

module.exports.info = {

    // Set the command name.
    name: "jptrans"

}