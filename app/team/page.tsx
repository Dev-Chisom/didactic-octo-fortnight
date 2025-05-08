import { Metadata } from 'next';
import DashboardLayout from '@/components/dashboard/dashboard-layout';
import TeamHeader from '@/components/team/team-header';
import TeamList from '@/components/team/team-list';

export const metadata: Metadata = {
  title: 'Team - ProjectFlow',
  description: 'Manage your team members',
};

export default function TeamPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <TeamHeader />
        <TeamList />
      </div>
    </DashboardLayout>
  );
}