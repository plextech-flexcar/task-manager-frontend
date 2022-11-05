import { atom, useAtom } from 'jotai'
export const atomModalVisible = atom(false);
export const atomFilterOptions = atom({
    "market": ["Boston", "Atlanta", "Nashville", "Charlotte"],
    "task type": ["Body damage/Collision", "Small dent/Scratch", "Glass chip", "Glass crack or scratch", "Tire pressure", "Low tread", "Tech", "Key issue", "Battery issue", "Check engine", "Mechanical issue", "Oil light on"],
    "make & model": [],
    "status": ["Open", "Assigned", "Resolved", "Reopened"],
    "priority": ["Low", "Normal", "High", "Top"],
    "quick view": ["Assigned to me", "All unassigned", "Recently opened", "Quick turn", "Older than 48hrs"]
});
export const atomFilters = atom({
    "market": [],
    "task type": [],
    "make & model": [],
    "status": [],
    "priority" : [],
    "quick view": []
})
