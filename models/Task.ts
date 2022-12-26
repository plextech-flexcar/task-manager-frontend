export interface Task {
  id?: number;
  vehicleId: number;
  type: string;
  date?: number;
  description: string;
  priority: number;
  assigned: number;
  status: string;
  creator: number;
}
