import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  'Home',
  'Brand New AC',
  'Refurbished AC',
  'Maintenance & Services',
  'About Us',
  'Reviews',
  'Contact Us',
];

export function SideDrawer({ isOpen, onClose }: SideDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50"
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-80 bg-white shadow-2xl z-50"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <span className="font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                  COOLTECH SERVICES
                </span>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-sky-50 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-sky-600" />
                </button>
              </div>
              
              <nav className="space-y-2">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={onClose}
                    className="block px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-sky-50 hover:to-blue-50 transition-all hover:pl-6"
                  >
                    {item}
                  </motion.a>
                ))}
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
