const Insta = require('./insta.js');
const client = new Insta.Client();
const chatbot = require("node-fetch").default;

client.on('connected', () => {
    console.log(`${client.user.username} Is Ready Now For Chats`);
});

client.on('messageCreate', (message) => {
    if (message.author.id === client.user.id) return
    message.markSeen();

    if(message.content.toLowerCase().includes('hi')){ 
        return message.chat.sendMessage('CHEY IS MY DEVELOPER CHECK OUT HIS INSTRAGRAM :- https://www.instagram.com/its_chey7?igsh=Ymx2a2Fydmp3MTVi');
    } else
    chatbot(`https://brv-chat.vercel.app/api?message=${encodeURIComponent(message.content)}`)
    .then(res => res.json())
    .then(json => {
      message.chat.sendMessage(json.reply);
    }).catch(err => {});
});

client.login('<insta-username>', '<insta-password>');
