const Discord = require('discord.js');
const bot = new Discord.Client();

const token = process.env.token;
const lime = bot.emojis.find(emoji => emoji.name === "lime");

bot.on('ready', () => {
    console.log('This bot is online!');
});

function emoji(id) {
    return bot.emojis.get(id).toString();
}

var members = ['PyxelPranav#7513', 'trev#1111', 'hippieFRESH#7339', 'KARMA#6969',
'Effot#7100', 'Envolant#2127', 'AJSonic(RockstarVitalPro)#8359', 'ѕaraн#6969', 
'Snapple#5690', 
':watermelon:⋆:hibiscus:𝓢𝖍ค𝔡𝖔ฬ_̾Ꮗ𝖆𝕣 г𝖎Ꭷ𝓻:hibiscus:⋆:watermelon:#0212', 'Dino#1700', 
'Dank SpoopyWoodwork#5550'];
var limes = ['101', 'infinite', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'];

bot.on('message', msg=>{
    if(msg.content === "lgb") {
        msg.reply('Hey! My prefix is ,');
    }
    if(msg.content === ",underprior") {
        msg.reply('you expire ( ͡° ͜ʖ ͡°)');
    }
    if(msg.content === ",event") {
        msg.reply('Our next event(EU) is on Tuesday, 22nd October 12 PM EST/3 PM EST/8 PM BST. **Reward for coming: 5 **' + emoji("623626499706191872"));
    }
    if(msg.content === ",balance") {
        console.log(msg.member.user.tag);
        
        var check;

        for(i in members) {
            if(members[i] == msg.member.user.tag) {
                var check = i;
            }
        }

        if(check == undefined) {
            msg.reply("You have 0" + " " + emoji("623626499706191872"));
        }
        else {
            msg.reply("You have " + limes[check] + " " + emoji("623626499706191872"));
        }
    }
    if(msg.content === ",commands" or msg.content === ",help"){
        msg.channel.send("lgb - to check if i'm alive; ,underprior - you expire; ,event - get to know bout the next event; ,balance - check ur balance");
    }
})

bot.login(token);
