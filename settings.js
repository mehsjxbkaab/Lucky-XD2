
const fs = require('fs');
const path = require('path');
const { getConfig } = require('./lib/configdb');
const settings = require('./settingss');

if (fs.existsSync(path.resolve('config.env'))) {
  require('dotenv').config({ path: path.resolve('config.env') });
}

// Helper to convert "true"/"false" strings to actual boolean
function convertToBool(text, trueValue = 'true') {
  return text === trueValue;
}

module.exports = {
  // ===== BOT CORE SETTINGS =====
  SESSION_ID: settings.SESSION_ID || process.env.SESSION_ID || "starcore~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0FCbG1wM0hmVnh5c3BqNWNiNWFKN0NocWVQek9uYUdBOUFLODRvbmpFND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYzA2QU1EeWtuUEYxWUordjBlV2M3emxsL29jTzZSTWNBYlRsMVNkOEpEbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJRVlMblh0ZVhiSnMyYlE1TEsyM3NsdUVhSTcwanBKbEFPeWw3OVNQalh3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzU3E4NWwyQlMwcUJwclV3MDdUWDZZQlFpbTcyTXJzOGZxYzVndTkwUmk0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZQZCtkS3hDU2huRUVBTVc1UHJjRThDeFhLUVhBZzlDVEl6L21ja2JFRm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJwZXl0amFuam1zQ29qcEhvTksyazI5cW9MUnhyeHNmRnNMYlFyTVozekU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU9laHRqMk82L1ozU3VXNjFOb25YVGV2RWFDRXY3QW1ZVTVhbGpKSGhtYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMUZ2eHZRcFFNbHp1QWNsZXRweEExOXAxVXR2bHZ6RUdYSnZjUGxrdlJCYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9pZFZoOFNkNnJIU2Q3ZG1LQUI4LzNXRUtPaDBPdVcweXVnU0Vxb3lBU2wyelNPL2g1SFVnZVh3ZWd0YjVSRHA3ZURFb25TWVdBZk1teHU1amlxT2lnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIsImFkdlNlY3JldEtleSI6ImVYMFZPTUEwbzhYOXNiWHd0cXpDeDdnNzQ4YW1nN0l5Y1I5NE9EMmJWRjg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlRTOWVvUFNMUXJ5NjQ5UTRFTVdQZ2ciLCJwaG9uZUlkIjoiMjg0ZjlkM2UtZjEwMS00ZWMxLThjYjktMGE1MTRiM2Q5MDk3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBDTGtMTFVBQ3FwNWJmWnhZa3k0SGtJVTgyYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0TDl2VzVCOUhBbEk2Um1abmI1SytkdVQzOEE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTVJNQUxWSU4iLCJtZSI6eyJpZCI6IjIxMjYzNTUzODY4NDoxQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjU4MzUxNTQzODg1ODI3OjFAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLTDRsTVFIRVBYSzFjMEdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJCajV0dGEyUXRKY3hUT0RrL1ZhS0VxT3RvQXduUUxjRytJVEN3MU9JcDAwPSIsImFjY291bnRTaWduYXR1cmUiOiI4U3pJRmhCR05YSUNUdm13ZWFCdGVGeEdSZWo4bEZ6WHFMa1JZeFYrYXMxbFNhWHNSb3dHclFtUDdRNTd3UzdJbHk0cFNQMDR0YXFvamhRb1hoWmxBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoicVk5QXhFcWdRSGh1dXZkVzVHeHBTMGtOUVVrSTkyanM3VHRIdTJpNG14ZVFpMXM2czljWmhYSFBXTkFONFVqK0N4T0s5YzMyY0pOTDFhcFJhYjNRamc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMTI2MzU1Mzg2ODQ6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRWStiYld0a0xTWE1Vemc1UDFXaWhLanJhQU1KMEMzQnZpRXdzTlRpS2ROIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJQWdnTiJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NzM0OTU2ODQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRzE4In0=",
  PREFIX: getConfig("PREFIX") || "." || settings.PREFIX,
  CHATBOT: getConfig("CHATBOT") || "on",
  BOT_NAME: process.env.BOT_NAME || getConfig("BOT_NAME") || "ʟᴜᴄᴋʏ-xᴅ",
  MODE: getConfig("MODE") || process.env.MODE || "public",
  REPO: process.env.REPO || "https://github.com/Tomilucky218/Lucky-XD2",
  BAILEYS: process.env.BAILEYS || "@whiskeysockets/baileys",

  // ===== OWNER & DEVELOPER SETTINGS =====
  OWNER_NUMBER: settings.OWNER_NUMBER || process.env.OWNER_NUMBER || "256789966218",
  OWNER_NAME: process.env.OWNER_NAME || getConfig("OWNER_NAME") || "ʟᴜᴄᴋʏ ➋➊➑",
  DEV: process.env.DEV || "256789966218",
  DEVELOPER_NUMBER: '256789966218@s.whatsapp.net',
  MENU_AUDIO_URL: process.env.MENU_AUDIO_URL || 'https://files.catbox.moe/3v5i11.mp3',
NEWSLETTER_JID: process.env.NEWSLETTER_JID || '120363420656466131@newsletter',

  // ===== AUTO-RESPONSE SETTINGS =====
  AUTO_REPLY: process.env.AUTO_REPLY || "false",
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
  AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*Just seen ur status 😆 🤖*",
  READ_MESSAGE: process.env.READ_MESSAGE || "false",
  REJECT_MSG: process.env.REJECT_MSG || "*📵 Calls are not allowed on this number unless you have permission. 🚫*",
  ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/4itzeu.jpg",
  LIVE_MSG: process.env.LIVE_MSG || "> ʙᴏᴛ ɪs sᴘᴀʀᴋɪɴɢ ᴀᴄᴛɪᴠᴇ ᴀɴᴅ ᴀʟɪᴠᴇ\n\n\nᴋᴇᴇᴘ ᴜsɪɴɢ ✦ʟᴜᴄᴋʏ xᴅ✦ ғʀᴏᴍ ʟᴜᴄᴋʏ ᴛᴇᴄʜ ʜᴜʙ  ɪɴᴄ⚡\n\n\n*© ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ\n\n> ɢɪᴛʜᴜʙ :* github.com/Tomilucky218/Lucky-XD2",

  // ===== REACTION & STICKER SETTINGS =====
  AUTO_REACT: process.env.AUTO_REACT || "false",
  OWNER_REACT: process.env.OWNER_REACT || "false",
  CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
  CUSTOM_REACT_EMOJIS: getConfig("CUSTOM_REACT_EMOJIS") || process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
  STICKER_NAME: process.env.STICKER_NAME || "ᴋʜᴀɴ-ᴍᴅ",
  AUTO_STICKER: process.env.AUTO_STICKER || "false",

  // ===== MEDIA & AUTOMATION =====
  AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
  AUTO_TYPING: process.env.AUTO_TYPING || "false",
  MENTION_REPLY: process.env.MENTION_REPLY || "false",
  MENU_IMAGE_URL: getConfig("MENU_IMAGE_URL") || "https://files.catbox.moe/4itzeu.jpg",

  // ===== SECURITY & ANTI-FEATURES =====
  ANTI_DELETE: process.env.ANTI_DELETE || "true",
  ANTI_CALL: process.env.ANTI_CALL || "false",
  ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "false",
  ANTI_LINK: process.env.ANTI_LINK || "true",
  ANTI_VV: process.env.ANTI_VV || "true",
  DELETE_LINKS: process.env.DELETE_LINKS || "false",
  ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox",
  ANTI_BOT: process.env.ANTI_BOT || "true",
  PM_BLOCKER: process.env.PM_BLOCKER || "true",

  // ===== BOT BEHAVIOR & APPEARANCE =====
  DESCRIPTION: process.env.DESCRIPTION || "*© Powered By Lucky Tech Hub*",
  PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
  AUTO_BIO: process.env.AUTO_BIO || "false",
  WELCOME: process.env.WELCOME || "false",
  GOODBYE: process.env.GOODBYE || "false",
  ADMIN_ACTION: process.env.ADMIN_ACTION || "false",
  version: process.env.version || "1.5.0",
  TIMEZONE: settings.TIMEZONE || process.env.TIMEZONE || "Africa/Kampala",

  // ===== CATEGORY-SPECIFIC IMAGE URLs =====
  MENU_IMAGES: {
    '1': process.env.DOWNLOAD_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg", // Download Menu
    '2': process.env.GROUP_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",   // Group Menu
    '3': process.env.FUN_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",       // Fun Menu
    '4': process.env.OWNER_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",   // Owner Menu
    '5': process.env.AI_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",         // AI Menu
    '6': process.env.ANIME_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",   // Anime Menu
    '7': process.env.CONVERT_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg", // Convert Menu
    '8': process.env.OTHER_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",   // Other Menu
    '9': process.env.REACTION_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg", // Reaction Menu
    '10': process.env.MAIN_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",    // Main Menu
    '11': process.env.LOGO_MAKER_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg", // Logo Maker Menu
    '12': process.env.SETTINGS_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg", // Settings Menu
    '13': process.env.AUDIO_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg",  // Audio Menu
    '14': process.env.PRIVACY_MENU_IMAGE || "https://files.catbox.moe/4itzeu.jpg" // Privacy Menu
  }
};
