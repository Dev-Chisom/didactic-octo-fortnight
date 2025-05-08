'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { getProjects } from '@/lib/data/projects';

export default function RecentProjects() {
  const projects = getProjects().slice(0, 5);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-2">
          <CardTitle>Recent Projects</CardTitle>
          <CardDescription>
            Your most recently updated projects
          </CardDescription>
        </div>
        <Button asChild className="ml-auto" variant="secondary">
          <Link href="/projects">View All</Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {projects.map((project) => (
            <div className="flex items-center" key={project.id}>
              <div className="w-full grid gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className="h-4 w-4 rounded-full"
                      style={{ backgroundColor: project.color }}
                    />
                    <Link href={`/projects/${project.id}`} className="font-medium hover:underline">
                      {project.name}
                    </Link>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {project.completedTasks} / {project.totalTasks} tasks
                  </div>
                </div>
                <Progress
                  value={
                    (project.completedTasks / project.totalTasks) * 100
                  }
                  className="h-2"
                />
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div>Created {project.createdAt}</div>
                  <div>{project.status}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}