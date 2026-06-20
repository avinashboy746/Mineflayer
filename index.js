const mineflayer = require('mineflayer');

const names = [
  "Rohit",
  "Golu",
  "Mohit",
  "Aryan",
  "Lucky"
];

for (let i = 0; i < names.length; i++) {
  setTimeout(() => {
    const bot = mineflayer.createBot({
      host: 'avinashboy.aternos.me',
      port: 47974,
      username: names[i]
    });

    bot.on('spawn', () => {
      console.log(`${names[i]} server mein join ho gaya!`);
    });

    bot.on('error', (err) => {
      console.log(`${names[i]} error:`, err.message);
    });

    bot.on('end', () => {
      console.log(`${names[i]} disconnect ho gaya.`);
    });
  }, i * 3000); // Har 3 second mein ek bot join hoga
}
