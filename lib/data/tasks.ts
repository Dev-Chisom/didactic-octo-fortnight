export interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
  projectId: string;
  priority?: 'low' | 'medium' | 'high';
  dueDate?: string | null;
  estimate?: string | null;
  comments: number;
  assignee?: {
    id: string;
    name: string;
    initials: string;
    image?: string;
  } | null;
  createdAt: string;
}

// Mock data for tasks
const tasks: Task[] = [
  {
    id: 'task-1',
    title: 'Design homepage mockup',
    description: 'Create wireframes for the new homepage',
    status: 'todo',
    projectId: 'project-1',
    priority: 'high',
    dueDate: '2023-06-01',
    estimate: '3d',
    comments: 2,
    assignee: {
      id: 'user-2',
      name: 'Alice Smith',
      initials: 'AS',
      image: '',
    },
    createdAt: '2023-05-20T10:30:00Z',
  },
  {
    id: 'task-2',
    title: 'Implement authentication',
    description: 'Set up user authentication flow',
    status: 'inProgress',
    projectId: 'project-1',
    priority: 'high',
    dueDate: '2023-06-02',
    estimate: '5d',
    comments: 4,
    assignee: {
      id: 'user-1',
      name: 'John Doe',
      initials: 'JD',
      image: 'https://github.com/shadcn.png',
    },
    createdAt: '2023-05-19T09:15:00Z',
  },
  {
    id: 'task-3',
    title: 'Create API endpoints',
    description: 'Design and implement RESTful API endpoints',
    status: 'review',
    projectId: 'project-1',
    priority: 'medium',
    dueDate: '2023-05-30',
    estimate: '4d',
    comments: 1,
    assignee: {
      id: 'user-3',
      name: 'Bob Johnson',
      initials: 'BJ',
      image: '',
    },
    createdAt: '2023-05-18T14:20:00Z',
  },
  {
    id: 'task-4',
    title: 'Write unit tests',
    description: 'Add test coverage for core functionality',
    status: 'done',
    projectId: 'project-1',
    priority: 'low',
    dueDate: '2023-05-28',
    estimate: '2d',
    comments: 0,
    assignee: {
      id: 'user-1',
      name: 'John Doe',
      initials: 'JD',
      image: 'https://github.com/shadcn.png',
    },
    createdAt: '2023-05-17T11:45:00Z',
  },
  {
    id: 'task-5',
    title: 'Update documentation',
    description: 'Update readme and API documentation',
    status: 'todo',
    projectId: 'project-1',
    priority: 'low',
    dueDate: '2023-06-05',
    estimate: '1d',
    comments: 0,
    assignee: {
      id: 'user-2',
      name: 'Alice Smith',
      initials: 'AS',
      image: '',
    },
    createdAt: '2023-05-21T08:30:00Z',
  },
  {
    id: 'task-6',
    title: 'Design user profile screen',
    description: 'Create mockups for user profile',
    status: 'inProgress',
    projectId: 'project-2',
    priority: 'medium',
    dueDate: '2023-06-03',
    estimate: '2d',
    comments: 3,
    assignee: {
      id: 'user-4',
      name: 'Emma Davis',
      initials: 'ED',
      image: '',
    },
    createdAt: '2023-05-20T13:15:00Z',
  },
  {
    id: 'task-7',
    title: 'Implement navigation',
    description: 'Add navigation between screens',
    status: 'review',
    projectId: 'project-2',
    priority: 'high',
    dueDate: '2023-05-31',
    estimate: '3d',
    comments: 2,
    assignee: {
      id: 'user-1',
      name: 'John Doe',
      initials: 'JD',
      image: 'https://github.com/shadcn.png',
    },
    createdAt: '2023-05-19T10:00:00Z',
  },
  {
    id: 'task-8',
    title: 'Add push notifications',
    description: 'Implement push notification service',
    status: 'todo',
    projectId: 'project-2',
    priority: 'medium',
    dueDate: '2023-06-07',
    estimate: '4d',
    comments: 1,
    assignee: {
      id: 'user-2',
      name: 'Alice Smith',
      initials: 'AS',
      image: '',
    },
    createdAt: '2023-05-21T09:45:00Z',
  },
];

export function getTasks(): Task[] {
  return tasks;
}

export function getProjectTasks(projectId: string): Task[] {
  return tasks.filter((task) => task.projectId === projectId);
}

export function getTask(id: string): Task | undefined {
  return tasks.find((task) => task.id === id);
}