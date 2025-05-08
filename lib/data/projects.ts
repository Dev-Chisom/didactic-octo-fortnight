export interface Project {
  id: string;
  name: string;
  description: string;
  color: string;
  status: string;
  completedTasks: number;
  totalTasks: number;
  createdAt: string;
  isFavorite: boolean;
  team: {
    id: string;
    name: string;
    initials: string;
    image?: string;
  }[];
}

// Mock data for projects
const projects: Project[] = [
  {
    id: 'project-1',
    name: 'Website Redesign',
    description: 'Redesign the company website with new branding',
    color: '#3B82F6',
    status: 'In Progress',
    completedTasks: 12,
    totalTasks: 25,
    createdAt: 'May 10, 2023',
    isFavorite: true,
    team: [
      {
        id: 'user-1',
        name: 'John Doe',
        initials: 'JD',
        image: 'https://github.com/shadcn.png',
      },
      {
        id: 'user-2',
        name: 'Alice Smith',
        initials: 'AS',
      },
      {
        id: 'user-3',
        name: 'Bob Johnson',
        initials: 'BJ',
      },
    ],
  },
  {
    id: 'project-2',
    name: 'Mobile App Development',
    description: 'Create a new mobile app for customers',
    color: '#10B981',
    status: 'In Progress',
    completedTasks: 18,
    totalTasks: 30,
    createdAt: 'April 5, 2023',
    isFavorite: false,
    team: [
      {
        id: 'user-1',
        name: 'John Doe',
        initials: 'JD',
        image: 'https://github.com/shadcn.png',
      },
      {
        id: 'user-2',
        name: 'Alice Smith',
        initials: 'AS',
      },
      {
        id: 'user-4',
        name: 'Emma Davis',
        initials: 'ED',
      },
    ],
  },
  {
    id: 'project-3',
    name: 'Marketing Campaign',
    description: 'Q2 Product launch campaign',
    color: '#EF4444',
    status: 'Planning',
    completedTasks: 3,
    totalTasks: 15,
    createdAt: 'May 20, 2023',
    isFavorite: true,
    team: [
      {
        id: 'user-2',
        name: 'Alice Smith',
        initials: 'AS',
      },
      {
        id: 'user-4',
        name: 'Emma Davis',
        initials: 'ED',
      },
    ],
  },
  {
    id: 'project-4',
    name: 'Backend Migration',
    description: 'Migrate to new API and database',
    color: '#8B5CF6',
    status: 'In Progress',
    completedTasks: 7,
    totalTasks: 18,
    createdAt: 'April 15, 2023',
    isFavorite: false,
    team: [
      {
        id: 'user-1',
        name: 'John Doe',
        initials: 'JD',
        image: 'https://github.com/shadcn.png',
      },
      {
        id: 'user-3',
        name: 'Bob Johnson',
        initials: 'BJ',
      },
    ],
  },
  {
    id: 'project-5',
    name: 'Product Analytics',
    description: 'Implement analytics tracking for main product',
    color: '#F59E0B',
    status: 'Completed',
    completedTasks: 12,
    totalTasks: 12,
    createdAt: 'March 10, 2023',
    isFavorite: false,
    team: [
      {
        id: 'user-2',
        name: 'Alice Smith',
        initials: 'AS',
      },
      {
        id: 'user-4',
        name: 'Emma Davis',
        initials: 'ED',
      },
    ],
  },
  {
    id: 'project-6',
    name: 'UI Component Library',
    description: 'Create reusable UI components',
    color: '#EC4899',
    status: 'In Progress',
    completedTasks: 15,
    totalTasks: 28,
    createdAt: 'April 25, 2023',
    isFavorite: true,
    team: [
      {
        id: 'user-1',
        name: 'John Doe',
        initials: 'JD',
        image: 'https://github.com/shadcn.png',
      },
      {
        id: 'user-3',
        name: 'Bob Johnson',
        initials: 'BJ',
      },
      {
        id: 'user-4',
        name: 'Emma Davis',
        initials: 'ED',
      },
    ],
  },
];

export function getProjects(): Project[] {
  return projects;
}

export function getProject(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}