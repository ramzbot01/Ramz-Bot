let fs = require('fs')
let handler = async (m, { conn }) => {
let ArdXNasBot = `💎 *List Harga DIAMOND ML*  *_Harga tidak tetap_*

14 DM.         : 3,581
28 DM.         : 7,112
42 DM.         : 10,611
70 DM.         : 17,312
86 DM.         : 19,768
100 DM.       : 23,200
140 DM.       : 34,606
172 DM.       : 38,486
257 DM.       : 59,204
284 DM.       : 69,103
355 DM.       : 86,392
429 DM.       : 103,685
514 DM.       : 118,358
706 DM.       : 157,766
1446 DM.     : 345,479

*PENTING* ❗❗ : sewaktu2 harga akan berubah tanyakan admin terlebih dahulu sebelum transaksi
Chat untuk beli : Wa.me/6288220924312/?text=hai+kak+beliDM+ML`
conn.sendFile(m.chat, fs.readFileSync('./media/IMG-20220909-WA0106.jpg'), 'file.AXS', ArdXNasBot, m)
}
handler.help = ['diamondml']
handler.tags = ['main']
handler.command = /^(diamondml|diamondmobilelegend|dmml|mobilelegend)$/i

handler.exp = 30

module.exports = handler
