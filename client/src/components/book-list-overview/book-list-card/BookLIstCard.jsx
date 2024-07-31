import './BookListCard.module.css'

export default function BookListCard({
    title,
    author,
    imageUrl,
}) {

    return (
        <section className='book-card'>
            <img src={imageUrl} alt="" />
            <p>{title}</p>
            <p className='auto'>{author}</p>
        </section>
    );
}