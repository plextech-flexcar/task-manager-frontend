import { Status } from './Status';

export interface Task {
  id?: number;
  vehicleId: number;
  type: string;
  date?: number;
  description: string;
  priority: number;
  assigned: number | null;
  status: string;
  creator: string | null;
}
