const Telegraf = require('telegraf');
const Extra = require('telegraf/extra');

const { convertMtoB } = require('./util');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(({ reply }) => reply('Welcobe!'));

bot.on('message', ({
  message, from, reply, replyWithPhoto,
}) => {
  if (!('text' in message)) {
    return;
  }
  const { text, message_id } = message; // eslint-disable-line
  if (text.length > 200) {
    replyWithPhoto(
      { source: './img/nemlerei.jpg' },
      Extra.inReplyTo(message_id) // eslint-disable-line
    );
  } else if (text.includes('?')) {
    reply(
      Math.random() > 0.5 ? 'Oh yes!' : 'Oh no!',
      Extra.inReplyTo(message_id) // eslint-disable-line
    );
  } else if (text.toLowerCase().includes('normal')) {
    reply(
      'Aí vc é o norbalzão?',
      Extra.inReplyTo(message_id) // eslint-disable-line
    );
  } else if (from.id === parseInt(process.env.ENOCK_ID, 10)
             && text.includes('m')) {
    const converted = convertMtoB(text);
    if (converted !== text) {
      reply(converted);
    }
  }
});

bot.startPolling();
