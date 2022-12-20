const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Shows the Ping Values ​​of the bot."),
    run: async (client, interaction) => {
      interaction.reply(`**Fars Bot's Ping Value :  ${client.ws.ping} **`)
    }
 };