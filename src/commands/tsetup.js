const { SlashCommandBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

module.exports ={
    data: new SlashCommandBuilder().setName('tsetup').setDescription('use this command to setup the ticket destination channel'),
    run:({interaction,client,handler})=>{
        
    },
    options:{
        devOnly:true,
        //userPermissions:['Administrator']
    },
}