'use client';

import DashboardLayout from '@/components/dashboard/dashboard-layout';
import DashboardHeader from '@/components/dashboard/dashboard-header';
import OverviewStats from '@/components/dashboard/overview-stats';
import RecentProjects from '@/components/dashboard/recent-projects';
import TasksOverview from '@/components/dashboard/tasks-overview';
import ActivityFeed from '@/components/dashboard/activity-feed';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <DashboardHeader />
        <OverviewStats />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <RecentProjects />
          </div>
          <div>
            <TasksOverview />
          </div>
        </div>
        <ActivityFeed />
      </div>
    </DashboardLayout>
  );
}