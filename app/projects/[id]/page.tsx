import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProject, getProjects } from '@/lib/data/projects';
import ProjectHeader from '@/components/projects/project-header';
import KanbanBoard from '@/components/projects/kanban-board';

export const metadata: Metadata = {
  title: 'Project Board - ProjectFlow',
  description: 'Manage project tasks with Kanban board',
};

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map(project => ({ id: project.id }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = getProject(params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-6">
      <ProjectHeader project={project} />
      <KanbanBoard projectId={params.id} />
    </div>
  );
}