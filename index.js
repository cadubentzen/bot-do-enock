const Telegraf = require('telegraf');
const Extra = require('telegraf/extra');

const { convertMtoB } = require('./util');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(ctx => ctx.reply('Welcobe!'));

bot.on('message', (ctx) => {
  if (!('text' in ctx.message)) {
    return;
  }
  if (ctx.message.text.includes('?')) {
    ctx.reply(
      Math.random() > 0.5 ? 'Oh yes!' : 'Oh no!',
      Extra.inReplyTo(ctx.message.message_id) // eslint-disable-line
    );
  } else if (ctx.from.id === parseInt(process.env.ENOCK_ID, 10)
             && ctx.message.text.includes('m')) {
    const converted = convertMtoB(ctx.message.text);
    if (converted !== ctx.message.text) {
      ctx.reply(converted);
    }
  }
});

bot.startPolling();
