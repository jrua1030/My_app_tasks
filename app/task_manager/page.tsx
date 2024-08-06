'use client';

import React, { useEffect } from 'react';
import TaskManager from '@/components/task-manager';

const TaskManagerPage = () => {
  /*
  useEffect(() => {
    const token = document.cookie.split('; ').find(row => row.startsWith('authToken'))?.split('=')[1];
    if (!token) {
      window.location.href = '/'; // Redirige a la página de inicio de sesión si no hay token
    }
  }, []);*/

  return <TaskManager />;
};

export default TaskManagerPage;
