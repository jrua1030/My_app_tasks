import { TaskService } from '../services/TaskService';
import { Task } from '../models/Task';

const taskService = new TaskService();

export class TaskController {
  // Obtener todas las tareas
  async getAllTasks(): Promise<Task[]> {
    try {
      const tasks = await taskService.getAllTasks();
      return tasks;
    } catch (error) {
      console.error('Error getting tasks:', error);
      throw error;
    }
  }

  // Crear una nueva tarea
  async createTask(task: Task): Promise<Task> {
    try {
      const newTask = await taskService.createTask(task);
      return newTask;
    } catch (error) {
      console.error('Error creating task:', error);
      throw error;
    }
  }

  // Eliminar una tarea
  async deleteTask(id: string): Promise<void> {
    try {
      await taskService.deleteTask(id);
    } catch (error) {
      console.error('Error deleting task:', error);
      throw error;
    }
  }

  // Cambiar el estado de una tarea
  async changeTaskStatus(id: string, newStatus: string): Promise<Task> {
    try {
      const updatedTask = await taskService.changeTaskStatus(id, newStatus);
      return updatedTask;
    } catch (error) {
      console.error('Error changing task status:', error);
      throw error;
    }
  }
}
