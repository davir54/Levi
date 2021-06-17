const help = (p, date, user, wame) => {
return `
╭━━━━━━━━━━━━━━━━━━━╮
┃         𓂀𝔻𝔸𝕍𝕀 𝔹𝕆𝕋𓂀
┃  
┃ 🕐 𝐃𝐚𝐭𝐚 𝐞 𝐡𝐨𝐫𝐚: ${date}
┃ 🙂 𝐔𝐬𝐮𝐚́𝐫𝐢𝐨: ${user}
┃ 🌎 𝐖𝐚𝐦𝐞: 
┃ ${wame}                                       
┃
┣━━━⚡ 𝙋𝙍𝙄𝙉𝘾𝙄𝙋𝘼𝙄𝙎 ⚡━━━╮
┃ ${p}listblockcmd
┃ ${p}listpalavra
┃ ${p}info
┃ ${p}del
┃ ${p}delete
┃ ${p}ajuda
┃ ${p}help
┃ ${p}comandos
┃ ${p}menulite
┃ ${p}menu
┃ ${p}ping
┃ ${p}destrava
┃ ${p}sugerircmd (txt)
┃ ${p}terbot
┃ ${p}botvip
┃ ${p}blocklist
┃ ${p}blacklist
┃ ${p}criador
┃ ${p}toimg (leg, resp img)
┣━━━━😎 𝘾𝙍𝙄𝘼𝘿𝙊𝙍 😎━━━━╮
┃ ${p}blockcmd (cmd sem prefix)
┃ ${p}unblockcmd (cmd sem prefix)
┃ ${p}alerta (txt)
┃ ${p}antinewchat (1 or 0)
┃ ${p}antispamcmd (1 or 0)
┃ ${p}antipv (1 or 0)
┃ ${p}antinewchat (1 or 0)
┃ ${p}infinityblock (1 or 0)
┃ ${p}antiligar (1 or 0)
┃ ${p}addpalavra (txt)
┃ ${p}removepalavra (txt)
┃ ${p}limparchat (txt)
┃ ${p}ataque (txt)
┃ ${p}divulgar (txt)
┃ ${p}entrargp (txt)
┃ ${p}block (num)
┃ ${p}unblock (num)
┃ ${p}msginfo
┃ ${p}chatinfo
┣━━━━━💫 𝙇𝙀𝙑𝙀𝙇 💫━━━━━╮
┃ ${p}deletelevel
┃ ${p}level (n/a, num)
┃ ${p}registerlevel
┣━━━━━❌ 𝘼𝙉𝙏𝙄 ❌━━━━━╮
┃ ${p}antidoc (1 or 0)
┃ ${p}antiloc (1 or 0)
┃ ${p}antiimg (1 or 0)
┃ ${p}antipalavra (1 or 0)
┃ ${p}antivideo (1 or 0)
┃ ${p}antisticker (1 or 0)
┃ ${p}antiaudio (1 or 0)
┃ ${p}antictt (1 or 0)
┃ ${p}antilink (1 or 0)
┃ ${p}antiporn (1 or 0)
┃ ${p}antifake (1 or 0)
┃ ${p}dontback (1 or 0)
┃ ${p}antilinkhard (1 or 0)
┣━━━━👥 𝙂𝙍𝙐𝙋𝙊𝙎 👥━━━╮
┃ ${p}listfake
┃ ${p}listbr
┃ ${p}listddd (country code)
┃ ${p}dbackadd (num)
┃ ${p}dbackrm (num)
┃ ${p}fechargp
┃ ${p}mudardesc
┃ ${p}mudarnome
┃ ${p}abrirgp
┃ ${p}linkgroup
┃ ${p}listadmin
┃ ${p}listonline
┃ ${p}leave
┃ ${p}kick (dial num)
┃ ${p}ban (resp msg)
┃ ${p}promote (dial num)
┃ ${p}demote (dial num)
┃ ${p}add (num)
┃ ${p}roletrussablock (1 or 0)
┃ ${p}welcome (1 or 0)
┃ ${p}simih (1 or 0)
┃ ${p}autostickerimg (1 or 0)
┃ ${p}onmodgrupo
┃ ${p}offmodgrupo
┃ ${p}autoreply (1 or 0)
┃ ${p}marcar
┃ ${p}marcar2
┃ ${p}marcar3
┃ ${p}hidemarcar (txt)
┣━━━━━━🌈 𝙏𝙏𝙋 🌈━━━━━╮
┃ ${p}attp (txt)
┃ ${p}attp2 (txt)
┃ ${p}attp3 (txt)
┃ ${p}attp4 (txt)
┃ ${p}attp5 (txt)
┃ ${p}attp6 (txt)
┃ ${p}ttp (txt)
┃ ${p}ttp2 (txt)
┃ ${p}ttp3 (txt)
┃ ${p}ttp4 (txt)
┃ ${p}ttp5 (txt)
┃ ${p}ttp6 (txt)
┣━━━━🎨 𝙀𝙁𝙀𝙄𝙏𝙊𝙎 🎨━━━━╮
┃ obs: coloque "me"
┃ ou marque alguém
┃
┃ ${p}triggerfig
┃ ${p}triggered 
┃ ${p}lisa (txt)
┃ ${p}sepie 
┃ ${p}invert
┃ ${p}greyscale 
┃ ${p}lgbt 
┃ ${p}blur
┣━━━🖌️ 𝙈𝙊𝙉𝙏𝘼𝙂𝙀𝙉𝙎 🖌️━━╮
┃ obs: coloque "me"
┃ ou marque alguém
┃
┃ ${p}trash 
┃ ${p}thomas 
┃ ${p}tatto 
┃ ${p}stonks 
┃ ${p}spank 
┃ ${p}rip 
┃ ${p}notstonks 
┃ ${p}mms
┃ ${p}karaba
┃ ${p}jail 
┃ ${p}hitler
┃ ${p}facepalm
┃ ${p}bluediscord
┃ ${p}blackdiscord
┃ ${p}delete
┃ ${p}confusedstonks
┃ ${p}dobross
┃ ${p}beatiful
┃ ${p}affect
┃ ${p}ad
┣━━━━✨ 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 ✨━━━━╮
┃ ${p}stiker (leg, resp img)
┃ ${p}sticker (leg, resp img)
┃ ${p}csticker (leg, resp img)
┃ ${p}cstiker (leg, resp img)
┃ ${p}fstiker (leg, resp img)
┃ ${p}fsticker (leg, resp img)
┃ ${p}nstiker (pack) (author)
┃ ${p}nsticker (pack) (author)
┃ ${p}nfstiker (pack) (author)
┃ ${p}nfsticker (pack) (author)
┃ ${p}macaco
┣━━💥 𝙍𝙊𝙇𝙀𝙏𝘼 𝙍𝙐𝙎𝙎𝘼 💥━━╮
┃ ${p}helproleta
┃ ${p}roletarussahard
┃ ${p}roletarussamed
┃ ${p}roletarussaeasy
┃ ${p}roletarussapac
┣━#️⃣ 𝙅𝙊𝙂𝙊 𝘿𝘼 𝙑𝙀𝙇𝙃𝘼 #️⃣━╮
┃ ${p}ttt (dificulty)
┃ ${p}coord (coordenada)
┃ ${p}tttme
┃ ${p}tttrank
┃ ${p}ttthelp
┣━━⏳ 𝘾𝙊𝙉𝙏𝘼𝙂𝙀𝙈 ⏳━━╮
┃ ${p}halloween (ano)
┃ ${p}kidday (ano)
┃ ${p}motherday (ano)
┃ ${p}fatherday (ano)
┃ ${p}carnaval (ano)
┃ ${p}republic (ano)
┃ ${p}goodfriday (ano)
┃ ${p}finados (ano)
┃ ${p}ourlady (ano)
┃ ${p}independence (ano)
┃ ${p}workday (ano)
┃ ${p}tiradentes (ano)
┃ ${p}pascoa (ano)
┃ ${p}natal (ano)
┃ ${p}anonovo
┣━━━━━😈 𝙋𝙊𝙍𝙉𝙊 😈━━━━╮
┃ ${p}packmega18
┃ ${p}nhentai ❮code❯
┃ ${p}randomhentai
┃ ${p}gangbang
┃ ${p}nsfwblowjob
┃ ${p}panties
┃ ${p}wallhentai
┃ ${p}tentacles
┃ ${p}nsfwneko
┃ ${p}nsfwtrap
┃ ${p}nsfw (1 or 0)
┃ ${p}yaoi
┃ ${p}ahegao
┃ ${p}ecchi
┃ ${p}cum
┃ ${p}anal
┃ ${p}pussy
┃ ${p}ero
┃ ${p}ahegao
┃ ${p}yuri
┃ ${p}hentaigif
┃ ${p}hentainekogif
┃ ${p}futanari
┃ ${p}nsfwfeet
┃ ${p}nsfwfeetgif
┃ ${p}girlmasturbate
┃ ${p}girlmasturbategif
┃ ${p}lesbian
┃ ${p}eroyuri
┃ ${p}eroneko
┃ ${p}erokitsune
┃ ${p}spank
┣━━━━🗣️ 𝙑𝙊𝙕 𝙈𝙊𝘿 🗣️━━━━╮
┃ ${p}esquilo (resp audio)
┃ ${p}grave (resp audio)
┃ ${p}estourar (resp audio)
┃ ${p}rapidoaudio (resp audio)
┃ ${p}lentoaudio (resp audio)
┃ ${p}bass (resp audio)
┣━━━━━🎵 𝘼𝙐𝘿𝙄𝙊 🎵━━━╮
┃ ${p}shazam (resp audio)
┃ ${p}gtts (la) (txt)
┃ ${p}playlist
┃ ${p}lyrics
┃ ${p}ptlyrics
┃ ${p}play (music name)
┃ ${p}playv2 (music name)
┃ ${p}tomp3 (cap, resp vid)
┃ ${p}ytsearch (name)
┃ ${p}ytmp4 (yt url)
┃ ${p}ytmp3 (yt url)
┣━━━⚙️ 𝙂𝙀𝙍𝘼𝘿𝙊𝙍 ⚙️━━━━╮
┃ ${p}ddd (ddd)
┣━━━━━🇯🇵 𝘼𝙉𝙄𝙈𝙀𝙎 🇯🇵━━━━╮
┃ ${p}randomanime
┃ ${p}randomshota
┃ ${p}randomkiss
┃ ${p}randomcry
┃ ${p}randomhug
┃ ${p}nekoanime
┃ ${p}wait (cap, resp vid)
┃ ${p}slap
┃ ${p}smile
┃ ${p}piscada
┃ ${p}dance
┃ ${p}cringe
┃ ${p}blush
┃ ${p}gore
┃ ${p}acenar
┃ ${p}lick
┃ ${p}bully
┃ ${p}kemonomimi
┣━━━━🏆 𝙍𝘼𝙉𝙆𝙄𝙉𝙂𝙎 🏆━━━╮
┃ ${p}ranklindo
┃ ${p}rankfeio
┃ ${p}rankgado
┃ ${p}rankcomu
┃ ${p}ranknazi
┃ ${p}rankqi
┃ ${p}rankfofo
┃ ${p}rankotaku
┃ ${p}rankgay
┣━━━🔮 𝙋𝙍𝙀𝙑𝙄𝙎𝙊𝙀𝙎 🔮━━╮
┃ ${p}ship (num1) (num2)
┃ ${p}corno (num1)
┃ ${p}nazista (num1)
┃ ${p}comunista (num1)
┃ ${p}dado
┃ ${p}gay (num1)
┃ ${p}qi (num1)
┃ ${p}seudia (num1)
┃ ${p}feio (num1)
┃ ${p}bv (num1)
┃ ${p}gado (num1)
┃ ${p}gostoso (num1)
┃ ${p}gostosa (num1)
┃ ${p}randomship (n1, n/a)
┣━━━━🕵️ 𝙎𝙏𝘼𝙇𝙆𝙀𝙍 🕵️━━━╮
┃ ${p}instastalk (name)
┃ ${p}githubstalk (name)
┃ ${p}tiktokstalk (name)
┃ ${p}twitterstalk (name)
┃ ${p}ffstalk (id ff)
┃ ${p}ytstalk (name)
┣━━━😳 𝙄𝙉𝙏𝙀𝙍𝘼𝘾̧𝘼̃𝙊 😳━━━╮
┃ ${p}vsf
┃ ${p}botfofo
┃ ${p}pedro
┃ ${p}botgostoso
┃ ${p}botviado
┃ ${p}botbaianor
┃ ${p}botfdp
┃ ${p}botfeio
┃ ${p}botputa
┃ ${p}botgay
┃ ${p}botcorno
┃ ${p}vtmnc
┃ ${p}bomdia
┃ ${p}boatarde
┃ ${p}boanoite
┃ ${p}lindo
┃ ${p}cheguei
┣━━━━😝 𝘿𝙄𝙑𝙀𝙍𝙎𝘼̃𝙊 😝━━━╮
┃ ${p}papel
┃ ${p}pedra
┃ ${p}tesoura
┃ ${p}cassino
┃ ${p}meme
┃ ${p}memeindo
┃ ${p}darkjokes
┣━━━━💱 𝙈𝙊𝙀𝘿𝘼 💱━━━━━╮
┃ ${p}dolarhoje
┃ ${p}rublohoje
┃ ${p}ienehoje
┃ ${p}librahoje
┃ ${p}bitcoinhoje
┃ ${p}realhoje
┃ ${p}cvoin (c1)|(c2)
┃ ${p}ccoin (c1)|(c2)|(num)
╰━━━━━━━━━━━━━━━━━━━╯`
}

exports.help = help


