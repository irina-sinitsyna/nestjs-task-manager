export interface ITask {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

export enum TaskStatus {
  open = 'OPEN',
  inProgress = 'IN PROGRESS',
  done = 'DONE',
}
