import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import booksAPI from "../../api/books-api";

import styles from './BookDetails.module.css';


export default function BookDetails() {
    const [book, setBook] = useState({});
    const { bookId } = useParams();

    useEffect(() => {
        (async () => {
            const res = await booksAPI.getOneBook(bookId);
            setBook(res);
        })();
    }, []);

    console.log(book);

    return (
        <section id={styles['book-details']}>
            <img className={styles['book-cover']} src={book.imageUrl}></img>
            <div className={styles['text-container']}>
                <p className={styles['title']}>Title: {book.title}</p>
                <p className={styles['author']}>Atuhor: {book.author}</p>
                <p className={styles['author']}>Series: {book.series}</p>
            </div>
        </section>
    );
}