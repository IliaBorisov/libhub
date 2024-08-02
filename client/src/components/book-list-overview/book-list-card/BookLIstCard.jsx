import styles from './BookListCard.module.css'

export default function BookListCard({
    title,
    author,
    imageUrl,
}) {

    return (
        <section className={styles['book-card']}>
            <img src={imageUrl} alt="" />
            <p className={styles['title']}>{title}</p>
            <p className={styles['author']}>{author}</p>
        </section>
    );
}