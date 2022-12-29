const Discord = require("discord.js");
require ("dotenv").config()
//create a variable to store the token
const TOKEN = "MTA1Nzc5MDQzNjk5Mjg4NDg1OA.G4rYOK.dMaRlcVHJHEhTkwGuEfAVsLPyyMGzrmfxFz_Fo"

//bot client 
const client = new Discord.Client({
    intents: [
        "Guilds",
        "GuildMessages"      
    ]
})

//some event listeners
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "Hola"){
        message.reply("Hola :3")
    }
})

client.login(process.env.TOKEN)