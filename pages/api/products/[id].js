const db = require("../../../lib/db.js");
const escape = require("sql-template-strings");

module.exports = async (req, res) => {
  try {
    const [product] = await db.query(escape`
    SELECT *
    FROM products
    WHERE id = ${req.query.id}
  `);
    res.status(200).json({ product });
  } catch (e) {
    res.status(400).json({ error: e });
  }
};
