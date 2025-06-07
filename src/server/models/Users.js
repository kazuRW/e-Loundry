const { db } = require("../database/db");
const { users } = require("../database/schema/users");

const getAllUsers = async () => {
  return await db.select().from(users);
};

module.exports = { getAllUsers };
