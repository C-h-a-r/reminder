const ms = require('ms');

const Discord = require("discord.js");

module.exports = {
  name: "reminder",
  aliases: [],
  usage: "reminder <time> <reason>",
  description: "set a reminder for youself",
  run: async (client, message, args) => {





  let timer = args[0];

const NoReason = new Discord.MessageEmbed()
.setColor("RED")
.setDescription("⛔ You need to enter a reason!")


  const PleaseEnter = new Discord.MessageEmbed()
.setColor("RED")
.setDescription("⛔ Please enter a time period followed by \"s or m or h\".")
  if (!timer)


    return message.channel.send(PleaseEnter);

  timer = Number(timer) * 1000 || ms(timer);

 const PleaseEnterN = new Discord.MessageEmbed()
.setColor("RED")
.setDescription("⛔ Please enter a timer!")
  if (isNaN(timer)) return message.reply(PleaseEnterN);
  

   const High = new Discord.MessageEmbed()
.setColor("RED")
.setDescription("⛔ I cant remember something for that long!")
  if (timer > 2147483647) return message.reply(High);

 const Past = new Discord.MessageEmbed()
.setColor("RED")
.setDescription("⛔ I can't remind you in the past!")
  if (timer < 0) return message.reply(Past)

  if (!args[0])
    return message.channel.send(PleaseEnterN);
    if (![args[1]]) {
  message.channel.send(NoReason)
  return;
}

const reason = args[1] || '*unknown*';

 const Set = new Discord.MessageEmbed()
.setColor("GREEN")
.setDescription(":white_check_mark: " + `| Timer Started for **${reason}** lasting ` + ms(timer, { long: true }))

  message.channel.send(Set);


  setTimeout(() => {
     const Done = new Discord.MessageEmbed()
.setDescription(message.author.toString() + ` The timer for **${reason}** has finished! It lasted ${ms(timer, {long: true})}`)
    message.channel.send(Done)
    message.author.send(Done)
  }, timer);









  }
}
