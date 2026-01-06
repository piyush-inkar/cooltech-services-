import { Star } from "lucide-react";

interface ReviewCardProps {
  name: string;
  image: string;
  rating: number;
  review: string;
}

export function ReviewCard({ name, image, rating, review }: ReviewCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 mx-2">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border-2 border-sky-200"
        />

        <div>
          <p className="mb-1">{name}</p>

          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed">{review}</p>
    </div>
  );
}
