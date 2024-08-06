
// Interfaz que define la estructura de una tarea
export interface Task {
    id: string;
    title: string;
    description: string; 
    dueDate: string;
    status : boolean;
  }
  
  export class TaskEntity implements Task {
    id: string;
    title: string;
    description: string;
    dueDate: string;
    status : boolean;
  
    constructor(dueDate:string, id: string, title: string, status : boolean, description: string) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.status  = status ;
    }
  
    toggleComplete(): void {
      this.status  = !this.status ;
    }
  }
  