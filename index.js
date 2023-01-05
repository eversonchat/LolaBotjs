const {Client} = require("discord.js")
const bot = new Client({
    intents:3243773
})
bot.login(process.env.token)
bot.on("ready",()=>{
  console.log("ok")

bot.application.commands.valueOf().map(o=>{
    console.log(a.name)
    bot.application.commands.delete(o.id)
})
})
// TK: MTAzODQ4NjgxMTg2MjkwOTEwMQ.GdNFXi.N8TIe4Cdgi8jZgQO5o0g5rqpeoHYApvL0GFaiU