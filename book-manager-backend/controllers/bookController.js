const Book = require('../models/book');

// Create a new book
const createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create book' });
  }
};

// Get all books
const getBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve books' });
  }
};

// Get book by ID
const getBookById = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (book) res.json(book);
    else res.status(404).json({ error: 'Book not found' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve book' });
  }
};

// Update a book
const updateBook = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (book) {
      await book.update(req.body);
      res.json(book);
    } else res.status(404).json({ error: 'Book not found' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update book' });
  }
};

// Delete a book
const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (book) {
      await book.destroy();
      res.json({ message: 'Book deleted' });
    } else res.status(404).json({ error: 'Book not found' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete book' });
  }
};

module.exports = { createBook, getBooks, getBookById, updateBook, deleteBook };
