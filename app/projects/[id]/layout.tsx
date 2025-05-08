import DashboardLayout from '@/components/dashboard/dashboard-layout';

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout>{children}</DashboardLayout>;
}