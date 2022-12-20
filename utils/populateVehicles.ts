
import { Vehicle } from '../models/Vehicle';

export function populateVehicles(vehicleList: Vehicle[]){
    const vehicles: Record<number, Vehicle> = {}
    for (let i = 0; i < vehicleList.length; i++) {
        const vehicleId = vehicleList[i].vehicleId;
        vehicles[vehicleId] = vehicleList[i];
      }
    return vehicles;
}