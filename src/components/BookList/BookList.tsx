import React, { Fragment, useState, useEffect } from 'react';
import BookListItem from '../BookListItem/BookListItem';

interface Book {
    title: string,
    isbn: string
};

export const BookList: React.FC = () => {

    const [books, setBooks] = useState<Array<Book>>([]);

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        const response = await fetch('http://localhost:8080/book')
        const result = await response.json();
        setBooks(result);
    }

    return (
        <Fragment>
            <h1>List of Books</h1>
            <ul>
                {books.map((book) => {
                    return <BookListItem title={book.title} isbn={book.isbn}></BookListItem>
                })}
            </ul>
        </Fragment>
    )
}

export default BookList;