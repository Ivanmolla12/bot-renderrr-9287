const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.on('ready', () => console.log('✅ Logged in as ' + client.user.tag));

client.on('messageCreate', (msg) => {
  if (msg.author.bot) return;
  if (msg.content === '!ping') msg.reply('Pong!');
});

const token = process.env.DISCORD_TOKEN;
if (token) {
  client.login(token).catch(err => {
    console.error('Login failed:', err.message);
  });
} else {
  console.error('⚠️ No DISCORD_TOKEN set');
}