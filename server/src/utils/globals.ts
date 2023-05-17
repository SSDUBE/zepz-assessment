require('dotenv').config();

export const ENV = {
  PORT: process.env.PORT || 14000,
  DB_STRING: process.env.DB_STRING || '',
};