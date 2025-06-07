const {
  mysqlTable,
  serial,
  varchar,
  timestamp,
} = require("drizzle-orm/mysql-core");

const users = mysqlTable("users", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 255 }).notNull(),
  created_at: timestamp("created_at").defaultNow().notNull(),
});


module.exports = { users };
