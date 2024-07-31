import { Link } from 'react-router-dom';

import './BookListItem.css'

const BOOK_URL = '/book';
const AUTHOR_URL = '/author';

export default function BookListItem({
    _id,
    title,
    author,
    imageUrl,
    rating,
}) {
    return (
        <section className="book-item">
            <Link to={`${BOOK_URL}/${_id}`}><img src={imageUrl} alt="no image" /></Link>
            <div className='book-item-details'>
                <Link to={`${BOOK_URL}/${_id}`} >{title}</Link>
                <p>by <Link to={`${AUTHOR_URL}`}>{author}</Link></p>
                <p>{rating}</p>
            </div>
        </section>
    );
}