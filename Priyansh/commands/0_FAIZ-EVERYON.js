const fs = require("fs");
module.exports.config = {
  name: "evening",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "FAIZ ANSARI", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "evening",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("@everyone")==0 || event.body.indexOf("EVERYONE")==0 || event.body.indexOf("Everyone")==0 || event.body.indexOf("Tpko")==0) {
    var msg = {
        body: "𝐄𝐕𝐄𝐑𝐘𝐎𝐍𝐄 𝐈𝐃𝐇𝐀𝐑 𝐀 𝐉𝐀𝐎 𝐒𝐁",
        attachment: fs.createReadStream(__dirname + `/noprefix/evening.mp4`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤸", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

        }