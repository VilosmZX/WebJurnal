import { Sequelize } from "sequelize";

const db = new Sequelize("jurnalweb", "postgres", "09071982", {
  dialect: "postgres",
  host: "localhost",
  port: 5432,
});

export default db;
