const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");

const bot = new discord.Client();

const client = new discord.Client();
client.login(botConfig.token);

bot.on("ready", async () => {

    console.log(`${bot.user.username} is online (made by Vanicx).`);
    bot.user.setActivity("💜 Premium FiveM Shop 💜", {type: "WATCHING"});
})

client.on('ready', () => {
    setInterval(() => {
      targetGuild = client.guilds.get('816069480160428064')
      if(targetGuild) {
          client.user.setPresence({ game: { name: targetGuild.memberCount + ' people verifying!', type: 'WATCHING' }, status: 'online'  })
                .then(console.log)
                .catch(console.error);
      }
}, 1000 * 60 * 5);

});

bot.login(process.env.token);

