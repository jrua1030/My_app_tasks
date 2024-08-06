import axios from 'axios';
import { Task } from '../models/Task';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

/*const API_URL =[
  {
    "id": "1",
    "title": "Prepare for team meeting",
    "description": "Gather relevant materials and talking points for the meeting.",
    "dueDate": "2023-07-05",
    "status": "incomplete"
  },
  {
    "id": "2",
    "title": "Review marketing materials",
    "description": "Provide feedback on the new marketing brochure and website content.",
    "dueDate": "2023-07-15",
    "status": "completed"
  }
]*/
  

export class TaskService {
  // Obtener todas las tareas
  async getAllTasks(): Promise<Task[]> {
    try {
      const response = await axios.get(`${API_URL}/get`);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching tasks: ${error}`);
    }
  }

  // Crear una nueva tarea
  async createTask(task: Task): Promise<Task> {
    try {
      const response = await axios.post(`${API_URL}/tasks`, task);
      return response.data;
    } catch (error) {
      throw new Error(`Error creating task: ${error}`);
    }
  }

  // Eliminar una tarea
  async deleteTask(id: string): Promise<boolean> {
    try {
      await axios.delete(`${API_URL}/tasks/${id}`);
      return true;
    } catch (error) {
      throw new Error(`Error deleting task: ${error}`);
    }
  }


  async changeTaskStatus(id: string, newStatus: string): Promise<Task> {
    try {
      const response = await axios.patch(`${API_URL}/tasks/${id}/status`, { status: newStatus });
      return response.data;
    } catch (error) {
      throw new Error(`Error changing task status: ${error}`);
    }
  }
}


