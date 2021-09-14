const Insta = require('@androz2091/insta.js');
const client = new Insta.Client();
const chatbot = require("node-fetch").default;

client.on('connected', () => {
    console.log(`${client.user.username} Is Ready Now For Chats`);
});

client.on('messageCreate', (message) => {
    if (message.author.id === client.user.id) return
    message.markSeen();

    if(message.content.toLowerCase().includes('hi')){ 
        return message.chat.sendMessage('VENOM IS MY DEVELOPER CHE OUT HIS CHANNEL :- https://youtube.com/c/VenomExE');
    } else
    chatbot(`https://kukichatai.vercel.app/message=${encodeURIComponent(message.content)}`)
    .then(res => res.json())
    .then(json => {
      message.chat.sendMessage(json.reply);
    }).catch(err => {});
});

client.login('<instagram-username>', '<instagram-password>');