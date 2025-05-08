'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function TasksOverview() {
  const tasks = [
    { id: 1, name: 'Design system updates', status: 'In Progress', dueDate: 'Today' },
    { id: 2, name: 'API documentation', status: 'To Do', dueDate: 'Tomorrow' },
    { id: 3, name: 'User testing', status: 'In Progress', dueDate: 'Wed, May 22' },
    { id: 4, name: 'Frontend bug fixes', status: 'To Do', dueDate: 'Fri, May 24' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Tasks</CardTitle>
        <CardDescription>Upcoming and in-progress tasks</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex flex-col space-y-2 border-b pb-3 last:border-0 last:pb-0"
            >
              <div className="font-medium">{task.name}</div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-block h-2 w-2 rounded-full ${
                      task.status === 'In Progress'
                        ? 'bg-amber-500'
                        : 'bg-blue-500'
                    }`}
                  />
                  <span className="text-muted-foreground">{task.status}</span>
                </div>
                <div className="text-muted-foreground">Due {task.dueDate}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}