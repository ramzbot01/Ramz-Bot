let fetch = require("node-fetch")
let handler = async (m, { conn }) => {
  let res = await fetch('https://candaan-api.vercel.app/api/image/random')
  let json = await res.json()
  if (!json.data.url) throw 'Err!'
  conn.sendFile(m.chat, json.data.url, 'meme.png', json.method, m)
}
handler.help = ['meme']
handler.tags = ['random']
handler.register = false
handler.command = /^(meme)$/i
handler.limit = false
handler.group = true

module.exports = handler
