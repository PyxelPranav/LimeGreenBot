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

var members = ['PyxelPranav#7513', 'trev#1111', 'Miamiala#2369'];
var limes = ['100', 'infinite', '1'];
bot.on('message', msg=>{
    if(msg.content === "lgb") {
        msg.reply('Hey! My prefix is ,');
    }
    if(msg.content === ",underprior") {
        msg.reply('you expire ( ͡° ͜ʖ ͡°)');
    }
    if(msg.content === ",event") {
        msg.reply('Our next event(US) is on Monday, 21st October 7:30 PM EST/4:30 PM PST. **Reward for coming: 5 **' + emoji("623626499706191872"));
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
})

bot.login(token);
