const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Book = sequelize.define('Book', {
  title: { type: DataTypes.STRING, allowNull: false },
  author: { type: DataTypes.STRING, allowNull: false },
  status: { type: DataTypes.INTEGER, allowNull: false }, // 0: To Read, 1: Reading, 2: Read
  rating: { type: DataTypes.INTEGER, validate: { min: 1, max: 5 }},
  genre: { type: DataTypes.STRING }
});

module.exports = Book;
