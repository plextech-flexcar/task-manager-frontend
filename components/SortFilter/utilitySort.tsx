import { Task } from "../../models/Task"

//take in list of task objects and sort them

export const sortByPriorityAscending = (tasks: Task[]) => {
    return tasks.sort((a,b) => (a.priority - b.priority));
}
export const sortByPriorityDescending = (tasks: Task[]) => {
    return tasks.sort((a,b) => (b.priority - a.priority));
}
export const sortByAlphabetical = (tasks: Task[]) => {
    return tasks.sort((a,b) => (a.priority > b.priority) ? -1 : ((a.priority < b.priority) ? 1 : 0))
}

export const sortByDateNewest = (tasks: Task[]) => {
    return tasks.sort((a,b) => (b.taskAge - a.taskAge));
}

export const sortByDateLatest = (tasks: Task[]) => {
    return tasks.sort((a,b) => (a.taskAge - b.taskAge));
}

