const translate = require('translate');

module.exports.run = async (client, message, args) => {

  if (!args)
    return message.channel.send(":interrobang:  |  You did not specify a valid message!\n:interrobang:  |  **Usage:** .jptrans [what to translate]")

  const jpTrans = async () => {
    const text = await translate(args, { from: 'en', to: 'ja' });
    message.channel.send(text);
  };

}

module.exports.info = {

    // Set the command name.
    name: "jptrans"

}