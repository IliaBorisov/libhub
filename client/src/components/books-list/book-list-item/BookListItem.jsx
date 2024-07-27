import { Link } from 'react-router-dom';

import './BookListItem.css'

const BOOK_URL = '/none';

export default function BookListItem({
    _id,
    title,
    author,
    imageUrl,
}) {
    return (
        <section className="book-item">
            <Link to={BOOK_URL}><img src={imageUrl} alt="no image" /></Link>
            <div>
                <Link to={BOOK_URL} >{title}</Link>
                <p>by {author}</p>
            </div>
        </section>
    );
}