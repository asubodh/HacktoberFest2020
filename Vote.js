const Discord = require('discord.js');

const Command = require ('../../Structures/Command.js');
const prefix = "!!";


module.exports = class extends Command {

    constructor(...args){
        super(...args, {
            aliases: ['vote'],
            category: 'Utilities',
            description: ['Generates a THumbs Up and Thumbs Down Vote!'],
			usage: ' [Your Message]'
            
        });
    }

    async run(message){

let args=message.content.substring(prefix.length).split(" ");
if (!message.member.hasPermission("MANAGE_GUILD")) {
    return message.channel.send("You need higher privilage to use this command!")
}
switch(args[0]){

    case "vote":
        const Embed = new Discord.MessageEmbed()
        .setColor(0xFFC300)
        .setTitle("Genenrate Vote")
        .setDescription("Wrong Command");

        if(!args[1]){
            message.channel.send(Embed);
            break;
        }

        let msgArgs = args.slice(1).join(" ");

        message.channel.send("📋 " + "**" + msgArgs + "**").then(messageRecation => {
            messageRecation.react("👍");
            messageRecation.react("👎");
            message.delete();
            console.log(`${message.author.tag} generated Vote in ${message.guild.name} ✅ \n`);
        });

    break;
}
}}; 