const fs = require('fs')
const path = require('path')
const axios = require ("axios")
const fetch = require("node-fetch")
const { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn, text }) => {
  if (!text) return conn.reply(m.chat, 'Username nya mana?', m)

  await m.reply('Searching...🔍')
    let jsonar = await fetch(`http://www.ardhixs.my.id/api/tiktokstalk?q=${text}`).then(a => a.json())
    let thumb = await getBuffer(jsonar.profile)
    let hasil = `*── 「 TIK-TOK STALK 」 ──*
▢ *Nama*: ${jsonar.name}
▢ *Username*: ${jsonar.username}
▢ *Follower*: ${jsonar.followers}
▢ *Following*: ${jsonar.following}
▢ *Likes*: ${jsonar.likes}
▢ *Videos*: ${jsonar.videos}
`
    await conn.sendMessage(m.chat, { image: thumb, caption: hasil, quoted: m })
}
handler.help = ['tiktokstalk']
handler.tags = ['stalk']
handler.command = /^(ttstalk|tiktokstalk)$/i
handler.limit = true

module.exports = handler

const fetchJson = (url, options) => new Promise(async (resolve, reject) => {
    fetch(url, options)
        .then(response => response.json())
        .then(json => {
            resolve(json)
        })
        .catch((err) => {
            reject(err)
        })
})


const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
                    'User-Agent': 'GoogleBot',
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}
