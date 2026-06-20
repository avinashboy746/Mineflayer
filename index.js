const mineflayer = require('mineflayer');

const names = [
  "Rohan", "Rohit", "Golu", "Mohit", "Aryan",
  "Vicky", "Sonu", "Monu", "Aman", "Karan",
  "Rahul", "Shivam", "Piyush", "Lucky", "Deepak",
  "Ajay", "Nitin", "Sahil", "Abhishek", "Prince"
];

for (let i = 0; i < names.length; i++) {
  setTimeout(() => {
    const bot = mineflayer.createBot({
      host: 'avinashboy.aternos.me',
      port: 47974,
      username: names[i]
    });

    bot.on('spawn', () => {
      console.log(`${names[i]} joined!`);
    });

    bot.on('end', () => {
      console.log(`${names[i]} left.`);
    });

    bot.on('error', (err) => {
      console.log(err);
    });
  }, i * 5000); // Har 5 second mein ek bot join hoga
}
