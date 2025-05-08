'use client';

import { useState } from 'react';
import { Project } from '@/lib/data/projects';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CalendarDays, ListTodo, Settings, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

export default function ProjectHeader({ project }: { project: Project }) {
  const [activeTab, setActiveTab] = useState('board');
  
  return (
    <div className="flex flex-col gap-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/projects/${project.id}`}>{project.name}</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight">{project.name}</h1>
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
          <p className="text-muted-foreground">{project.description}</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex -space-x-2">
            {project.team.map((member, i) => (
              <Avatar key={i} className="border-2 border-background h-8 w-8">
                <AvatarImage src={member.image || ''} alt={member.name} />
                <AvatarFallback>{member.initials}</AvatarFallback>
              </Avatar>
            ))}
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full border-dashed"
            >
              <Users className="h-4 w-4" />
              <span className="sr-only">Add team member</span>
            </Button>
          </div>
          <Button variant="outline" size="sm">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </div>
      </div>

      <Tabs defaultValue="board" className="w-full" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="board" className="flex items-center gap-2">
            <ListTodo className="h-4 w-4" />
            Board
          </TabsTrigger>
          <TabsTrigger value="timeline" className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4" />
            Timeline
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}