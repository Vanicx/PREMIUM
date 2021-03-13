const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");

bot.login(process.env.token);

const bot = new discord.Client();

const client = new discord.Client();
client.login(botConfig.token);

client.on("ready", async () => {

    console.log(`${client.user.username} is online.`);
    client.user.setActivity("💜 Premium FiveM Shop 💜", {type: "WATCHING"});
    
});