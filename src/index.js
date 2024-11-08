const {Client, GatewayIntentBits} = require('discord.js');
const { CommandKit } = require('commandkit');

const client=new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],  
});

new CommandKit({
    client,
    devGuildIds:['1273536853689241600'],
    devUserIds:['269938869196161025'],
    //devRoleIds:[],
    eventsPath:`${__dirname}/events`,
    commandsPath:`${__dirname}/commands`,
    bulkRegister:true,
});



client.login('MTI5OTI4MzUzNzg2MTU0MTk2MQ.G2tEBS.irmR7bzjMqDVplZoRBRQ-Lapt3iXvpCGF68pJ4');
