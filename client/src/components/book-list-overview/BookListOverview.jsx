import { useEffect, useState } from "react";

import './BookListOverview.css';

import * as booksAPI from '../../api/books-api';
import BookListCard from "./book-list-card/BookLIstCard";

export default function BookListOverview() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        booksAPI.getAll()
            .then(res => setBooks(res));
    }, []);


    return (
        <section id="catalog-page-overview">

            {books.length > 0
                ? books.map(book => <BookListCard key={book._id} {...book} />)
                : <h3>empty</h3>
            }

        </section>
    );
}