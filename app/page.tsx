import Link from 'next/link';
import { MoveRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto py-4 px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold">P</span>
            </div>
            <h1 className="text-xl font-bold">ProjectFlow</h1>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/features" className="text-sm font-medium hover:text-primary">Features</Link>
            <Link href="/pricing" className="text-sm font-medium hover:text-primary">Pricing</Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary">About</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link 
              href="/login" 
              className="text-sm font-medium hover:underline hidden md:block"
            >
              Log in
            </Link>
            <Link 
              href="/dashboard" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      
      <main className="flex-1">
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Manage projects <span className="text-primary">effortlessly</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              A powerful, intuitive project management tool with Kanban boards, task assignment, and analytics to help teams deliver outstanding results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link 
                href="/dashboard" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center justify-center gap-2"
              >
                Try for free <MoveRight className="h-4 w-4" />
              </Link>
              <Link 
                href="/tour" 
                className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-6 py-3 rounded-md font-medium transition-colors"
              >
                Take a tour
              </Link>
            </div>
            <div className="rounded-xl border shadow-xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="ProjectFlow Dashboard" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect width="8" height="8" x="2" y="2" rx="1"/><path d="M14 2c.55 0 1.05.22 1.41.59.37.36.59.86.59 1.41v8c0 .55-.22 1.05-.59 1.41-.36.37-.86.59-1.41.59h-8c-.55 0-1.05-.22-1.41-.59C4.22 13.05 4 12.55 4 12V8"/><rect width="8" height="8" x="14" y="14" rx="1"/><path d="M10 14v.01"/><path d="M4 18c0 .55.22 1.05.59 1.41.36.37.86.59 1.41.59h4"/></svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Kanban Boards</h3>
                <p className="text-muted-foreground">
                  Visualize your workflow with customizable Kanban boards. Drag and drop tasks between columns to track progress.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Task Assignment</h3>
                <p className="text-muted-foreground">
                  Assign tasks to team members, set priorities, and track deadlines. Keep everyone accountable and on the same page.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Analytics</h3>
                <p className="text-muted-foreground">
                  Gain insights into your team's performance with detailed analytics. Track progress, identify bottlenecks, and optimize workflows.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xs">P</span>
              </div>
              <span className="font-medium">ProjectFlow</span>
            </div>
            <div className="flex gap-6 mb-4 md:mb-0">
              <Link href="/features" className="text-sm text-muted-foreground hover:text-foreground">Features</Link>
              <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground">Pricing</Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">About</Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link>
            </div>
            <div className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} ProjectFlow. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}