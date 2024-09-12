const fs = require("fs");
module.exports.config = {
	name: "noprefix file",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "jordanofficial", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("virat") ||
     react.includes("VIRAT") || 
react.includes("sumit") || 
react.includes("@mela bacha") || 
react.includes("owner") || 
react.includes("bos") ||
react.includes("sonu")) {
		var msg = {
				body: "༺MY BOSS virat༻",
				attachment: fs.createReadStream(__dirname + `/cache/virat.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😍", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
