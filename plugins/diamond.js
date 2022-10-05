let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
let name = await conn.getName(m.sender)
let thumb = 'https://telegra.ph/file/a75f1fae1fe7232b317d3.jpg'
let ArdXNasBot = `Hai kak ${name}, Mau jadi BOT sepert Ramz BOT?

_*NaRaa shop Menyediakan berbagai kebutuhan anda untuk JB*_ 
「BUKA JASA PEMBUATAN RUN BOT 24 JAM Paket lengkap dengan TEMA BOT sesuai JB anda」
HUB : wa.me/6288220924312

*Join Group KAMI juga kak free BOT*
https://chat.whatsapp.com/LmqmgVjvHcrBQi5iAMt3Br

Sedia Juga TOPUP GAME ONLINE Hanya di NaRaa shop 💕 TOPUP Game online Aman Terpercaya
▌│█║▌║▌║║▌║▌║█│▌
`
conn.sendMessage(m.chat, {
        image: await(await fetch(thumb)).buffer(),
        caption: ArdXNasBot,
        buttons: [
          {buttonId: `.dmml`, buttonText: {displayText: '💎DIAMOND ML💎'}, type: "RESPONSE"},
          {buttonId: `.dmff`, buttonText: {displayText: '💎DIAMOND FF💎'}, type: "RESPONSE"}
        ],
        headerType: 'IMAGE'
  }, { quoted: m })
}
handler.help = ['diamond']
handler.tags = ['main']
handler.command = /^(diamond|diamondgame)$/i

module.exports = handler
