import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

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



    return (
        <section id={styles['book-details']}>
            <div className={styles['row-container']}>
                <img className={styles['book-cover']} src={book.imageUrl}></img>
                <div className={styles['info-container']}>
                    <h2 className={styles['title']}>{book.title}</h2>
                    <div className={styles['author-container']}>
                        <h4 className={styles['author']}>
                            <em>by </em>
                            <Link>{book.author}</Link>
                        </h4>
                    </div>

                    <h6 className={styles['author']}>Series: {book.series}</h6>
                    <p className={styles['author']}>Genres: {
                        book.genres != undefined
                            ? book.genres.join(', ')
                            : ''
                    }</p>
                    <p className={styles['author']}>Language: {book.language}</p>
                    <p className={styles['author']}>Pages: {book.pages}</p>
                </div>
            </div>

            <div className={styles['row-container']}>
                <p className={styles['description']}>{book.description}</p>
            </div>

            <div className={`${styles['row-container']} ${styles['buttons']}`}>
                <button className={`${styles['action-buttons']} ${styles['button-edit']}`}>Edit</button>
                <button className={`${styles['action-buttons']} ${styles['button-delete']}`}>Delete</button>
            </div>

        </section >
    );
}