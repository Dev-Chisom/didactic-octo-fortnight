'use client';

import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { getProjects } from '@/lib/data/projects';

export default function ProjectProgressStats() {
  const projects = getProjects().slice(0, 4);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Progress</CardTitle>
        <CardDescription>Progress overview for active projects</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {projects.map((project) => {
            const progress = Math.round((project.completedTasks / project.totalTasks) * 100);
            
            return (
              <div key={project.id}>
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium">{project.name}</div>
                  <div className="text-sm text-muted-foreground">{progress}%</div>
                </div>
                <div className="flex items-center gap-4">
                  <Progress value={progress} className="h-2 flex-1" />
                  <div className="text-xs text-muted-foreground w-16">
                    {project.completedTasks}/{project.totalTasks} tasks
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}