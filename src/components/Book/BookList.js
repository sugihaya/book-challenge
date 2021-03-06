import React from "react";
import BookCard from './BookCard';
import '../../assets/css/style.css';

const BookList = (props) => {
  
    return (
        <ul className='common-list'>
            {props.bookList && props.bookList.map(book =>
                <li>
                    <BookCard
                        imgSrc={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail}
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.author}
                        id={book.volumeInfo.industryIdentifiers}
                    />
                </li>
            )}
        </ul>
    );
};

export default BookList;