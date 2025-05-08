export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: string;
  department: string;
  initials: string;
  image?: string;
  tasksCompleted: number;
  tasksAssigned: number;
  joinedAt: string;
}

// Mock data for team members
const teamMembers: TeamMember[] = [
  {
    id: 'user-1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Lead Developer',
    department: 'Engineering',
    initials: 'JD',
    image: 'https://github.com/shadcn.png',
    tasksCompleted: 28,
    tasksAssigned: 34,
    joinedAt: 'Jan 15, 2022',
  },
  {
    id: 'user-2',
    name: 'Alice Smith',
    email: 'alice@example.com',
    role: 'UX Designer',
    department: 'Design',
    initials: 'AS',
    tasksCompleted: 19,
    tasksAssigned: 22,
    joinedAt: 'Mar 10, 2022',
  },
  {
    id: 'user-3',
    name: 'Bob Johnson',
    email: 'bob@example.com',
    role: 'Backend Developer',
    department: 'Engineering',
    initials: 'BJ',
    tasksCompleted: 31,
    tasksAssigned: 35,
    joinedAt: 'Feb 5, 2022',
  },
  {
    id: 'user-4',
    name: 'Emma Davis',
    email: 'emma@example.com',
    role: 'Product Manager',
    department: 'Product',
    initials: 'ED',
    tasksCompleted: 24,
    tasksAssigned: 26,
    joinedAt: 'Apr 20, 2022',
  },
  {
    id: 'user-5',
    name: 'Michael Wilson',
    email: 'michael@example.com',
    role: 'Frontend Developer',
    department: 'Engineering',
    initials: 'MW',
    tasksCompleted: 17,
    tasksAssigned: 23,
    joinedAt: 'May 15, 2022',
  },
  {
    id: 'user-6',
    name: 'Sophia Brown',
    email: 'sophia@example.com',
    role: 'UI Designer',
    department: 'Design',
    initials: 'SB',
    tasksCompleted: 14,
    tasksAssigned: 18,
    joinedAt: 'Jun 1, 2022',
  },
  {
    id: 'user-7',
    name: 'James Taylor',
    email: 'james@example.com',
    role: 'QA Engineer',
    department: 'Engineering',
    initials: 'JT',
    tasksCompleted: 22,
    tasksAssigned: 25,
    joinedAt: 'Apr 10, 2022',
  },
  {
    id: 'user-8',
    name: 'Olivia Martinez',
    email: 'olivia@example.com',
    role: 'Marketing Manager',
    department: 'Marketing',
    initials: 'OM',
    tasksCompleted: 11,
    tasksAssigned: 15,
    joinedAt: 'Jul 5, 2022',
  },
];

export function getTeamMembers(): TeamMember[] {
  return teamMembers;
}

export function getTeamMember(id: string): TeamMember | undefined {
  return teamMembers.find((member) => member.id === id);
}