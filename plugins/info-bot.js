let fs = require('fs')
let handler = async (m, { conn }) => {
let ArdXNasBot = `*─ 「 INFO - BOT - OWNER 」 ─*
▢ *IG NASIR*: @logasland
▢ *IG ARDI*: @ardhixs_
▢ *IG GUSNADI*: @fidalinox

• *SEWA BOT HUB*: 
• wa.me/6281316235253 (Adit)
• wa.me/6281226512906 (Norris)

📣 *Join OUR group FREE BOT* 👇
https://chat.whatsapp.com/LF0rq140SmDDHd3nQ62SVm 
`
conn.sendFile(m.chat, fs.readFileSync('./src/blackpink.png'), 'file.AXS', ArdXNasBot, m)
//conn.sendButton(m.chat, ArdXNasBot, wm, null, [['Menu', '.menu'],['Owner', '.owner']], m)
}
handler.help = ['infosc']
handler.tags = ['main']
handler.command = /^info(sc|script|scriptbot)?$/i

handler.exp = 30

module.exports = handler
