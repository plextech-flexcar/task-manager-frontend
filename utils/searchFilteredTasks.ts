import { Task } from "../models/Task";

export const searchFilteredTasks = (
        query: string, 
        mva: { [vehicleId: number]: string},
        license: {[vehicleId: number]: string },
        filteredTasks: Task[]
    ) => {
    const pattern = new RegExp('^' + query + '[a-zA-Z0-9]*');
    const matches = new Set<number>();
    for (const vehicleId in mva) {
    const vehicleIdNum = Number.parseInt(vehicleId);
        if (pattern.test(mva[vehicleIdNum])) {
            matches.add(vehicleIdNum);
        }
        }
    for (const vehicleId in license) {
        const vehicleIdNum = Number.parseInt(vehicleId);
        if (pattern.test(license[vehicleIdNum])) {
            matches.add(vehicleIdNum);
        }
    }
    const newDisplayTasks : Task[] = [];   
    filteredTasks.forEach((task : Task) => {
    if (matches.has(task.vehicleId)) {
        newDisplayTasks.push(task);
    }
    })
    return newDisplayTasks;
}