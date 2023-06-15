import { Model, DataTypes, Sequelize } from "sequelize";

interface IUsers {
  id?: number;
  password: string;
}

class Users extends Model implements IUsers {
  public id!: number;
  public password!: string;
  public static initModel(sequelize: Sequelize) {
    return Users.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
        },
        password: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
      },
      {
        timestamps: true,
        underscored: true,
        paranoid: false,
        modelName: "Users",
        tableName: "users",
        sequelize,
      }
    );
  }
  public static associate(db: any) {}
}

export default Users;
