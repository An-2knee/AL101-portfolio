export interface Activity {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export const activityData: {
  midterm: Activity[];
  finals: Activity[];
} = {
  midterm: [
    {
      id: 1,
      title: 'Syllabus',
      description: 'Algorithms and Complexity course syllabus',
      imageUrl: '',
    },
    {
      id: 2,
      title: 'Activity 1',
      description: 'Add your midterm activity description here',
      imageUrl: '',
    },
    {
      id: 3,
      title: 'Activity 2',
      description: 'Add your midterm activity description here',
      imageUrl: '',
    },
    {
      id: 4,
      title: 'Activity 3',
      description: 'Add your midterm activity description here',
      imageUrl: '',
    },
    {
      id: 5,
      title: 'Activity 4',
      description: 'Add your midterm activity description here',
      imageUrl: '',
    },
    {
      id: 6,
      title: 'Activity 5',
      description: 'Add your midterm activity description here',
      imageUrl: '',
    },
  ],
  finals: [
    {
      id: 1,
      title: 'Activity 1',
      description: 'Add your finals activity description here',
      imageUrl: '',
    },
    {
      id: 2,
      title: 'Activity 2',
      description: 'Add your finals activity description here',
      imageUrl: '',
    },
    {
      id: 3,
      title: 'Activity 3',
      description: 'Add your finals activity description here',
      imageUrl: '',
    },
    {
      id: 4,
      title: 'Activity 4',
      description: 'Add your finals activity description here',
      imageUrl: '',
    },
    {
      id: 5,
      title: 'Activity 5',
      description: 'Add your finals activity description here',
      imageUrl: '',
    },
    {
      id: 6,
      title: 'Activity 6',
      description: 'Add your finals activity description here',
      imageUrl: '',
    },
  ],
};
