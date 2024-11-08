const getInventory=()=>{
return merch = [{
    id: 0,
    label:'PRIMIS. Hoodie Original',
    description:' ',
    price:'$44.99',
    URL:'https://www.etsy.com/listing/1780799879/unisex-heavy-blend-primis-hoodie?click_key=d820aa1d9d52097f052e41bca9b2ead2f2487ed7%3A1780799879&click_sum=609a5a65&ref=shop_home_active_6',
    img:'https://i.etsystatic.com/54197852/r/il/d21517/6259397591/il_640xN.6259397591_1njs.jpg'
},
{
    id:1,
    label:'PRIMIS. Hoodie II',
    description:' ',
    price:'$44.99+',
    URL:'https://www.etsy.com/listing/1780865141/unisex-heavy-blend-primis-hoodie-ii?click_key=8bf2f4512327e93b031b2421401c29cbe549c630%3A1780865141&click_sum=dd88f87e&ref=shop_home_active_2',
    img:'https://i.etsystatic.com/54197852/r/il/186cc4/6208421380/il_640xN.6208421380_eijr.jpg'
},
{
    id:2,
    label:'PRIMIS. Hoodie III',
    description:' ',
    price:'$44.99',
    URL:'https://www.etsy.com/listing/1780920091/unisex-heavy-blend-primis-hoodie-iii?click_key=b99178bb26d635397f682096e01af01751f36c08%3A1780920091&click_sum=209ee7c4&ref=shop_home_active_1',
    img:'https://i.etsystatic.com/54197852/r/il/15b713/6256684781/il_640xN.6256684781_2isq.jpg'
},
{ 
    id:3,
    label:'PRIMIS. Logo Phone Case',
    description:' ',
    price:'$24.99',
    URL:'https://www.etsy.com/listing/1763834030/phone-hard-case-primis-logo?click_key=7b01b0a8985fd876fdd6120fc39f61b1559f33a9%3A1763834030&click_sum=24ec9aa0&ref=shop_home_active_12&frs=1',
    img:'https://i.etsystatic.com/54197852/r/il/281d5b/6243757507/il_640xN.6243757507_3r9n.jpg'
},
{
    id:4,
    label:'PRIMIS. Phone Case',
    description:' ',
    price:'$23.00',
    URL:'https://www.etsy.com/listing/1763834264/phone-hard-case-primis-name?click_key=4309d3441bde0465aa14db8572135313021bedcc%3A1763834264&click_sum=1b1e9e47&ref=shop_home_active_7&frs=1',
    img:'https://i.etsystatic.com/54197852/r/il/1dfe5b/6195730542/il_640xN.6195730542_2k9e.jpg'
},
{
    id:5,
    label:'Purrmis mug',
    description:' ',
    price:'$17.99',
    URL:'https://www.etsy.com/listing/1763834242/mug-11oz?click_key=cba583713070aa6c2ae1aee100c408ea2e44c2be%3A1763834242&click_sum=c52a81b2&ref=shop_home_active_8',
    img:'https://i.etsystatic.com/54197852/r/il/b40bd0/6219264724/il_600x600.6219264724_tb0t.jpg'
},
{
    id:6,
    label:'LED PRIMIS. Gaming Mousepad',
    description:' ',
    price:'$39.00',
    URL:'https://www.etsy.com/listing/1778026261/led-gaming-mouse-pad?click_key=c5a24ed53d905448c6f51f264074b759bb674b38%3A1778026261&click_sum=6b7c5eb1&ref=shop_home_active_9&frs=1',
    img:'https://i.etsystatic.com/54197852/r/il/9b0242/6195730352/il_640xN.6195730352_my5a.jpg'
},
{
    id:7,
    label:'PRIMIS. Desk Mat',
    description:' ',
    price:'$26.49',
    URL:'https://www.etsy.com/listing/1766617888/primis-desk-mat?click_key=64de47ef8fd7a174001e9c06cae7c6eebdfcf962%3A1766617888&click_sum=f04107d0&ref=shop_home_active_5',
    img:'https://i.etsystatic.com/54197852/r/il/630c40/6208183330/il_640xN.6208183330_jl84.jpg'
},
{
    id:8,
    label:'PRIMIS. Desk Mat',
    description:' ',
    price:'$26.49',
    URL:'https://www.etsy.com/listing/1766617888/primis-desk-mat?click_key=64de47ef8fd7a174001e9c06cae7c6eebdfcf962%3A1766617888&click_sum=f04107d0&ref=shop_home_active_5',
    img:'https://i.etsystatic.com/54197852/r/il/630c40/6208183330/il_640xN.6208183330_jl84.jpg'
},
{
    id:9,
    label:'PRIMIS. Ishtar Tee',
    description:' ',
    price:'$26.00',
    URL:'https://www.etsy.com/listing/1763834002/unisex-cotton-tee-primis-ishtar?click_key=b411e08d217313dc812da17d53a2cc12cb4d1f38%3A1763834002&click_sum=48f652e4&ref=shop_home_active_13',
    img:'https://i.etsystatic.com/54197852/r/il/050830/6243757353/il_640xN.6243757353_me25.jpg'
},
{
    id:10,
    label:'PRIMIS. Atrium Tee',
    description:' ',
    price:'$26.00',
    URL:'https://www.etsy.com/listing/1763833978/unisex-cotton-tee-primis-atrium?click_key=49fbf8353c00c2c9d0b9e125c36a7a69b1a6bf63%3A1763833978&click_sum=a7721a40&ref=shop_home_active_14',
    img:'https://i.etsystatic.com/54197852/r/il/631e0c/6243757259/il_640xN.6243757259_19lf.jpg'
},
{
    id:11,
    label:'PRIMIS. Dionysus Tee',
    description:' ',
    price:'$26.00',
    URL:'https://www.etsy.com/listing/1778026011/unisex-cotton-tee-primis-dionysus?click_key=2101e7e39c93370d7ca3eeff57546cc49ea8a72e%3A1778026011&click_sum=09029c5c&ref=shop_home_active_15',
    img:'https://i.etsystatic.com/54197852/r/il/7bef22/6243760267/il_640xN.6243760267_k2u3.jpg'
},
{
    id:12,
    label:'PRIMIS. Minerva Tee',
    description:' ',
    price:'$26.00',
    URL:'https://www.etsy.com/listing/1782422021/unisex-cotton-tee-primis-minerva?click_key=e71387018106c84b8ac6623b70e0842c2476bf6d%3A1782422021&click_sum=769e4b08&ref=shop_home_recs_7',
    img:'https://i.etsystatic.com/54197852/r/il/825c57/6267326691/il_1588xN.6267326691_tgzd.jpg'
},
{
    id:13,
    label:'PRIMIS. Tee',
    description:' ',
    price:'$22.00',
    URL:'https://www.etsy.com/listing/1778025951/unisex-cotton-tee-primis-basic?click_key=1f6b381e835288a694928115b776d7af402d4323%3A1778025951&click_sum=afc9cf61&ref=shop_home_active_17',
    img:'https://i.etsystatic.com/54197852/r/il/8f86b9/6195731952/il_640xN.6195731952_nma4.jpg',
},
];
}
exports.getInventory= getInventory;
