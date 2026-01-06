import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  name: string;
  price: string;
  description?: string;
}

export function ServiceCard({ icon: Icon, name, price, description }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="w-full flex flex-col justify-between bg-white p-6 rounded-xl border border-gray-100 hover:shadow-xl transition-all min-h-[250px]"
    >
      <div>
        <div className="w-12 h-12 bg-gradient-to-br from-sky-100 to-blue-100 rounded-lg flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-sky-600" />
        </div>

        <h3 className="mb-2 text-lg font-semibold">{name}</h3>
        {description && <p className="text-gray-600 text-sm mb-3">{description}</p>}
      </div>

      <div className="flex items-center justify-between mt-4">
        <span className="text-sky-600 font-medium">{price}</span>
        <button className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all text-sm">
          Book Service
        </button>
      </div>
    </motion.div>
  );
}
