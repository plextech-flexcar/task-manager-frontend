import { Task } from "../../models/Task";


export function filterTasks(filter : any, allTasks : Task[]) {

    const newDisplayTasks : Task[] = [];

    allTasks.forEach((task : Task) => {

        if (
            (filter["Market"].length === 0 || filter["Market"].includes(task.market)) &&
            (filter["Task Type"].length === 0 || filter["Task Type"].includes(task.type)) &&
            (filter["Status"].length === 0 || filter["Status"].includes(task.status)) &&
             // TO-DO: map priorities to strings PLEASE or else will break
             (filter["Priority"].length === 0 || filter["Priority"].includes(task.priority))
            // This is dependent on Ayaka's implementation, careful
            // (
            //     filter["Make & Model"].includes(task.make) &&
            //     filter["Make & Model"][task.make].includes(task.model)
            // )
        ) {
            newDisplayTasks.push(task)
        }
    })

    return newDisplayTasks
}