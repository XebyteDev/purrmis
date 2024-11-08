const { ActionRowBuilder } = require("@discordjs/builders");
const { SlashCommandBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

module.exports ={
    data: new SlashCommandBuilder().setName('ping').setDescription('Pong!'),
    run:({interaction,client,handler})=>{
        interaction.reply('pong!');
    },
    options:{
        devOnly:true,
        //userPermissions:['Administrator']
        //botPermissions:['BanMembers']
        deleted:true,
    },
}