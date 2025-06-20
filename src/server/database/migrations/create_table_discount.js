const { db } = require("../db");
const createTableDiscount = async () => {
  return await db.execute(`CREATE TABLE IF NOT EXISTS discount (
      id INT AUTO_INCREMENT PRIMARY KEY,
      discount_name VARCHAR(255) NOT NULL,
      discount_value INTEGER(2) NOT NULL,
      start_date DATE NOT NULL,
      end_date DATE NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
    )
      `);
};
module.exports = createTableDiscount;
