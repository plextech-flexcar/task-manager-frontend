import { Task } from "../models/Task";
import { Vehicle } from "../models/Vehicle";
import { PRIORITY_MAP } from "../components/Icon/Priority";

export function filterTasks(filter : any, allTasks : Task[], allVehicles: Record<number, Vehicle>) {
    
    const newDisplayTasks : Task[] = [];

    allTasks.forEach((task : Task) => {
        const vehicle = allVehicles[task.vehicleId]
        console.log(task.vehicleId)
        if (
            (filter["Market"].length === 0 || filter["Market"].includes(vehicle.marketName)) &&
            (filter["Task Type"].length === 0 || filter["Task Type"].includes(task.type)) &&
            (filter["Status"].length === 0 || filter["Status"].includes(task.status)) &&
             (filter["Priority"].length === 0 || filter["Priority"].includes(PRIORITY_MAP[task.priority].name)) &&
            (
                typeof(vehicle) != "undefined" &&
                vehicle.makeName in filter["Make & Model"] && 
                (filter["Make & Model"][vehicle.makeName].length === 0 ||
                filter["Make & Model"][vehicle.makeName].includes(vehicle.modelName))
            )
        ) {
            newDisplayTasks.push(task)
        }
    })

    return newDisplayTasks
}