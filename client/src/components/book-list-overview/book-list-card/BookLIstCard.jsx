import { Link } from 'react-router-dom';

import styles from './BookListCard.module.css'

export default function BookListCard({
    _id,
    title,
    author,
    imageUrl,
}) {

    return (
        <Link className={styles['link']} to={`/all-books/${_id}`}>
            <section className={styles['book-card']}>
                <img className={styles['image']} src={imageUrl} alt="" />
                <p className={styles['title']}>{title}</p>
                <p className={styles['author']}>{author}</p>
            </section>
        </Link>
    );
}