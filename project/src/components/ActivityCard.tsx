import { Image } from 'lucide-react';

interface Activity {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

interface ActivityCardProps {
  activity: Activity;
  isDarkMode: boolean;
}

function ActivityCard({ activity, isDarkMode }: ActivityCardProps) {
  return (
    <div className={`group relative overflow-hidden rounded-lg transition-all duration-500 animate-fade-in ${
      isDarkMode
        ? 'hover:shadow-2xl hover:shadow-red-600/20'
        : 'hover:shadow-2xl hover:shadow-red-600/10'
    }`}>
      <div className={`aspect-video flex items-center justify-center border transition-colors duration-300 ${
        isDarkMode
          ? 'bg-gradient-to-br from-gray-900 to-black border-gray-800 group-hover:border-red-600/50'
          : 'bg-gradient-to-br from-gray-100 to-gray-50 border-gray-200 group-hover:border-red-600/30'
      }`}>
        {activity.imageUrl ? (
          <img
            src={activity.imageUrl}
            alt={activity.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <Image size={48} className={`transition-colors duration-300 ${
            isDarkMode ? 'text-gray-700 group-hover:text-red-600/50' : 'text-gray-400 group-hover:text-red-600/40'
          }`} />
        )}
      </div>

      <div className={`p-6 border-b border-l border-r transition-colors duration-300 ${
        isDarkMode
          ? 'bg-black border-gray-800 group-hover:border-red-600/30'
          : 'bg-white border-gray-200 group-hover:border-red-600/20'
      }`}>
        <div className="h-1 w-12 bg-red-600 mb-4 group-hover:w-full transition-all duration-300"></div>

        <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-red-500 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          {activity.title}
        </h3>
        <p className={`leading-relaxed transition-colors duration-300 ${
          isDarkMode ? 'text-gray-400 group-hover:text-gray-300' : 'text-gray-600 group-hover:text-gray-700'
        }`}>
          {activity.description}
        </p>
      </div>
    </div>
  );
}

export default ActivityCard;
