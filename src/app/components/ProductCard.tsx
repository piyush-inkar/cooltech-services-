import { motion } from 'motion/react';
import { Star } from 'lucide-react';

interface ProductCardProps {
  image: string;
  brand: string;
  capacity: string;
  rating: number;
  price: number;
  isRefurbished?: boolean;
}

export function ProductCard({ image, brand, capacity, rating, price, isRefurbished }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(14, 165, 233, 0.2)' }}
      className="bg-white rounded-xl overflow-hidden border border-gray-100 transition-all"
    >
      <div className="relative bg-gradient-to-br from-sky-50 to-blue-50 p-6 h-48 flex items-center justify-center">
        <img src={image} alt={brand} className="h-full w-full object-contain" />
        {isRefurbished && (
          <div className="absolute top-3 right-3 space-y-1">
            <span className="block bg-green-500 text-white text-xs px-2 py-1 rounded">
              Quality Checked
            </span>
            <span className="block bg-blue-500 text-white text-xs px-2 py-1 rounded">
              Certified Refurbished
            </span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
              />
            ))}
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-1">{capacity}</p>
        <p className="mb-3">{brand}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-sky-600">₹{price.toLocaleString()}</span>
          <button className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all text-sm">
            {isRefurbished ? 'Buy Refurbished' : 'Buy Now'}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
