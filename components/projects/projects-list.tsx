'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MoreHorizontal, Star, StarOff } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { getProjects } from '@/lib/data/projects';

export default function ProjectsList() {
  const allProjects = getProjects();
  const [projects, setProjects] = useState(allProjects);
  
  const toggleFavorite = (id: string) => {
    setProjects(
      projects.map((project) =>
        project.id === id
          ? { ...project, isFavorite: !project.isFavorite }
          : project
      )
    );
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <Card key={project.id} className="overflow-hidden">
          <div 
            className="h-3" 
            style={{ backgroundColor: project.color }}
          />
          <div className="p-6">
            <div className="flex items-start justify-between">
              <Link href={`/projects/${project.id}`}>
                <h3 className="font-semibold text-lg hover:underline">
                  {project.name}
                </h3>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">More options</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => toggleFavorite(project.id)}>
                    {project.isFavorite ? (
                      <>
                        <StarOff className="mr-2 h-4 w-4" />
                        <span>Remove from favorites</span>
                      </>
                    ) : (
                      <>
                        <Star className="mr-2 h-4 w-4" />
                        <span>Add to favorites</span>
                      </>
                    )}
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Edit project</DropdownMenuItem>
                  <DropdownMenuItem>Archive project</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              {project.description}
            </p>
            <div className="grid gap-4 mt-5">
              <div className="flex items-center justify-between text-sm">
                <div>Progress</div>
                <div className="font-medium">
                  {(project.completedTasks / project.totalTasks) * 100}%
                </div>
              </div>
              <Progress
                value={(project.completedTasks / project.totalTasks) * 100}
                className="h-2"
              />
            </div>
            <div className="flex items-center justify-between mt-5">
              <div className="flex -space-x-2">
                {project.team.map((member, i) => (
                  <Avatar key={i} className="border-2 border-background h-8 w-8">
                    <AvatarImage
                      src={member.image || ''}
                      alt={member.name}
                    />
                    <AvatarFallback>{member.initials}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <Badge
                variant={
                  project.status === 'Completed'
                    ? 'default'
                    : project.status === 'In Progress'
                    ? 'secondary'
                    : 'outline'
                }
              >
                {project.status}
              </Badge>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}