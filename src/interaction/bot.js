const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('bot')
    .setDescription('Bot Yönetim Komutları')
    .addSubcommand(subcommand => subcommand.setName('reset').setDescription('Botu resetler.'))
	.addSubcommand(subcommand => subcommand.setName('test').setDescription('Botta test yapar.'))
    .setDMPermission(false)
}