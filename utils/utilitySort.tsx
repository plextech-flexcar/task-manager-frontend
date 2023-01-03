import { Task } from "../models/Task"
//take in list of task objects and sort them

const sortByPriorityAscending = (tasks: Task[]) => {
    return tasks.sort((a: Task, b: Task) => (a.priority - b.priority));
}
const sortByPriorityDescending = (tasks: Task[]) => {
    return tasks.sort((a: Task, b: Task) => (b.priority - a.priority));
}
const sortByAlphabetical = (tasks: Task[]) => {
    return tasks.sort((a: Task, b: Task) => (a.type > b.type) ? 1 : ((a.type < b.type) ? -1 : 0))
}
const sortByDateNewest = (tasks: Task[]) => {
    return tasks.sort((a: Task, b: Task) => (b?.date - a?.date));
}
const sortByDateLatest = (tasks: Task[]) => {
    return tasks.sort((a: Task, b: Task) => (a?.date - b?.date));
}

export const SORT_MAP = {
    "Alphabetical": sortByAlphabetical,
    'Priority: Top to low': sortByPriorityDescending,
    'Priority: Low to top': sortByPriorityAscending,
    'Oldest to newest': sortByDateLatest,
    'Newest to oldest': sortByDateNewest,
}

