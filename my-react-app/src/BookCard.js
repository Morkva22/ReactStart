import React from 'react';
import './BookCard.css';

const BookCard = ({ title, author, year }) => {
    return (
        <div className="book-card">
            <h2>{title}</h2>
            <p>Автор: {author}</p>
            <p>Рік: {year}</p>
        </div>
    );
};

export default BookCard;