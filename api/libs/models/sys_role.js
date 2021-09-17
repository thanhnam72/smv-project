/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sys_role', {
		RoleId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		RoleName: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		CreatedDate: {
			type: DataTypes.DATE,
			allowNull: true
		},
		UpdatedDate: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Permission: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'sys_role',
		timestamps: false
	});
};
