const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  let user;
  if (message.mentions.users.first()) {
    user = message.mentions.users.first();
  } else if (args[0]) {
    user = message.guild.members.cache.get(args[0]).user;
  } else {
    user = message.author;
  }

  let avatar = user.displayAvatarURL({ size: 4096, dynamic: true });

  return message.channel.send(avatar);
};

exports.help = {};

exports.conf = {
  aliases: ['icon'],
  cooldown: 10,
};
