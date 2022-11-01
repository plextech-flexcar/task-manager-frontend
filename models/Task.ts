export interface Task {
  id: number;
  vehicleid: number;
  type: string;
  //taskTitle: string;
  date: number;
  // taskAge: number;
  comment: string;

  make: string;
  model: string;
  // carModel: string;]
  color: string;
  license: string;
  mva: string;
  priority: number;
  age: number;
  assigned: string | null;
  market: string;
  status: false;
  createdBy: string | null;
}
