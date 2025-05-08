import { Metadata } from 'next';
import ProjectsLayout from '@/components/projects/projects-layout';
import ProjectsHeader from '@/components/projects/projects-header';
import ProjectsList from '@/components/projects/projects-list';

export const metadata: Metadata = {
  title: 'Projects - ProjectFlow',
  description: 'Manage your projects',
};

export default function ProjectsPage() {
  return (
    <ProjectsLayout>
      <div className="flex flex-col gap-6">
        <ProjectsHeader />
        <ProjectsList />
      </div>
    </ProjectsLayout>
  );
}