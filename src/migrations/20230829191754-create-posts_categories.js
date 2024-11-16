'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts_categories', { // primeiro parametro: nome da tabela - segundo parametro: objeto com as colunas
      postId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: 'post_id',
        references: {
          model: 'blog_posts',
          id: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: 'category_id',
        references: {
          model: 'categories',
          id: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('posts_categories');
  }
};
