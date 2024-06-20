module.exports = {
    "token": "", //bot tokeni 
    "prefix": ["."], //bot prefixi
    "intents": ["MessageContent", "GuildMessages", "Guilds", "GuildMembers", "GuildBans", "GuildEmojisAndStickers", "GuildIntegrations", "GuildWebhooks", "GuildInvites", "GuildVoiceStates", "GuildPresences", "GuildMessageReactions", "GuildMessageTyping", "DirectMessages", "DirectMessageReactions", "DirectMessageTyping"],// botun intentleri
    "events": ["onMessage", "onInteractionCreate",], //botun eventleri
    "mongo": "", //mongo db url
    "ses": "" //botun gireceği ses kanalı idsi
}