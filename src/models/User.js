
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', { // Modelo 'User' -> primeiro parametro: configurações do modelo
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      displayName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // email precisa ser unico
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
      }
    },
    { // segundo parametro: configurações da tabela
      timestamps: false,
      tableName: 'users', // nome da tabela no banco de dados
      underscored: true,  // define o padrão snake_case para os nomes das colunas
    });
    
    // associação entre os modelos
    User.associate = (models) => {
      User.hasMany(models.BlogPost, { // primeiro parametro: modelo que está sendo associado
        foreignKey: 'userId', as: 'blogPosts' // segundo parametro: configurações da associação e seu novo apelido para consultas
      })
    }
  
  return User;
};