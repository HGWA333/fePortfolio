import { Model, DataTypes, Sequelize } from "sequelize";

interface IBoard {
  id?: number;
  username?: string;
  title: string;
  content: string;
  userId?: number;
}

class Board extends Model implements IBoard {
  public id!: number;
  public username?: string;
  public title!: string;
  public content!: string;
  public userId?: number;

  public static initModel(sequelize: Sequelize) {
    return Board.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
        },
        username: {
          type: DataTypes.STRING(128),
          allowNull: true,
        },
        title: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        userId: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: true,
        },
      },
      {
        timestamps: true,
        underscored: true,
        paranoid: false,
        modelName: "board",
        tableName: "boards",
        sequelize,
      }
    );
  }

  public static associate(db: any) {
    // Add associations here
  }
}

export default Board;
