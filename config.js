const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="bahawalpur,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923348544535" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923348544535";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923348544535,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_06_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjksXG4gICAgICAgIDExNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDk0LFxuICAgICAgICAxMixcbiAgICAgICAgNixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTM1LFxuICAgICAgICA0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDksXG4gICAgICAgIDM1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDk0LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQyLFxuICAgICAgICA4NixcbiAgICAgICAgNzksXG4gICAgICAgIDIyOSxcbiAgICAgICAgOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAzNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjksXG4gICAgICAgIDU3LFxuICAgICAgICA5MixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDY2LFxuICAgICAgICAyNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTYyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyLFxuICAgICAgICAzOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgNixcbiAgICAgICAgMzAsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDI2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI2LFxuICAgICAgICA2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzgsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDYyLFxuICAgICAgICA3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjMxLFxuICAgICAgICA3MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDYyLFxuICAgICAgICAxNCxcbiAgICAgICAgMjQyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTg5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTYyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDg5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTkwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTMyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAzMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDk4LFxuICAgICAgICA4NyxcbiAgICAgICAgNyxcbiAgICAgICAgMTE5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjE3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiM2phdlNsWXZ2dUx3NVYybVY3R0xuak83MnNDWGJNWldJbFlQbzdJd0x4TT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwNDk0OTEzMjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjZDREEyOTI4OEMwN0Y5MzA4QzQwQ0E5NjVBRkJEQzIwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjY0NzE1NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA0OTQ5MTMyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjk3NjdDMDc4OUU0ODgxQ0UyQUJBQ0FFQ0U2NDdEQjZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNjQ3MTU4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkpxMGN6ZEx1VGx5ZkdpMzdUWUVOb0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiOGNiZWUyY2EtMTAxMi00ZGRmLThkNGEtZTUwMTcyYzQ2NWY5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NSxcbiAgICAgIDgsXG4gICAgICAyMzUsXG4gICAgICAyMDEsXG4gICAgICAzNixcbiAgICAgIDc0LFxuICAgICAgMjI0LFxuICAgICAgNTksXG4gICAgICA3OSxcbiAgICAgIDI0LFxuICAgICAgMixcbiAgICAgIDEwMCxcbiAgICAgIDQwLFxuICAgICAgMjQsXG4gICAgICA4MixcbiAgICAgIDEwLFxuICAgICAgMjMyLFxuICAgICAgMTE3LFxuICAgICAgNTksXG4gICAgICA5MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjAsXG4gICAgICAxNzcsXG4gICAgICAyNTAsXG4gICAgICA2LFxuICAgICAgOTUsXG4gICAgICA0MixcbiAgICAgIDM2LFxuICAgICAgMjMsXG4gICAgICAxMDEsXG4gICAgICAxNTIsXG4gICAgICAxMDEsXG4gICAgICAzMCxcbiAgICAgIDIxNSxcbiAgICAgIDE4MixcbiAgICAgIDEyOCxcbiAgICAgIDE2MyxcbiAgICAgIDQ1LFxuICAgICAgMTI0LFxuICAgICAgMTg5LFxuICAgICAgNzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQkFKR1E1MVNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA0OTQ5MTMyNjozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNjI5NzMwMjA1OTAxMDI6M0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJHUk9VUCBBRE1JTiBCT1RcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNbTR1b2tERU8yRXRyVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInlDV0NxcU1JMnRPMHJIU01zeEFEL1NUNUxRalFGclRWZGFualhna1N2M3c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYUNCSHprS0UzOE5MNnJ1MDd6V3ZmTlc0SHBGVEJyKzVPUk9OR0lFaC9RMjYxbjV4dC95ajd1WEhlc3l4bUhaTlBuWGpuVWlPNFN0SVlFL05pSUJ1QWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTzBOazVtdTEyK3V3MVZKZjJFR1B4Z1ZITTI3TGVqQWRRUkxWckhROGVLblIzdkhLTjM5TjYrczhRbXpBY2h6bnNUMEhyQ3orQVZoOWFjai9VZXZ5Qmc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDQ5NDkxMzI2OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI2NDcxNTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNSFRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1IVC5qc29uIjogIntcImtleURhdGFcIjpcIktiRHNjWVEvTENhS1VYMW9SZ01GNVAwbTJ5SzdSQUY4bldlQlFXRi91TUU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODI1MTM4MjQ5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI2NDcxNTgyMTVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
