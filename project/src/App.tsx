import { useState, useEffect } from 'react';
import Header from './components/Header';
import ToggleSwitch from './components/ToggleSwitch';
import ActivityGrid from './components/ActivityGrid';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState<'midterm' | 'finals'>('midterm');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`transition-colors duration-500 min-h-screen ${
      isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-900'
    }`}>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} isScrolled={isScrolled} />

      <main>
        <section className="min-h-screen flex items-center justify-center px-4 pt-20 pb-20">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <div className="mb-8">
              <div className={`inline-block px-4 py-2 rounded-full mb-6 border transition-colors duration-500 ${
                isDarkMode
                  ? 'bg-red-900/30 border-red-700/50'
                  : 'bg-red-100/50 border-red-300/50'
              }`}>
                <p className={`text-sm font-medium transition-colors duration-500 ${
                  isDarkMode ? 'text-red-400' : 'text-red-600'
                }`}>AL101 Portfolio</p>
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold italic mb-6 tracking-tight">
              Jan Anthony Alejo
            </h1>

            <p className={`text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed transition-colors duration-500 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              23-1754
            </p>

            <div className="flex justify-center gap-4">
              <div className={`w-1 h-16 bg-gradient-to-b transition-all duration-500 ${
                isDarkMode
                  ? 'from-red-600 to-transparent'
                  : 'from-red-500 to-transparent'
              }`}></div>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Activities</h2>
            <p className={`text-lg transition-colors duration-500 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>Algorithms and complexity midterm and finals tasks</p>
          </div>

          <ToggleSwitch
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            isDarkMode={isDarkMode}
          />

          <ActivityGrid activeTab={activeTab} isDarkMode={isDarkMode} />
        </section>
      </main>

      <footer className={`py-12 px-4 border-t transition-colors duration-500 ${
        isDarkMode ? 'border-gray-900' : 'border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center gap-6 mb-4">
            <a href="https://github.com/An2knee" target="_blank" rel="noopener noreferrer" className={`transition-colors duration-500 ${
              isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
            }`}>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/jan.an2knee" target="_blank" rel="noopener noreferrer" className={`transition-colors duration-500 ${
              isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
            }`}>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/jan-anthony-alejo-2a117936a/" target="_blank" rel="noopener noreferrer" className={`transition-colors duration-500 ${
              isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
            }`}>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
          <p className={`text-sm transition-colors duration-500 ${
            isDarkMode ? 'text-gray-500' : 'text-gray-500'
          }`}>&copy; 2026 An2knee. Ayaw na magcode.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
