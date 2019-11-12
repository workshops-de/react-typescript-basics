import React, { Fragment } from 'react';
import BookListItem from '../BookListItem/BookListItem';

interface Book {
    title: string
};

export const BookList: React.FC = () => {

    const books: Array<Book> = [
        { title: 'A first Book' },
        { title: 'Another awesome Book' },
        { title: 'Learn React - the full book' }
    ]

    return (
        <Fragment>
            <h1>List of Books</h1>
            <ul>
                {books.map((book) => {
                    return <BookListItem title={book.title}></BookListItem>
                })}
            </ul>
        </Fragment>
    )
}

export default BookList;