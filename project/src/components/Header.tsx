import { Moon, Sun } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  isScrolled: boolean;
}

function Header({ isDarkMode, setIsDarkMode, isScrolled }: HeaderProps) {
  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled
        ? isDarkMode
          ? 'backdrop-blur-md bg-black/80 border-b border-gray-900'
          : 'backdrop-blur-md bg-white/80 border-b border-gray-200'
        : isDarkMode ? 'bg-transparent' : 'bg-transparent'
    }`}>
      <div className={`max-w-7xl mx-auto px-4 py-6 flex justify-between items-center transition-colors duration-500 ${
        isDarkMode ? 'text-white' : 'text-gray-900'
      }`}>
        <div className="text-xl font-bold">
          JAA
        </div>

        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`p-2 rounded-lg transition-all duration-300 group ${
            isDarkMode ? 'hover:bg-red-600/20' : 'hover:bg-red-100'
          }`}
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? (
            <Sun size={20} className="text-gray-400 group-hover:text-red-400 transition-colors duration-300" />
          ) : (
            <Moon size={20} className="text-gray-600 group-hover:text-red-600 transition-colors duration-300" />
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
