// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const BookList = () => {
  const [books, setBooks] = useState([
    {
      title: "The Great Gatsby",
      description: "A novel by F. Scott Fitzgerald set in the Roaring Twenties, depicting the excesses and illusions of the American Dream.",
      price: 12.99,
      image: "great-gatsby.jpg",
    },
    {
      title: "To Kill a Mockingbird",
      description: "A classic novel by Harper Lee that explores racial injustice and moral growth through the eyes of a young girl in the American South.",
      price: 10.99,
      image: "to-kill-a-mockingbird.jpg",
    },
    {
      title: "The Hobbit",
      description: "A fantasy novel by J.R.R. Tolkien, following the adventures of Bilbo Baggins as he embarks on a quest with a group of dwarves.",
      price: 14.99,
      image: "the-hobbit.jpg",
    }
  ]);

  // Function to sort the books by price
  const sortBooksByPrice = () => {
    const sortedBooks = [...books].sort((a, b) => a.price - b.price);
    setBooks(sortedBooks);
  };

  return (
    <div>
      <button onClick={sortBooksByPrice}>Sort by Price</button>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.description}</p>
            <p>Price: ${book.price.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
