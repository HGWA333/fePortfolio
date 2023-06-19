import { Model, DataTypes } from "sequelize";
class Users extends Model {
    static initModel(sequelize) {
        return Users.init({
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
            },
            password: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
        }, {
            timestamps: true,
            underscored: true,
            paranoid: false,
            modelName: "Users",
            tableName: "users",
            sequelize,
        });
    }
    static associate(db) { }
}
export default Users;
