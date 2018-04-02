module.exports.run = async (client, message, args) => {

    const inv = new Discord.RichEmbed()

    .setColor("#B22222")

    .addField('The command is invalid!')

message.channel.send(inv);

}

module.exports.info = {

    // Set the command name.
    name: "invalid"

}