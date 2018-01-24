export class Task {
  name: string;
  checked: boolean = false;
  id: number;
}

export enum TaskStatus {
  'all',
  'completed',
  'notstarted'
}