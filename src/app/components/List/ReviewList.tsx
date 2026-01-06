import { useEffect, useState } from "react";
import { ReviewCard } from "../ReviewCard";

type Review = {
    id: number;
    name: string;
    review: string;
    rating: number;
    image: string;
};

export default function ReviewsList() {
    const [reviews, setReviews] = useState<Review[]>([]);

    useEffect(() => {
        async function fetchReviews() {
            const res = await fetch("http://127.0.0.1:8000/api/reviews/");
            const data = await res.json();
            setReviews(data.data);
        }

        fetchReviews();
    }, []);

    return (
        <>
            {reviews.map((r) => (
                <ReviewCard
                    key={r.id}
                    name={r.name}
                    image={`http://127.0.0.1:8000${r.image}`}
                    rating={r.rating}
                    review={r.review}
                />
            ))}
        </>
    );
}
