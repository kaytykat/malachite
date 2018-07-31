const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
    console.log("I am ready!");
  });

client.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  if (message.content.startsWith(config.prefix + "you there?")) {
    message.channel.send("here!");
  } else
  if (message.content.startsWith(config.prefix + "tarot the fool")) {
    message.channel.send("The Fool represents new beginnings and innocence.");
  } else
  if (message.content.startsWith(config.prefix + "tarot the magician")) {
    message.channel.send("The Magician represents action and manifestation.");
  } else
  if (message.content.startsWith(config.prefix + "tarot the high priestess")) {
    message.channel.send("The High Priestess represents resting and the subconcious.");
  } else
  if (message.content.startsWith(config.prefix + "tarot the empress")) {
    message.channel.send("The Empress represents femininity and abundance.");
  } else
  if (message.content.startsWith(config.prefix + "tarot the emperor")) {
    message.channel.send("The Emperor represents masculinity and structure.");
  } else
  if (message.content.startsWith(config.prefix + "tarot the hierophant")) {
    message.channel.send("The Hierophant represents religion and tradition.");
  } else
  if (message.content.startsWith(config.prefix + "tarot the lovers")) {
    message.channel.send("The Lovers represent unity and romance.");
  } else
  if (message.content.startsWith(config.prefix + "tarot the chariot")) {
    message.channel.send("The Chariot represents movement forward and victory.");
  } else
  if (message.content.startsWith(config.prefix + "tarot strength")) {
    message.channel.send("Strength represents being willful and gentle.");
  } else
  if (message.content.startsWith(config.prefix + "tarot the hermit")) {
    message.channel.send("The Hermit represents introspection and self-discovery.");
  } else
  if (message.content.startsWith(config.prefix + "tarot the wheel of fortune")) {
    message.channel.send("The Wheel of Fortune represents changes in life and cycles.");
  } else
  if (message.content.startsWith(config.prefix + "tarot justice")) {
    message.channel.send("Justice represents balance and fairness.");
  } else
  if (message.content.startsWith(config.prefix + "tarot the hanged man")) {
    message.channel.send("The Hanged man represents sacrifice and gaining a new perspective.");
  } else
  if (message.content.startsWith(config.prefix + "tarot death")) {
    message.channel.send("Death represents things ending and inevitability.");
  } else
  if (message.content.startsWith(config.prefix + "tarot temperance")) {
    message.channel.send("Temperance represents moderation and sensibility.");
  } else
  if (message.content.startsWith(config.prefix + "tarot the devil")) {
    message.channel.send("The Devil represents addiction and materialism.");
  } else
  if (message.content.startsWith(config.prefix + "tarot the tower")) {
    message.channel.send("The Tower represents the collapse of what is and disaster.");
  } else
  if (message.content.startsWith(config.prefix + "tarot the star")) {
    message.channel.send("The Star represents hope and peacefulness.");
  } else
  if (message.content.startsWith(config.prefix + "tarot the moon")) {
    message.channel.send("The Moon represents mystery and dreams.");
  } else
  if (message.content.startsWith(config.prefix + "tarot the sun")) {
    message.channel.send("The Sun represents good news and happiness.");
  } else
  if (message.content.startsWith(config.prefix + "tarot judgement")) {
    message.channel.send("Judgement represents rebirth and an inner calling.");
  } else
  if (message.content.startsWith(config.prefix + "tarot the world")) {
    message.channel.send("The World represents completion and wholeness.");
  } else  
  if (message.content.startsWith(config.prefix + "herb salt")) {
    message.channel.send("Salt can be used for protection and purification.");
  } else
  if (message.content.startsWith(config.prefix + "herb pepper")) {
    message.channel.send("Pepper can be used for banishing and protection.");
  } else
  if (message.content.startsWith(config.prefix + "herb basil")) {
    message.channel.send("Basil can be used for happiness and attraction.");
  } else
  if (message.content.startsWith(config.prefix + "herb mint")) {
    message.channel.send("Mint can be used for health and attraction.");
  }
});

client.login(config.token);