/* eslint-disable react-hooks/rules-of-hooks */
import { Task } from '../models/Task';
import { useAtom } from 'jotai';
import { allTasksAtom, atomFilterOptions } from '../atoms';


export function createMakeAndModelFilter() {
    const [allTasks] = useAtom<Task[]>(allTasksAtom);
    const [filter, setFilter] = useAtom(atomFilterOptions)

    const makeFilter: {[type : string] : string[]} = {}
    for (let i = 0; i < allTasks.length; i++) {
        // if make NOT in dict, add make and model
        const currMake = allTasks[i].make
        const currModel = allTasks[i].model
        if (!(currMake in makeFilter)){
            makeFilter[currMake] = []
            makeFilter[currMake].push(currModel)
        }
        //if make in dict
        else{
        //if model not in list of dict add
        if ( makeFilter[currMake].indexOf(currModel) === -1){
            makeFilter[currMake].push(currModel)
        }
        }
        //if model is in list of dict, dont do anything
      }
      
      const newFilter = filter;
      newFilter["Make & Model"] = makeFilter;
      setFilter(atomFilterOptions)
}
