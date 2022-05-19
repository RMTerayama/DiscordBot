/*https://discordjs.guide/interactions/slash-commands.html#fetching-and-deleting-responses*/
const { Intents } = require('discord.js');
const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client({ intents: [Intents.FLAGS.GUILDS] });
const Jimp = require ('jimp');


client.on("ready", () =>{
    console.log('Pai ta on');
    client.user.setActivity('A PIKA EM TU');
});
client.on("guildCreate",guild =>{
    console.log ('O bot entrou no servidor : ${guild.name}(id: ${guild.id}). População ${guild.memberCount} membros!!');
});
client.on("guildDelete", guild =>{
    console.log('O bot foi removido do servidor ${guild.name} (id: ${guild.id})');
    client.user.setActivity('Serving ${cliente.guilds.size} servers');
});

client.on ("message", async message =>{
    if(message.author.bot)return;
    if(message.channel.type==="dm")return;

    });

client.login (config.token);
