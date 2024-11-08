const inventory=require('../../src/inventory');
const {ButtonKit}=require('commandkit');
const { SlashCommandBuilder,ButtonBuilder,ButtonStyle,ActionRowBuilder,ComponentType,EmbedBuilder, Client, InteractionCollector} = require("discord.js");

module.exports ={
    data: new SlashCommandBuilder().setName('merchstore').setDescription('Generates merch store interface'),
    run: async ({interaction,client,handler})=>{
        try{
            let index=0;
            const channelID= interaction.channel.id;
            const channel=await client.channels.cache.get(channelID);
            
            if(!channel) return;

            const rows=[[],[]];
            let rowNums=0;

            inventory.getInventory().forEach((item)=>{
                try{
                    rowNum=Math.floor(index/5);  
                }catch(undefined){
                    rowNums=0;
                }finally{
                    if(index%5==0){
                        rows[0][index/5]=new ActionRowBuilder();
                    }
                    rows[0][rowNum].components.push(new ButtonBuilder().setCustomId(String(item.id)).setLabel(item.label).setStyle(ButtonStyle.Secondary))
                    index++;
                }
            })
            const merchEmbed = new EmbedBuilder()
            .setTitle('PRIMIS. Group Merch Shop')
            .setDescription('Come one, Come all to see the excellent wares of the PRIMIS. Group \r(Note: All prices are calculated without shipping which varies by location)')
            .setThumbnail('https://i.etsystatic.com/isla/469ab9/72668785/isla_500x500.72668785_5fy0hy0h.jpg?version=0')
            .setAuthor(
                {name:'PRIMIS. Group INTL',
                iconURL:'https://i.etsystatic.com/isla/469ab9/72668785/isla_500x500.72668785_5fy0hy0h.jpg?version=0'
                })
            .setFooter({text:'Bot Created By Xebyte'});
            
    
        const message=await channel.send({
            embeds: [merchEmbed],
            components:[rows[0][0],rows[0][1],rows[0][2]],
        });
        
        }catch(error){
            console.log(error);
        }
       

    // client.on('interactionCreate', (interaction)=>{
    //     if(interaction.isButton()){
    //         const merch=inventory.getInventory();
    //         const msg = interaction.customId;
    //    try{ 
    //     //if the id of the button is undefined 
    //         if(msg!=undefined && msg<merch.length) {
    //             const embed = new EmbedBuilder()
    //             .setTitle(merch[msg].label)
    //             .setDescription(merch[msg].description)
    //             .addFields({name: 'Price', value: merch[msg].price})
    //             .setURL(merch[msg].URL)
    //             .setThumbnail(merch[msg].img);
                
    //             interaction.reply({embeds:[embed], ephemeral:true});
    //         }
    //     }catch(error){
    //         console.log(error);
    //     }
    //     }
    // });
    },
    options:{
        devOnly:true,
    },
}