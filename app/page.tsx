'use client';

import LoginForm from '@/components/login';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 shadow">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">Task Manager</h1>
        </div>
      </header>
      <main className="flex-1 container mx-auto py-8 px-6 flex items-center justify-center">
        <LoginForm />
      </main>
      <footer className="bg-primary text-primary-foreground py-4 px-6 shadow">
        <div className="container mx-auto flex items-center justify-between">
          <p className="text-sm">&copy; 2024 Task Manager. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
