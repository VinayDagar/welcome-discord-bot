const { Client,Intents } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
    console.log(`Bot ${client.user.tag} is online and ready to listent....`);
});

client.on('messageCreate', (message) => {
    // if(!message.author.bot) {
    //     message.reply(`Hi welcome ${message.author.username}, How can I help you?`)
    // }
})

client.on("guildMemberAdd", (member) => {
    console.log(member)
    client.channels.get("557907471096872960").send(`Hello ${member} Welcome to the channel!`); 
})

client.login(token);
