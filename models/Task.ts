import { Status } from "./Status";

export interface Task {
  id: number;
  vehicleid: number;
  type: string;
  date: number;
  description: string;
  comment: string;
  make: string;
  model: string;
  color: string;
  license: string;
  mva: string;
  priority: number;
  age: number;
  assigned: string | null;
  market: string;
  status: Status;
  createdBy: string | null;
  carImage: string;
  state: string;
  vin: string;
  vehicleStatus: boolean;
}

