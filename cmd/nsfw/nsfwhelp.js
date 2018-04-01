const booru = require('booru');

module.exports.run = async (client, message, args) => {

  // Define the role variables.
  let owner = "Robosa";
  let admin = "Admin";  

  // Limit it to admins.
  if (!message.member.roles.some(r => [owner, admin].includes(r.name))) // If user doesn't have the Bot Owner or Admin role.
    return message.channel.send(":interrobang:  |  This command doesn't exist!"); // Send a message to the channel.

  // Check if channel is NSFW.
  if(message.channel.id !== "430024119971741705")
    return message.channel.send(":no_entry_sign:  |  This is not a NSFW channel!");

  const NSFWHelp = new Discord.RichEmbed()
  
    .setTitle('Check out Sei\'s YouTube channel.')
    .setAuthor('Robosa   |   NSFW Help', 'https://cdn.discordapp.com/attachments/404965687015243787/429974163529269248/robosa.png')

    .setColor('#7d4586')
    .setDescription('For help with a specific command, type \'.help [command]\'.')

    .setFooter('Robosa, now a fully working Raposa robot. Made by Sei.', 'https://cdn.discordapp.com/attachments/404965687015243787/429974163529269248/robosa.png')

    .setURL('https://www.youtube.com/c/seiitunes')

    .addBlankField(true)

    .addField('NSFW Commands',
    '.boobs   |   .butt   |   .e621   |   .gelbooru   |   .hentai   |   .konachan   |   .rule34   |   .vagina')

    .addBlankField(true)

  message.member.send(NSFWHelp);
  message.channel.send(":white_check_mark:  |  A DM has been sent to you with all the help necessary!");

}

module.exports.info = {

  // Set the command name.
  name: "nsfwhelp"

}