const prefix = '-';
const Discord = require('discord.js');
const client = new Discord.Client(602556988785688594);

client.on("message", message => {
    if (message.content.startsWith("bc-")) {
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
  m.send(`${argresult}\n ${m}`);
  })
  message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`:mailbox:  عدد المستلمين `);
  message.delete();
  };
  });
});

client.login("NjAyNTU2OTg4Nzg1Njg4NTk0.XTSlBg.Qe5CgSKfXRLP8kYPgew_4e7MX4Y")