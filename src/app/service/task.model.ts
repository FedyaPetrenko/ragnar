export class Task {
  name: string;
  checked: boolean = false;
}

export enum TaskStatus {
  'all',
  'completed',
  'notstarted'
}