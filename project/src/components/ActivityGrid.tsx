import ActivityCard from './ActivityCard';
import { activityData } from '../data/activities';

interface ActivityGridProps {
  activeTab: 'midterm' | 'finals';
  isDarkMode: boolean;
}

function ActivityGrid({ activeTab, isDarkMode }: ActivityGridProps) {
  const activities = activityData[activeTab];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
      {activities.map((activity) => (
        <ActivityCard
          key={activity.id}
          activity={activity}
          isDarkMode={isDarkMode}
        />
      ))}
    </div>
  );
}

export default ActivityGrid;
