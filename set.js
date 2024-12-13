const fs = require('fs-extra');
const path = require("path");
const { Sequelize } = require('sequelize');

// Load environment variables if the .env file exists
if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}

const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined ? databasePath : process.env.DATABASE_URL;

module.exports = {
    session: process.env.SESSION_ID || 'FLASH-MD-WA-BOT;;;=>"FLASH-MD-WA-BOT;;;=>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUpNTE8wVFI5S29Jd3BBZ2FVVmhReUtENFhzRU52a0xhU2FCSWRYcXRYND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ3BLTVFDUk9kZVIyeEJwdzdwVDNjRXhHcUUzRUhVQ1pHV3NCVUY2dDV3WT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2RDluQi91OXhSYW05R3pqZ0xCSE9HVTFGZHozcUJmbXgwUzk2dGV4RkVZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUbnVUUG9xbkFlTjdsaFlCU0pCWVBUVUEvSUZQT0dpcTROOXo4YWxScmg0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVMN3VubkF1a21yQWpQZjl3NG1JV21yZVZHY21zeEs2cXlpMEJZL1dabTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJQLytDa2xWSk5qdjcxZU4waE44OWllMnB2MStxWk04MkptSWtNOUcveDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0g3aWVBTVdzVm9QSWg5UVRJVEFIT21tRE8wM1pSM2tGOHphTHVyS2tuaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOG1yc1B1QkFjUXdMY3o3SVo3WTlYa3REOFZkOVhIRmowZ0dpTjNwdGlITT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVFcmRWcFF4RGF3Sm1Mb1NiRG9QN1JFaTRzcXAzcUhqUml5YUtJYXBnY29oVjI1TXJlcG1NU2FIVHlNNXNvSmUxSmprc0xnS082b2lESHNRUGZiRUJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAyLCJhZHZTZWNyZXRLZXkiOiJzM1U3YzY2d2E4Vlg4bkhZSjJveWgzcDYvRjY4d0pJY0l4b2QrdjFhMlc4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJxYmhRdUZyRVFhRzZ6dnNTYUdWT1l3IiwicGhvbmVJZCI6IjEyNTUxM2ZhLWFiZTctNGE2Mi1iZmI2LTgzZTg1NmIyYzRjYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtZ3VxY0pvZ3pWVzJXVlBwNjhzUittU3VZbm89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTkEwRDNLd1RtekhnZGJUd3lmeTRoU2lTRTljPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlY2VjlZSlE3IiwibWUiOnsiaWQiOiI0ODY5OTUzODYwMToxNkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZqu8J2bhsmS1p/hjZ3JpMqIyZPwnZa+8J2bgnQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0svSnNZa0JFSzM0OGJvR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkxXVDY2NG12QzhSbnB2OS96OTZHMU41OEVydnZkK0lKTVdNdlBHcTZCQXc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlgyOGJwb294V1lpbjNtWWZrL1NmWncxSHEyMHNzOUk4em8zR0pGNksySkFvbWthZnNWSzJJZGh3Q3NSR2d2YU01YW43SkYrSE1qYitMUTE2ODVDWkRnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ5NzVyOTNUR3FwaFhyQ0hDV3hwQ0x5UUNTQlFpWm5wSjl5c3B5OExmOGhyOVFIOTNJWG1Jd3dscTBMMTJ1cEdUL3IwY1J2eXJMdGo4aWNqN09obm5EQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjQ4Njk5NTM4NjAxOjE2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlMxayt1dUpyd3ZFWjZiL2Y4L2VodFRlZkJLNzczZmlDVEZqTHp4cXVnUU0ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzQxMTQzNjF9",
    PREFIXES: (process.env.PREFIX || '').split(',').map(prefix => prefix.trim()).filter(Boolean),
    OWNER_NAME: process.env.OWNER_NAME || "France King",
    OWNER_NUMBER: process.env.OWNER_NUMBER || "48699538601",
    AUTO_READ_STATUS: process.env.AUTO_VIEW_STATUS || "on",
    AUTOREAD_MESSAGES: process.env.AUTO_READ_MESSAGES || "on",
    CHATBOT: process.env.CHAT_BOT || "off",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_SAVE_STATUS || 'off',
    A_REACT: process.env.AUTO_REACTION || 'on',
    L_S: process.env.STATUS_LIKE || 'on',
    AUTO_BLOCK: process.env.BLOCK_ALL || 'off',
    URL: process.env.MENU_LINKS || 'https://files.catbox.moe/c2jdkw.jpg',
    MODE: process.env.BOT_MODE || "private",
    PM_PERMIT: process.env.PM_PERMIT || 'on',
    HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
    HEROKU_API_KEY: process.env.HEROKU_API_KEY,
    WARN_COUNT: process.env.WARN_COUNT || '3',
    PRESENCE: process.env.PRESENCE || '',
    ADM: process.env.ANTI_DELETE || 'on',
    TZ: process.env.TIME_ZONE || 'Africa/Nairobi',
    DP: process.env.STARTING_MESSAGE || "on",
    ANTICALL: process.env.ANTICALL || 'on',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://flashmd_user:JlUe2Vs0UuBGh0sXz7rxONTeXSOra9XP@dpg-cqbd04tumphs73d2706g-a/flashmd"
        : "postgresql://flashmd_user:JlUe2Vs0UuBGh0sXz7rxONTeXSOra9XP@dpg-cqbd04tumphs73d2706g-a/flashmd",
    W_M: null, // Add this line
};

// Watch for changes in this file and reload it automatically
const fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`Updated ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
