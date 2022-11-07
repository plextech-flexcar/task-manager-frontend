import { atomFilters, allTasksAtom, displayTasksAtom  } from "../../atoms";
import { useAtom} from "jotai";
import { Task } from "../../models/Task";
import TaskCard from "../TaskCard/TaskCard";

export function filterTasks() {
    const [filter] = useAtom(atomFilters)
    const [allTasks] = useAtom(allTasksAtom);
    const [displayTasks, setDisplayTasks] = useAtom(displayTasksAtom);

    const newDisplayTasks : Task[] = [];

    allTasks.forEach((task : Task) => {
        if (
            (filter["Market"].length == 0 || filter["Market"].includes(task.market)) &&
            (filter["Task Type"].length == 0 || filter["Task Type"].includes(task.market)) &&
            (filter["Status"].length == 0 || filter["Status"].includes(task.market)) &&
             // TO-DO: map priorities to strings PLEASE or else will break
             (filter["Priority"].length == 0 || filter["Priority"].includes(task.market))
            // This is dependant on Ayaka's implementation, careful
            // (
            //     filter["Make & Model"].includes(task.make) &&
            //     filter["Make & Model"][task.make].includes(task.model)
            // )
        ) {
            newDisplayTasks.push(task)
        }
    })

    setDisplayTasks(newDisplayTasks)
}