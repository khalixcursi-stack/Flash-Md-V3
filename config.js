import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

function parsePrefixes(prefixStr) {
  if (!prefixStr || prefixStr.trim() === '' || prefixStr.toLowerCase() === 'none') return []
  return prefixStr.split(',').map(p => p.trim()).filter(Boolean)
}

function parseBoolean(value) {
  if (typeof value === 'string') {
    return value.toLowerCase() === 'on' || value.toLowerCase() === 'true' || value === '1'
  }
  return Boolean(value)
}

function parseLids(lidStr) {
  if (!lidStr || lidStr.trim() === '') return []
  return lidStr.split(',').map(l => l.trim()).filter(Boolean)
}

const CONFIG = {
  MODE: process.env.MODE || 'private',
  PREFIXES: parsePrefixes(process.env.PREFIXES),
  PORT: parseInt(process.env.PORT) || 3000,
  SESSION: process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkw3blVMQmtwUWVIWTJSWGRJRzlKNnhKREZQaDRkbEo4S1BVUSt6U2JXMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVEE2YnN5eGVOWXZJdnQwcHpIV1NVdTlqeHJTeStLOTZQdEhsOVFYZDFDWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBTDcxR25LK2RGM0JTdmxHWDlkOE4vWi9lT1c3ajBQTFpyQjlvWWNjNzJBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpWS9IYThvRXplaG5oQ3NoTElXY2Q4NEROai9LaEplMTFjVHNGNm1vcm1RPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRObGJ4MlZqcENUckM3Y3RDdVNSU3ZmdmdkM2pOamNGTGd5dVJkdzBJbFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilhqa1Y3bUEvUStUeU5ZRHZ4YkpwaklMSVNjUVUzYVBQc2VzR2R6anFKeUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT00wV0lXWVFUS1BVV1U4Q1ZRMEpvYUdGeFh2b1JKdEtGSHJTelFkdThFST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZEpJR1hYMmdOQWlsdnMrR3pNR1NsSzg1VDNCNTVLaFR1QzJ3OFBqZk1CRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikt3WGl6R0oyZS9wTW5MMm9WL2dISEhxdDR4NldWcTBIczVNVWdwOG95S0VNTktHZ2J3WXJObk44WjFpQklFZjZReVZ4SFdrQktOSzNoR09UVGhsVkNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgxLCJhZHZTZWNyZXRLZXkiOiJkOXFacGh2Q1BETjNpU05WRStGZkFDTXlyZU1QcUl5ZklaanVwZTMxQ1lZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiI4SFdHVEdIVyIsIm1lIjp7ImlkIjoiMjQyMDQxMDI5MTIyOjYzQHMud2hhdHNhcHAubmV0IiwibGlkIjoiODk3Njk4NTAwNjA5OTo2M0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01uWTNLVUhFT2lxOTlBR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImFvLzc3U0wxWFRJY2plTmd1REhaMjBTYXNqTVF3aDRiMkU4L0lNZzlabXM9IiwiYWNjb3VudFNpZ25hdHVyZSI6InVVc0s4WE1VSldHWjVSQjBsRDY3clIvQWxBZ3NDbHoyQlZ1ZUREQUNqRXV5K3UzNnZrdGxta3UvWDdWdU9PRTFLZWVuMHFldkRTRkFHYUdMSTZsMENnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJtL3pqWlJZVHpvWnc1dm5iVDFndjE3RXZIdHNqdFYxbDdhVENDS2ltWGdwUHpJTHdBNHFuVlRWN2R2d0k4M1U3OUlPeVZXSHoybkYyYmRUbWIwTkNEQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI0MjA0MTAyOTEyMjo2M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXcVArKzBpOVYweUhJM2pZTGd4MmR0RW1ySXpFTUllRzloUFB5RElQV1pyIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJQ0FnQyJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3ODAzNDAwNzksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRWd3In0===',
  TZ: process.env.TZ || 'Africa/Nairobi',
  ANTICALL: parseBoolean(process.env.ANTICALL || 'off'),
  ANTIDELETE: parseBoolean(process.env.ANTIDELETE || 'on'),
  ANTIEDIT: parseBoolean(process.env.ANTIEDIT || 'on'),
  AUTO_READ: parseBoolean(process.env.AUTO_READ || 'off'),
  AUTO_VIEW: parseBoolean(process.env.AUTO_VIEW || 'on'),
  AUTO_LIKE: parseBoolean(process.env.AUTO_LIKE || 'on'),
  DM_PRESENCE: process.env.DM_PRESENCE || '',
  GRP_PRESENCE: process.env.GRP_PRESENCE || '',
  USER_LID: parseLids(process.env.USER_LID || '8976985006099'),
  OWNER_NUMBER: process.env.OWNER_NUMBER || '',
  OWNER_NAME: process.env.OWNER_NAME || 'FLASH-MD Owner',
  BOT_NAME: process.env.BOT_NAME || 'Flash-Md-V3',
  BOT_VERSION: process.env.BOT_VERSION || '3.0.0'
}

export default CONFIG
