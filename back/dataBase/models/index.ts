import { Sequelize } from "sequelize";
import Config from "../config/config.json";
import Register from "./register";
import Users from "./users";
import Board from "./board";

const env = process.env.NODE_ENV || "development";
const config = Config[env];
const db: any = { Register, Users, Board };

let sequelize: any = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
db.Users = Users.initModel(sequelize);
db.Board = Board.initModel(sequelize);
db.Register = Register.initModel(sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
