import DashboardLayout from '@/components/dashboard/dashboard-layout';

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout>{children}</DashboardLayout>;
}