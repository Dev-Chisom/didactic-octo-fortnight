'use client';

import { Task } from '@/lib/data/tasks';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, MessageSquare } from 'lucide-react';

interface TaskCardProps {
  task: Task;
  onDragStart: (e: React.DragEvent, taskId: string) => void;
  isDragging: boolean;
}

export function TaskCard({ task, onDragStart, isDragging }: TaskCardProps) {
  const priorityColors = {
    high: 'bg-red-500',
    medium: 'bg-amber-500',
    low: 'bg-blue-500',
  };

  return (
    <Card
      className={`cursor-grab active:cursor-grabbing transition-transform ${
        isDragging ? 'opacity-50 scale-95' : ''
      }`}
      draggable
      onDragStart={(e) => onDragStart(e, task.id)}
    >
      <CardContent className="p-3">
        <div className="flex items-start justify-between gap-2">
          <div className="grid gap-1">
            <div className="font-medium">{task.title}</div>
            <div className="text-sm text-muted-foreground">
              {task.description}
            </div>
          </div>
          {task.priority && (
            <div
              className={`h-2 w-2 rounded-full ${
                priorityColors[task.priority as keyof typeof priorityColors]
              }`}
            />
          )}
        </div>
        <div className="mt-4 flex items-center justify-between">
          {task.dueDate && (
            <div className="flex items-center text-xs text-muted-foreground">
              <Calendar className="mr-1 h-3 w-3" />
              {task.dueDate}
            </div>
          )}
          {task.comments > 0 && (
            <div className="flex items-center text-xs text-muted-foreground">
              <MessageSquare className="mr-1 h-3 w-3" />
              {task.comments}
            </div>
          )}
        </div>
        {task.assignee && (
          <div className="mt-4 flex items-center justify-between">
            <Avatar className="h-6 w-6">
              <AvatarImage src={task.assignee.image || ''} alt={task.assignee.name} />
              <AvatarFallback>{task.assignee.initials}</AvatarFallback>
            </Avatar>
            {task.estimate && (
              <Badge variant="outline" className="text-xs">
                <Clock className="mr-1 h-3 w-3" />
                {task.estimate}
              </Badge>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}