const Telegraf = require('telegraf');

const { convertMtoB } = require('./util');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(ctx => ctx.reply('Welcobe!'));

bot.on('message', (ctx) => {
  if (ctx.from.id === parseInt(process.env.ENOCK_ID, 10)) {
    ctx.reply(convertMtoB(ctx.message.text));
  }
});

bot.startPolling();
