const db = require("../../lib/db");
const escape = require("sql-template-strings");

module.exports = async (req, res) => {
  let page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 9;
  if (page < 1) page = 1;
  const products = await db.query(escape`
      SELECT *
      FROM products
      ORDER BY id
      LIMIT ${(page - 1) * limit}, ${limit}
    `);
  const count = await db.query(escape`
      SELECT COUNT(*)
      AS productsCount
      FROM products
    `);
  const { productsCount } = count[0];
  const pageCount = Math.ceil(productsCount / limit);
  res.status(200).json({ products, pageCount, page });
};
