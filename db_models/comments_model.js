
module.exports = (sequelize, DataType) => {
  id: {
    type: DataType.UUIDV4,
    defaultValue: sequelize.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataType.String,
    allowNull: true
  },
  email: {
    type: DataType.String,
    allowNull: false
  },
  comment: {
    type: DataType.String(480),
    allowNull: false
  },
  pid: {
    type: Integer,
    allowNull: false
  }, {
    freezeTableName: true,
    tableName: "comment",
    timestamps: true;
  });
};
