const Telegraf = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
      console.log('started:', ctx.from.id)
      return ctx.reply('Welcobe!')
})

function isVow (letter) {
	letter = letter.toLowerCase();
	switch(letter) {
		case 'a':
        case 'á':
        case 'ã':
        case 'â':
		case 'e':
        case 'é':
        case 'ê':
		case 'i':
        case 'í':
        case 'o':
        case 'ó':
        case 'õ':
        case 'ô':
        case 'u':
        case 'ú':
            return true;
	}	

    return false;
};

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}

bot.on('message', (ctx) => {
    console.log(ctx.from.id);
	if (ctx.from.id == process.env.ENOCK_ID) {
		let { text } = ctx.message;
		for (let i = 0; i < text.length - 1; i++) {
            if (text.charAt(i).toLowerCase() === 'm' && isVow(text.charAt(i+1))) {
                if (text.charAt(i) === text.charAt(i).toLowerCase())
                    text = setCharAt(text,i,'b');
                else
                    text = setCharAt(text,i,'B');

            }
		}
        ctx.reply(text);
	}
})

bot.startPolling()
