// src/app/taskManager/page.tsx
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import TaskManager from "../../components/task-manager";

export default function TaskManagerPage() {
  const router = useRouter();

  useEffect(() => {
    const token = document.cookie.split('; ').find(row => row.startsWith('authToken'))?.split('=')[1];
    if (!token) {
      router.push('/login');
    }
  }, [router]);

  return <TaskManager />;
}
