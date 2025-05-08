'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { getProjectTasks } from '@/lib/data/tasks';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useMediaQuery } from '@/hooks/use-media-query';
import { TaskCard } from '@/components/projects/task-card';
import { NewTaskDialog } from '@/components/projects/new-task-dialog';

export default function KanbanBoard({ projectId }: { projectId: string }) {
  const [tasks, setTasks] = useState(getProjectTasks(projectId));
  const [open, setOpen] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState<string | null>(null);
  const [draggingTaskId, setDraggingTaskId] = useState<string | null>(null);
  const [draggingOverColumn, setDraggingOverColumn] = useState<string | null>(null);
  const [draggingOverTaskId, setDraggingOverTaskId] = useState<string | null>(null);
  const [dropPosition, setDropPosition] = useState<'before' | 'after' | null>(null);

  const columns = [
    { id: 'todo', name: 'To Do', color: 'bg-blue-500' },
    { id: 'inProgress', name: 'In Progress', color: 'bg-amber-500' },
    { id: 'review', name: 'Review', color: 'bg-purple-500' },
    { id: 'done', name: 'Done', color: 'bg-green-500' },
  ];

  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const boardHeight = isDesktop ? 'calc(100vh - 280px)' : 'auto';

  const handleDragStart = (e: React.DragEvent, taskId: string) => {
    setDraggingTaskId(taskId);
    e.dataTransfer.setData('taskId', taskId);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent, columnId: string, taskId?: string) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setDraggingOverColumn(columnId);

    if (taskId) {
      setDraggingOverTaskId(taskId);
      const rect = (e.target as HTMLElement).getBoundingClientRect();
      const midPoint = rect.top + rect.height / 2;
      setDropPosition(e.clientY < midPoint ? 'before' : 'after');
    } else {
      setDraggingOverTaskId(null);
      setDropPosition(null);
    }
  };

  const handleDragLeave = () => {
    setDraggingOverColumn(null);
    setDraggingOverTaskId(null);
    setDropPosition(null);
  };

  const handleDrop = (e: React.DragEvent, columnId: string, targetTaskId?: string) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('taskId');
    const sourceTask = tasks.find(t => t.id === taskId);
    
    if (!sourceTask) return;

    let newTasks = [...tasks];
    const sourceIndex = tasks.findIndex(t => t.id === taskId);
    newTasks.splice(sourceIndex, 1);

    if (targetTaskId && dropPosition) {
      const targetIndex = tasks.findIndex(t => t.id === targetTaskId);
      const insertIndex = dropPosition === 'after' ? targetIndex + 1 : targetIndex;
      newTasks.splice(insertIndex, 0, { ...sourceTask, status: columnId });
    } else {
      newTasks.push({ ...sourceTask, status: columnId });
    }

    setTasks(newTasks);
    setDraggingTaskId(null);
    setDraggingOverColumn(null);
    setDraggingOverTaskId(null);
    setDropPosition(null);
  };

  const openNewTaskDialog = (columnId: string) => {
    setSelectedColumn(columnId);
    setOpen(true);
  };

  const handleAddTask = (task: any) => {
    setTasks([...tasks, task]);
    setOpen(false);
  };

  return (
    <div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      style={{ minHeight: boardHeight }}
    >
      {columns.map((column) => {
        const columnTasks = tasks.filter(task => task.status === column.id);
        const isOver = draggingOverColumn === column.id;
        
        return (
          <div
            key={column.id}
            className="flex flex-col"
            onDragOver={(e) => handleDragOver(e, column.id)}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, column.id)}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className={`h-3 w-3 rounded-full ${column.color}`} />
                <h3 className="font-medium">{column.name}</h3>
                <Badge variant="outline" className="ml-2">
                  {columnTasks.length}
                </Badge>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8"
                onClick={() => openNewTaskDialog(column.id)}
              >
                <Plus className="h-4 w-4" />
                <span className="sr-only">Add task</span>
              </Button>
            </div>
            <ScrollArea 
              className={`h-full rounded-md border bg-muted/40 p-4 transition-colors ${
                isOver && !draggingOverTaskId ? 'bg-muted/60 border-primary' : ''
              }`}
              style={{ minHeight: isDesktop ? '500px' : '300px' }}
            >
              <div className="flex flex-col gap-3">
                {columnTasks.length === 0 ? (
                  <div 
                    className="flex h-32 items-center justify-center rounded-md border border-dashed"
                    onDragOver={(e) => handleDragOver(e, column.id)}
                    onDrop={(e) => handleDrop(e, column.id)}
                  >
                    <p className="text-sm text-muted-foreground">
                      Drop tasks here
                    </p>
                  </div>
                ) : (
                  columnTasks.map((task) => (
                    <div
                      key={task.id}
                      className={`relative ${
                        draggingOverTaskId === task.id ? 'my-8' : ''
                      }`}
                      onDragOver={(e) => handleDragOver(e, column.id, task.id)}
                    >
                      {draggingOverTaskId === task.id && dropPosition === 'before' && (
                        <div className="absolute -top-4 left-0 right-0 h-2 bg-primary rounded-full" />
                      )}
                      <TaskCard 
                        task={task} 
                        onDragStart={handleDragStart}
                        isDragging={draggingTaskId === task.id}
                      />
                      {draggingOverTaskId === task.id && dropPosition === 'after' && (
                        <div className="absolute -bottom-4 left-0 right-0 h-2 bg-primary rounded-full" />
                      )}
                    </div>
                  ))
                )}
              </div>
            </ScrollArea>
          </div>
        );
      })}
      
      <NewTaskDialog 
        open={open} 
        onOpenChange={setOpen} 
        columnId={selectedColumn}
        projectId={projectId}
        onAddTask={handleAddTask}
      />
    </div>
  );
}