'use client';

import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function TaskCompletionChart() {
  const data = [
    { name: 'Mon', completed: 4, total: 6 },
    { name: 'Tue', completed: 7, total: 8 },
    { name: 'Wed', completed: 3, total: 9 },
    { name: 'Thu', completed: 5, total: 7 },
    { name: 'Fri', completed: 6, total: 8 },
    { name: 'Sat', completed: 2, total: 3 },
    { name: 'Sun', completed: 1, total: 2 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Task Completion</CardTitle>
        <CardDescription>Daily task completion vs total tasks</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 0,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="total" fill="hsl(var(--chart-2))" name="Total Tasks" />
              <Bar dataKey="completed" fill="hsl(var(--chart-1))" name="Completed Tasks" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}