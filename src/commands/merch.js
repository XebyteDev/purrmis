const { SlashCommandBuilder,EmbedBuilder } = require("discord.js");

module.exports ={
    data: new SlashCommandBuilder().setName('merch').setDescription("Riven's Final Wish"),
    run:({interaction,client,handler})=>{
        const embed= new EmbedBuilder().setTitle('You Wish to Look Athletic and Elegant').setURL('https://primismerch.store');

        interaction.reply({
        embeds:[embed],
        ephemeral:true
     });
    },
    options:{},
}