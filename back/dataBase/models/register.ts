import { Model, DataTypes, Sequelize } from "sequelize";

interface IRegister {
  id?: number;
  username: string;
  email: string;
  password: string;
  gender?: "male" | "female" | "other";
  birthDate?: string;
  phoneNumber?: string;
  address?: string;
}

class Register extends Model implements IRegister {
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;
  public gender!: "male" | "female" | "other";
  public birthDate!: string;
  public phoneNumber!: string;
  public address!: string;

  public static initModel(sequelize: Sequelize) {
    return Register.init(
      {
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
      },
      {
        timestamps: true,
        underscored: true,
        paranoid: false,
        modelName: "Register",
        tableName: "register",
        sequelize,
      }
    );
  }

  public static associate(db: any) {}
}

export default Register;
