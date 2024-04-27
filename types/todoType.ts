export type TodoType = {
  id: string;
  title?: string | null;
  color?: string | null;
  isCompleted: boolean;
  createdAt?: Date;
  mensaje?: string | null;
  backgroundColor?: string | null;
  onDelete?: () => void; 

};
