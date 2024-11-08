const inventory=require('../../../src/inventory');
const { EmbedBuilder} = require("discord.js");
module.exports= (interaction,client,handler)=>{
    if (!interaction.isButton()) return;


    if(interaction.customId%1==0){
                const merch=inventory.getInventory();
                const msg = interaction.customId;
            
           try{ 
            //if the id of the button is undefined 
                if(msg!=undefined && msg<merch.length) {
                    const embed = new EmbedBuilder()
                    .setTitle(merch[msg].label)
                    .setDescription(merch[msg].description)
                    .addFields({name: 'Price', value: merch[msg].price})
                    .setURL(merch[msg].URL)
                    .setThumbnail(merch[msg].img);
                    
                    interaction.reply({embeds:[embed], ephemeral:true});
                }
            }catch(error){
                console.log(error);
            }
            }
}