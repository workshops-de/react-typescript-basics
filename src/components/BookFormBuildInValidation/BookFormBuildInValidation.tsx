import React, { useState } from 'react';

interface BookFormBuildInValidationProps {
    book?: {
        title: string,
        isbn: string
    },
    title: string,
    handleSubmit?: Function;
}

export const BookFormBuildInValidation: React.FC<BookFormBuildInValidationProps> = ({ handleSubmit, title: header, book = { title: '', isbn: '' } }) => {

    const [title, setTitle] = useState<string>(book.title);
    const [isbn, setIsbn] = useState<string | undefined>(book.isbn);

    function handleTitleChange({ target: { value } }: React.ChangeEvent<HTMLInputElement>) {
        setTitle(value);
    }

    function handleIsbnChange({ target: { value } }: React.ChangeEvent<HTMLInputElement>) {
        setIsbn(value);
    }

    function sendForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log({
            title,
            isbn
        });
        if (handleSubmit) {
            handleSubmit({
                title,
                isbn
            })
        }
    }

    return (
        <form onSubmit={sendForm}>
            <h1>{header}</h1>
            <label htmlFor="bookTitle">Title: </label>
            <input id="bookTitle"
                name="bookTitle"
                type="text"
                required
                value={title}
                onChange={handleTitleChange} />
            <br />
            <label htmlFor="bookIsbn">ISBN: </label>
            <input id="bookIsbn"
                name="bookIsbn"
                type="text"
                required
                value={isbn}
                onChange={handleIsbnChange} />
            <br />
            <button>Send</button>
        </form>);

}

export default BookFormBuildInValidation;