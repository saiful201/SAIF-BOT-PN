module.exports.config = {
    name: "addmin3",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    prefix: true,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
    dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  
var callback = () => api.sendMessage({body:`
●❯─────────────────────────❮●
𝐍𝐚𝐦𝐞       :- 𝐙𝐡𝐞 𝐘𝐮𝐚𝐧(𝐉𝐞𝐯𝐚𝐧)
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 :- 𝐙𝐡𝐞 𝐘𝐮𝐚𝐧 
𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧   :- 𝐈𝐬𝐥𝐚𝐦
𝐏𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬:- 𝗕𝗮𝗻𝗴𝗹𝗮𝗱𝗲𝘀𝗵,𝐃𝐡𝐚𝐤𝐚,𝐒𝐚𝐯𝐚𝐫
𝐂𝐮𝐫𝐫𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬:- 𝐃𝐡𝐚𝐤𝐚,𝐒𝐚𝐯𝐚𝐫
𝐆𝐞𝐧𝐝𝐞𝐫.   :- 𝐌𝐚𝐥𝐞
𝐀𝐠𝐞           :- 18+
𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 :- 𝐒𝐢𝐧𝐠𝐥𝐞(🫣)
𝐖𝐨𝐫𝐤        :- 𝐒𝐭𝐮𝐝𝐞𝐧𝐭
𝐆𝐦𝐚𝐢𝐥       :- 𝐤𝐨𝐦𝐨 𝐧𝐚(🚫) 
𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩:- wa.me/+𝐞𝐢 𝐝𝐚 𝐨𝐨 𝐤𝐨𝐦𝐨 𝐧𝐚(😑)
𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦  :-𝐭.𝐦𝐞/𝐧𝐚𝐢(🥹)
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 :-𝐡𝐭𝐭𝐩𝐬://𝐰𝐰𝐰.𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤.𝐜𝐨𝐦/𝐳𝐡𝐞.𝐲𝐮𝐚𝐧.261874
●❯─────────────────────────❮●`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://graph.facebook.com/61567467803735/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };
