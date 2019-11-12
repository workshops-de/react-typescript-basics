import React from 'react';

interface BookListItemProps {
    title: string
};

export const BookListItem: React.FC<BookListItemProps> = ({ title }) => {
    return (
        <li>{title}</li>
    )
}

export default BookListItem;