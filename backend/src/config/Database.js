import { Sequelize } from "sequelize";

const db = new Sequelize("jurnalweb", "postgres", "09071982", {
  dialect: "postgres",
  host: "localhost",
  port: 9999,
});

export default db;
