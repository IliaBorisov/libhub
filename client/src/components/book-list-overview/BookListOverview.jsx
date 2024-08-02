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

    const topFive = books
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 5);


    return (
        <section id="catalog-page-overview">
            <h1>Top Five Books</h1>
            <div className="books">
                {topFive.length > 0
                    ? topFive.map(book => <BookListCard key={book._id} {...book} />)
                    : <h3>empty</h3>
                }
            </div>


        </section>
    );
}