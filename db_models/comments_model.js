
let uuidv4 = require('uuid/v4')

module.exports = (sequelize, DataType) => {
  const comments_model = sequelize.define('Comments', {
    id: {
      type: DataType.UUID,
      defaultValue: uuidv4(),
      primaryKey: true
    },
    name: {
      type: DataType.STRING,
      allowNull: true
    },
    email: {
      type: DataType.STRING,
      allowNull: false
    },
    comment: {
      type: DataType.STRING(480),
      allowNull: false
    },
    pid: {
      type: DataType.INTEGER,
      allowNull: false
    }
  }, {
    freezeTableName: true,
    tableName: "comment",
    timestamps: true
  })
    return comments_model
};
