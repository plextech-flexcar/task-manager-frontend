import { atom, useAtom } from 'jotai'
import { Task } from './models/Task';

export const allTasksAtom = atom<Task[]>([])
export const displayTasksAtom = atom<Task[]>([])
export const atomModalVisible = atom(false);

export const atomFilterOptions = atom<Record<string, any>>({
    "Market": ["Boston", "Atlanta", "Nashville", "Charlotte"],
    "Task Type": ["Body damage/Collision", "Small dent/Scratch", "Glass chip", "Glass crack or scratch", "Tire pressure", "Low tread", "Tech", "Key issue", "Battery issue", "Check engine", "Mechanical issue", "Oil light on"],
    "Make & Model": {},
    "Status": ["Open", "Assigned", "Resolved", "Reopened"],
    "Priority": ["Low", "Normal", "High", "Top"],
    "Quick View": ["Assigned to me", "All unassigned", "Recently opened", "Quick turn", "Older than 48hrs"]
});
export const atomFilters = atom<Record<string, any>>({
    "Market": [],
    "Task Type": [],
    "Make & Model": {},
    "Status": [],
    "Priority" : [],
    "Quick View": []
})
export const atomSorts = atom("")
