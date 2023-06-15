import { Model, DataTypes } from "sequelize";
class Board extends Model {
    static initModel(sequelize) {
        return Board.init({
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
        }, {
            timestamps: true,
            underscored: true,
            paranoid: false,
            modelName: "board",
            tableName: "boards",
            sequelize,
        });
    }
    static associate(db) {
    }
}
export default Board;
