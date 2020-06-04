const { Client } = require("pg");
const client = new Client({
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});
client.connect();

exports.query = async (query) => {
  try {
    const results = await client.query(query);
    await client.end();
    return results;
  } catch (error) {
    return { error };
  }
};
