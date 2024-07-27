import { useEffect, useState } from "react";

import * as booksAPI from '../../api/books-api';
import BookListItem from "./book-list-item/BookListItem";

export default function BooksList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        booksAPI.getAll()
            .then(res => setBooks(res));
    }, []);


    return (
        <section id="catalog-page">

            {books.length > 0
                ? books.map(book => <BookListItem key={book._id} {...book} />)
                : <h3 className="no-articles">No games yet</h3>
            }

        </section>
    );
}