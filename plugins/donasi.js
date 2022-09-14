let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [0882-2092-4312]
│ •  [0882-9405-2009]
│ •  [0882-9314-4472]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
