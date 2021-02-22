const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix

exports.run = async (client, message, args) => {//splashen
 if(!["803888632451956766", "803888632451956766","803888632451956766","803888632451956766",'803888632451956766','803888632451956766',"80388863245195676!"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) return message.channel.send(`<a:Cros:788055287768678421>**Bu Komutu Kullanabilmek İçin Yetkin Bulunmuyor.**<a:Cros:788055287768678421>`)  
  let isim = args[1].charAt(0).replace("i", "İ").toUpperCase() + args[1].slice(1).toLowerCase();
  let uye = message.mentions.users.first();
  let yaş = args[2]
  let yetkili = message.author
  let tag = ayarlar.tag || '乡'
  if(!uye) return message.channel.send(`**Kullanıcıyı Etikemen Gerek.**`)
  if(!yaş) return message.channel.send(`**Kullanınıcının İsmini Yazman Gerek.**`)
  if(!isim) return message.channel.send(`**Kullanıcının Yaşını Yazman Gerek.**`)
  if(!isim.length > 12) return message.channel.send(`**Üyenin ismi 12 harfi geçmemeli.**`)
  if(!yaş.length > 50) return message.channel.send(`**Üyenin yaşı 50'ü geçemez.**`)
  message.guild.members.cache.get(uye.id).setNickname(`${tag} ${isim} | ${yaş}`)
  message.channel.send(`**${uye.username}**' in ismi başarıyla \` ${isim} | ${yaş} \` olarak değiştirildi.:white_check_mark: `)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['isim',"i"],
    permLevel: 0
}

exports.help = {
    name: 'nick',
  
}