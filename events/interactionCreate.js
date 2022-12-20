const { EmbedBuilder, InteractionType } = require("discord.js");
const { readdirSync } = require("fs");
const { owner } = require("../config");
const commandFiles = readdirSync('./komutlar').filter(file => file.endsWith('.js'));

 module.exports = {
	name: 'interactionCreate',
	execute: async(interaction) => {
  let client = interaction.client;
   if (!interaction.type == InteractionType.ApplicationCommand) return;
   if(interaction.user.bot) return;

	for (const file of commandFiles) {
        const command = require(`../komutlar/${file}`);
        if(interaction.commandName.toLowerCase() === command.data.name.toLowerCase()) {
        command.run(client, interaction)
    }
	}
  }}










  //ArviS#0011