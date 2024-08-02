import './RatingBar.css';

export default function RatingBar({
    rating
}) {
    const ratingRatio = (rating / 5) * 100;

    return (
        <div className="rating-container">
            <div className="rating-bar" style={{ width: `${ratingRatio}%` }}></div>
            <div className='line-container'>
                <div className="line" style={{ left: "20%" }}></div>
                <div className="line" style={{ left: "40%" }}></div>
                <div className="line" style={{ left: "60%" }}></div>
                <div className="line" style={{ left: "80%" }}></div>
            </div>
        </div>
    );
}