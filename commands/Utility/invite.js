const Discord = require("discord.js");
const db = require("quick.db");
const {
  Owner,
  Developer,
  Support,
  Dashboard,
  Server_ID
} = require("../../config.js");
module.exports = {
  name: "invite",
  aliases: ["invitelink", "vote"],
  category: "utility",
  description: "Give You My Invite Link, Etc!",
  usage: "Invite",
  guildOnly: true,
  cooldown: 5,
  run: async (client, message, args) => {
    message.delete();
    const embed = new Discord.MessageEmbed()
       .setColor("GREEN")
        .setTitle("🙏Thanks🙏")
        .addField(
          "Invite Me",
         `[Click Me](https://discord.com/api/oauth2/authorize?client_id=849903077690572800&permissions=261929959351&redirect_uri=https%3A%2F%2Fdgh-bot.ddns.net%2Flogin&response_type=code&scope=applications.commands%20bot%20identify%20guilds%20guilds.join)`)
         .addField(
          "Vote",
          `[Click Me](https://discord4bots.ddns.net/bot/849903077690572800/)`
        )
        .addField("Support Server", `[Click Me](${Support})`)
        if(Dashboard) embed.addField("Dashboard", `[Click Me](${Dashboard})`);
        embed.addField("Owner", `<@${Owner}>`)
        .addField("Developer", `<@${Developer}>`)
        .setImage(
          `https://discordapp.com/api/guilds/${Server_ID}/embed.png?style=banner3`
        );
  
const yes = new client.button.MessageButton()
        .setStyle("green")
        .setLabel("Join Our Support Server!")
        .setURL(Support);
    
const web = new client.button.MessageButton()
        .setStyle("green")
        .setLabel("Websites")
        .setURL("https://dgh-bot.ddns.net");
   
    client.button.send(null, {
      channel: message.channel.id,
      embed: embed,
      buttons: [[yes, web]]
    });
}
};
