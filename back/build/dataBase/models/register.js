import { Model, DataTypes } from "sequelize";
class Register extends Model {
    static initModel(sequelize) {
        return Register.init({
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
            },
            username: {
                type: DataTypes.STRING(128),
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING(128),
                allowNull: false,
                unique: true,
            },
            password: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            gender: {
                type: DataTypes.ENUM("male", "female", "other"),
                allowNull: true,
            },
            birthDate: {
                type: DataTypes.DATEONLY,
                allowNull: true,
            },
            phoneNumber: {
                type: DataTypes.STRING(20),
                allowNull: true,
            },
            address: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
        }, {
            timestamps: true,
            underscored: true,
            paranoid: false,
            modelName: "Register",
            tableName: "register",
            sequelize,
        });
    }
    static associate(db) { }
}
export default Register;
