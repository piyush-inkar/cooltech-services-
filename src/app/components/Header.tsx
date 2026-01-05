import { Menu } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-blue-600 rounded-lg flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              className="w-6 h-6"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
            COOLTECH SERVICES
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="hidden sm:block bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-2.5 rounded-lg hover:shadow-lg transition-all hover:scale-105">
            Book Service
          </button>
          <button
            onClick={onMenuClick}
            className="p-2 hover:bg-sky-50 rounded-lg transition-colors"
            aria-label="Menu"
          >
            <Menu className="w-6 h-6 text-sky-600" />
          </button>
        </div>
      </div>
    </header>
  );
}
