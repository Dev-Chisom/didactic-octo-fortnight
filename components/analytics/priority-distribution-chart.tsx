'use client';

import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

export default function PriorityDistributionChart() {
  const data = [
    { name: 'High', value: 12, color: 'var(--destructive)' },
    { name: 'Medium', value: 27, color: 'hsl(var(--chart-4))' },
    { name: 'Low', value: 18, color: 'hsl(var(--chart-2))' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Task Priority Distribution</CardTitle>
        <CardDescription>Distribution of tasks by priority level</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}