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
  SESSION: process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0pxaW1LSStNam82dm4xUmplclF3c3VkUVFobGo5SEloT0hkK29kQ2YxWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibFlwUnBMaXRmbTVPSW5OK254cWhBZVJoRWtsL21ialNteGhyYVIyanlXWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrQVIzZHVsSlZaL28zS2V6aC9xUlc1VVp1dHhKV2tLT0hwdHBZblovMTJrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1SGx3YkphSS9rUFRNeWtLMG85TGx6cXEzQ2xnSm9nWHRNWGYvSkNtYkdNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFMSTlQU2IwczJ3Skl2TGxULzJBSWFQRmVKR3h1WWVNOXdoaXpHR1B0RlE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilh5UHVRRkMrT1RxbVl5Wm0zQS9rbUdjM1ZwaDNWVEl2blJ4ZEsvWTNDMlU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0ExejJkV0E0MC9qZDM1TXR5Q0hzSkh0YmdGczZveDRMTDVkMHFHR0dHUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieDFBbHFrZ3czTVNRTTg5b21KbmlwZmcxWmQ1SStyS2kvZXdsNGMxNlZ5Yz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InV4a2hWUXdFelRiVndMa0NoK1B1ZnJZaTVpWFlwN0oyYWlXY1ZmSjQ5U2VYb3ZBSGJUQklXQllicTZTVnhudmY2dC9MUmFvejlDSXFZeUszS2ZpbWlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQsImFkdlNlY3JldEtleSI6IkwxZEVPM0NlbVZGREZBZ0tjMGlUUWdabFV5S1dHczEwY1FXTWpLVFRmSmM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkQxWjI3Q1BEIiwibWUiOnsiaWQiOiIyNDIwNDEwMjkxMjI6NjFAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI4OTc2OTg1MDA2MDk5OjYxQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTW5ZM0tVSEVPaXJ4dEFHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiYW8vNzdTTDFYVEljamVOZ3VESFoyMFNhc2pNUXdoNGIyRTgvSU1nOVptcz0iLCJhY2NvdW50U2lnbmF0dXJlIjoicWRqakxYdk1kR2VkNDl1Q3NyY0JESFRhWnhkcW90RTNVWjhUTmRKbXF4MWVnTHRzTlA4Qk9jbnROeFhNaGlRMlc0ZFZSKzV5NnFiNUF5cDF4ckowQkE9PSIsImRldmljZVNpZ25hdHVyZSI6IjNNWlhqOGFPYVZlVnR4Z3V6aFdhTkRGdkEyVkQvdHRHcWVQNVpCODROcDNDcWRDWlZuWWJUVXFVYmtKbkVXTnBlVUZYU1hxUDJZZUIxTHhkWUY1QmhRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjQyMDQxMDI5MTIyOjYxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldxUCsrMGk5VjB5SEkzallMZ3gyZHRFbXJJekVNSWVHOWhQUHlESVBXWnIifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlDQWdDIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc3OTUzNzM5MCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFZ3YifQ==',
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
