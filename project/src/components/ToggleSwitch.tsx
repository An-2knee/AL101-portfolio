interface ToggleSwitchProps {
  activeTab: 'midterm' | 'finals';
  setActiveTab: (tab: 'midterm' | 'finals') => void;
  isDarkMode: boolean;
}

function ToggleSwitch({ activeTab, setActiveTab, isDarkMode }: ToggleSwitchProps) {
  return (
    <div className="flex justify-center mb-20">
      <div className={`inline-flex border rounded-lg p-1 backdrop-blur-sm transition-colors duration-500 ${
        isDarkMode
          ? 'bg-gray-900 border-gray-800'
          : 'bg-gray-100 border-gray-300'
      }`}>
        <button
          onClick={() => setActiveTab('midterm')}
          className={`px-8 py-3 rounded-md font-semibold transition-all duration-300 relative group ${
            activeTab === 'midterm'
              ? isDarkMode
                ? 'bg-red-600 text-white shadow-lg shadow-red-600/50'
                : 'bg-red-600 text-white shadow-lg shadow-red-600/30'
              : isDarkMode
              ? 'text-gray-400 hover:text-gray-200'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          {activeTab !== 'midterm' && (
            <div className={`absolute inset-0 rounded-md transition-colors duration-300 ${
              isDarkMode
                ? 'bg-red-600/0 group-hover:bg-red-600/10'
                : 'bg-red-600/0 group-hover:bg-red-600/5'
            }`}></div>
          )}
          <span className="relative">Midterm</span>
        </button>
        <button
          onClick={() => setActiveTab('finals')}
          className={`px-8 py-3 rounded-md font-semibold transition-all duration-300 relative group ${
            activeTab === 'finals'
              ? isDarkMode
                ? 'bg-red-600 text-white shadow-lg shadow-red-600/50'
                : 'bg-red-600 text-white shadow-lg shadow-red-600/30'
              : isDarkMode
              ? 'text-gray-400 hover:text-gray-200'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          {activeTab !== 'finals' && (
            <div className={`absolute inset-0 rounded-md transition-colors duration-300 ${
              isDarkMode
                ? 'bg-red-600/0 group-hover:bg-red-600/10'
                : 'bg-red-600/0 group-hover:bg-red-600/5'
            }`}></div>
          )}
          <span className="relative">Finals</span>
        </button>
      </div>
    </div>
  );
}

export default ToggleSwitch;
