import React from 'react';
import './App.css';
const books = [
  {
    title: "1984",
    genre: "SIYOSAT, FANTASTIKA",
    rating: 4.7,
    image: "/src/img/top1-img.svg" 
  },
  {
    title: "Rich dad poor dad",
    genre: "SIYOSAT, FANTASTIKA",
    rating: 4.7,
    image: "/src/img/top2-img.svg"
  },
  {
    title: "Код 8",
    genre: "SIYOSAT, FANTASTIKA",
    rating: 4.7,
    image: "/src/img/top3-img.svg"
  },
  {
    title: "Данил КИЗ",
    genre: "SIYOSAT, FANTASTIKA",
    rating: 4.7,
    image: "/src/img/top4-img.svg"
  },
  {
    title: "Бепарволикнинг",
    genre: "SIYOSAT, FANTASTIKA",
    rating: 4.7,
    image: "/src/img/top5-img.svg"
  }
];

const audioBooks = [
  {
    title: "Ego is the enemy",
    genre: "SIYOSAT, FANTASTIKA",
    rating: 4.7,
    image: "/src/img/bottom1-img.svg"
  },
  {
    title: "Rokit",
    genre: "SIYOSAT, FANTASTIKA",
    rating: 4.7,
    image: "/src/img/bottom2-img.svg"
  },
  {
    title: "Satellite",
    genre: "SIYOSAT, FANTASTIKA",
    rating: 4.7,
    image: "/src/img/top5-img.svg"
  },
  {
    title: "City on the edge",
    genre: "SIYOSAT, FANTASTIKA",
    rating: 4.7,
    image: "/src/img/bottom3-img.svg"
  },
  {
    title: "Бепарволикнинг ",
    genre: "SIYOSAT, FANTASTIKA",
    rating: 4.7,
    image: "/src/img/bottom4-img.svg"
  }
];

const BookList = ({ books, title }) => (
  <div>
    <h2 className="section-title">{title}</h2>
    <div className="book-list">
      {books.map((book, index) => (
        <div key={index} className="book-item">
          <img src={book.image} alt={book.title} />
          <h3 className="title">{book.title}</h3>
          <p className="genre">{book.genre}</p>
          <div className="rating">
            <img  src="/src/img/icon3.svg" alt="rating icon" />
            <span className="rating-value">{book.rating}</span>
            <img src="/src/img/icon1.svg" alt="icon1" />
            <img src="/src/img/icon2.svg" alt="icon2" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const App = () => (
  <div>
    <BookList books={books} title="Янги қўшилганлар" />
    <BookList books={audioBooks} title="Аудио китоблар" />
  </div>
);

export default App;
