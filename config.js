const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


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


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_05_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTc0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5LFxuICAgICAgICAxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDI1LFxuICAgICAgICA3NixcbiAgICAgICAgNzQsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgODEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDY4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDU0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTMwLFxuICAgICAgICA1NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDQwLFxuICAgICAgICA2MixcbiAgICAgICAgMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDg0LFxuICAgICAgICAzOSxcbiAgICAgICAgNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcxLFxuICAgICAgICA4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjYsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTksXG4gICAgICAgIDkxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDY2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc3LFxuICAgICAgICA0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDExLFxuICAgICAgICAyMjksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTA2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODUsXG4gICAgICAgIDI0LFxuICAgICAgICA5NixcbiAgICAgICAgNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMCxcbiAgICAgICAgMjE3LFxuICAgICAgICA2NixcbiAgICAgICAgMTg5LFxuICAgICAgICA5NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTM1LFxuICAgICAgICA1MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDExOCxcbiAgICAgICAgNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDYyLFxuICAgICAgICAxMixcbiAgICAgICAgMTA1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAzMixcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDQ5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTIxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDQwLFxuICAgICAgICA2NixcbiAgICAgICAgNjQsXG4gICAgICAgIDk2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQwLFxuICAgICAgICA0NixcbiAgICAgICAgOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDQzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODMsXG4gICAgICAgIDk1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI3LFxuICAgICAgICAyNSxcbiAgICAgICAgNixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTY2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlNpYkJPeHFXSE9aU2NGOURqMWh2YU5Odm9nL29saDd5RmtQZk1PQW5pcXM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlFpcTIzQWZpVFphNEM3ZFdjTUk0ZkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTVjYzc1NjQtMjFjMS00ZTc2LWI0MzYtYWE0NTE1NzBiMmExXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMixcbiAgICAgIDI0OSxcbiAgICAgIDE0LFxuICAgICAgMTkzLFxuICAgICAgMTksXG4gICAgICAxNDYsXG4gICAgICAxNDksXG4gICAgICAxOTYsXG4gICAgICA4NSxcbiAgICAgIDIwMyxcbiAgICAgIDYzLFxuICAgICAgMTAwLFxuICAgICAgMTUyLFxuICAgICAgMTYzLFxuICAgICAgMzUsXG4gICAgICAyMzgsXG4gICAgICAxMDgsXG4gICAgICAxNTIsXG4gICAgICAyNyxcbiAgICAgIDE1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MyxcbiAgICAgIDE5LFxuICAgICAgNzgsXG4gICAgICAyMTEsXG4gICAgICAxMTEsXG4gICAgICAyOSxcbiAgICAgIDIxNSxcbiAgICAgIDM2LFxuICAgICAgMjUxLFxuICAgICAgMjI4LFxuICAgICAgMjMwLFxuICAgICAgNTMsXG4gICAgICAxMjEsXG4gICAgICA4MSxcbiAgICAgIDk0LFxuICAgICAgMTA3LFxuICAgICAgMTMyLFxuICAgICAgNDEsXG4gICAgICAxMDAsXG4gICAgICA3MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3SE5IQkZaTlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzE0NDgwMTYyOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI1MDU3NzMxNzU4NTAwMDo4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tMQS85d0hFTG4vOUxRR0dBY2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiM3ZISDNTcklLYmhHbVIrenR0c2Y2MjQ5T3VwTkVrOGNoOFVPT3E4SmJ3cz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI4aHlBM09aYk90UCtmdWRSQitHMk04WGtyelBZL2RIcGw4L0QxYVFWUGEwYlBIcDhKZCtkU0Nhakh1eEFkUnRPbnh4Vkd5V2RqUXI0MmdYYWp5M3VCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI1OHR3Zi9POVhsZGN3alVYMEd5UHQxVlJCR0xNUG41QStQUnM1d1NpZjNRY2FJUWdxVHF1TEJrVm51UWlkRWVza3E5aGV2SWVJSm42ZkF4STZoMnNBQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MTQ0ODAxNjI6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNTgxNTAxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQU43XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBTjcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJjR3NwRDllNWJESlNiVVZQOFBsNnBxT2JWVmZmU05TbnF5WG1RcUE5RmtjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwNzQwNzUxNjksXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
