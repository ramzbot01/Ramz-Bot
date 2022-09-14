let fetch = require('node-fetch')
let handler = async (m, { conn, command, args }) => {
  if (!args[0]) return conn.reply(m.chat, 'Tidak ada url', m)
  let url = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
  let ss = await (await fetch(global.API('https://screenshot-axs.vercel.app', '/api', { delay: 1000, url }))).buffer()
  let ekk = { externalAdReply: { 
              showAdAttribution: false,
              renderLargerThumbnail: true,
              title: wm,
            } }
            await conn.sendMessage(m.chat, {image: ss, caption: url, contextInfo: ekk}, {quoted:m})
//  conn.sendFile(m.chat, ss, 'ArdhiXs.png', url, m)
}
handler.help = ['ssweb'].map(v => v + ' <url>')
handler.tags = ['internet']
handler.command = /^ss(web)?$/i
handler.limit = false 
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
