const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
const fs = require('fs');

const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
	function sendMessagesToFamily() {
    // Okuma işlemi için "myfamily.txt" dosyasını kullan
    const numbers = fs.readFileSync('phonelist.txt', 'utf-8').split('\n').map(line => line.trim());

    const text = "TASLAK GIR BURAYA KARDESSSS";

    numbers.forEach(number => {
        if (number) {
            // Getting chatId from the number.
            // Başındaki "+" işaretini silin ve numaranın sonuna "@c.us" ekleyin.
            const chatId = number.substring(1) + "@c.us";
            client.sendMessage(chatId, text);
        }
    });
}
    sendMessagesToFamily();
});

client.on('message', msg => {
    if (msg.body == '!ping') {
        msg.reply('pong');
    }
});

client.initialize();


