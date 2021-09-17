/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sys_user', {
		UserId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Username: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		Password: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		Email: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		Fullname: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		Phone: {
			type: DataTypes.STRING(15),
			allowNull: true
		},
		Token: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
		TokenExpired: {
			type: DataTypes.DATE,
			allowNull: true
		},
		IsActive: {
			type: DataTypes.BOOLEAN,
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
		RoleId: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'sys_user',
		timestamps: false
	});
};
