let fs = require('fs')
let handler = async (m, { conn }) => {
let ArdXNasBot = `💎 *List Harga DIAMOND FF*  *_Harga tidak tetap_*

5 DM.         : 1,269
20 DM.       : 3,380
50 DM.       : 7,402
70 DM.       : 9,659
140 DM.     : 18,868
355 DM.     : 46,595
720 DM.     : 92,340
2000 DM.   : 252,750
Member Mingguan.  : 28,550
Member Bulanan.     : 85,700

*PENTING* ❗❗ : sewaktu2 harga akan berubah tanyakan admin terlebih dahulu sebelum transaksi
Chat untuk beli : Wa.me/6288220924312/?text=hai+kak+beliDM+FF`
conn.sendFile(m.chat, fs.readFileSync('./media/IMG-20220909-WA0105.jpg'), 'file.AXS', ArdXNasBot, m)
}
handler.help = ['diamondff']
handler.tags = ['main']
handler.command = /^(diamondff|diamondfreefire|dmff|freefire)$/i


handler.exp = 30

module.exports = handler
