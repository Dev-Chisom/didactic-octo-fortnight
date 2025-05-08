'use client';

import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, ResponsiveContainer } from 'recharts';

export default function TeamPerformanceChart() {
  const data = [
    {
      subject: 'Task Completion',
      John: 85,
      Alice: 92,
      Bob: 78,
      fullMark: 100,
    },
    {
      subject: 'Efficiency',
      John: 90,
      Alice: 88,
      Bob: 94,
      fullMark: 100,
    },
    {
      subject: 'Collaboration',
      John: 75,
      Alice: 95,
      Bob: 85,
      fullMark: 100,
    },
    {
      subject: 'Quality',
      John: 92,
      Alice: 89,
      Bob: 81,
      fullMark: 100,
    },
    {
      subject: 'Timeliness',
      John: 68,
      Alice: 85,
      Bob: 90,
      fullMark: 100,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Performance</CardTitle>
        <CardDescription>Performance metrics for team members</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 100]} />
              <Radar name="John" dataKey="John" stroke="hsl(var(--chart-1))" fill="hsl(var(--chart-1))" fillOpacity={0.3} />
              <Radar name="Alice" dataKey="Alice" stroke="hsl(var(--chart-2))" fill="hsl(var(--chart-2))" fillOpacity={0.3} />
              <Radar name="Bob" dataKey="Bob" stroke="hsl(var(--chart-3))" fill="hsl(var(--chart-3))" fillOpacity={0.3} />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}