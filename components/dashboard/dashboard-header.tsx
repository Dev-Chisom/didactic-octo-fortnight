'use client';

import { useState } from 'react';
import { 
  Calendar,
  BarChart3,
  Search,
  BellIcon,
  PlusCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { NewProjectForm } from '@/components/projects/new-project-form';

export default function DashboardHeader() {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex items-center gap-2">
          <div className="relative w-full sm:w-64 lg:w-80">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-8 w-full"
            />
          </div>
          <Button variant="outline" size="icon" className="hidden md:flex">
            <Calendar className="h-4 w-4" />
            <span className="sr-only">Calendar</span>
          </Button>
          <Button variant="outline" size="icon" className="hidden md:flex">
            <BellIcon className="h-4 w-4" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                New Project
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Project</DialogTitle>
                <DialogDescription>
                  Add a new project to your workspace.
                </DialogDescription>
              </DialogHeader>
              <NewProjectForm onSuccess={() => setOpen(false)} />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="flex flex-col gap-1 p-4 border rounded-lg bg-card">
          <p className="text-sm font-medium text-muted-foreground">Total Projects</p>
          <p className="text-2xl font-bold">12</p>
          <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
            <span className="text-green-500">↑ 6%</span> from last month
          </p>
        </div>
        <div className="flex flex-col gap-1 p-4 border rounded-lg bg-card">
          <p className="text-sm font-medium text-muted-foreground">Active Tasks</p>
          <p className="text-2xl font-bold">34</p>
          <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
            <span className="text-green-500">↑ 12%</span> from last month
          </p>
        </div>
        <div className="flex flex-col gap-1 p-4 border rounded-lg bg-card">
          <p className="text-sm font-medium text-muted-foreground">Completed Tasks</p>
          <p className="text-2xl font-bold">27</p>
          <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
            <span className="text-green-500">↑ 24%</span> from last month
          </p>
        </div>
        <div className="flex flex-col gap-1 p-4 border rounded-lg bg-card">
          <p className="text-sm font-medium text-muted-foreground">Team Members</p>
          <p className="text-2xl font-bold">8</p>
          <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
            <span className="text-green-500">↑ 2</span> new this month
          </p>
        </div>
      </div>
    </div>
  );
}