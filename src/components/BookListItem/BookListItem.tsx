import React from 'react';

interface BookListItemProps {
    title: string,
    isbn: string
};

export const BookListItem: React.FC<BookListItemProps> = ({ title, isbn }) => {
    return (
        <li>{title}: {isbn}</li>
    )
}

export default BookListItem;