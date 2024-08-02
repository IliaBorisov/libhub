import { useEffect, useState } from "react";

import styles from './BookList.module.css';

import * as booksAPI from '../../api/books-api';
import BookListItem from "./book-list-item/BookListItem";

export default function BooksList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        booksAPI.getAll()
            .then(res => setBooks(res));
    }, []);


    return (
        <section id={styles["catalog-page"]}>

            {books.length > 0
                ? books.map(book => <BookListItem key={book._id} {...book} />)
                : <h3>empty</h3>
            }

        </section>
    );
}