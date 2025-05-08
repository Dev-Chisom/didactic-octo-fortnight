'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function ActivityFeed() {
  const activities = [
    {
      user: {
        name: 'John Doe',
        email: 'john@example.com',
        image: 'https://github.com/shadcn.png',
        initials: 'JD',
      },
      action: 'completed task',
      subject: 'Design new dashboard layout',
      project: 'Website Redesign',
      time: '10 minutes ago',
    },
    {
      user: {
        name: 'Alice Smith',
        email: 'alice@example.com',
        image: '',
        initials: 'AS',
      },
      action: 'created',
      subject: 'New task assigned to Bob',
      project: 'Mobile App',
      time: '1 hour ago',
    },
    {
      user: {
        name: 'Bob Johnson',
        email: 'bob@example.com',
        image: '',
        initials: 'BJ',
      },
      action: 'commented on',
      subject: 'Frontend bug fix',
      project: 'Website Redesign',
      time: '2 hours ago',
    },
    {
      user: {
        name: 'Emma Davis',
        email: 'emma@example.com',
        image: '',
        initials: 'ED',
      },
      action: 'moved task',
      subject: 'API integration',
      project: 'Mobile App',
      time: '5 hours ago',
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Recent activity from your team</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {activities.map((activity, i) => (
            <div className="flex items-start" key={i}>
              <Avatar className="h-9 w-9">
                <AvatarImage src={activity.user.image} alt={activity.user.name} />
                <AvatarFallback>{activity.user.initials}</AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium">
                  <span className="font-semibold">{activity.user.name}</span> {activity.action}{' '}
                  <span className="font-semibold">{activity.subject}</span> in{' '}
                  <span className="font-semibold">{activity.project}</span>
                </p>
                <p className="text-sm text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}