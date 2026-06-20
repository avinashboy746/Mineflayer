const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: "avinashboy.aternos.me",
  port: 47974,
  username: exploser"
})

bot.on('spawn', () => {
  console.log("Bot online")
  setInterval(() => {
    bot.setControlState('jump', true)
    setTimeout(() => bot.setControlState('jump', false), 1000)
  }, 30000)
})
