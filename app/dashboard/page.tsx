import DashboardLayout from '@/components/dashboard/dashboard-layout';
import AnalyticsHeader from '@/components/analytics/analytics-header';
import TaskCompletionChart from '@/components/analytics/task-completion-chart';
import TeamPerformanceChart from '@/components/analytics/team-performance-chart';
import ProjectProgressStats from '@/components/analytics/project-progress-stats';
import PriorityDistributionChart from '@/components/analytics/priority-distribution-chart';

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <AnalyticsHeader />
        <ProjectProgressStats />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TaskCompletionChart />
          <TeamPerformanceChart />
        </div>
        <PriorityDistributionChart />
      </div>
    </DashboardLayout>
  );
}