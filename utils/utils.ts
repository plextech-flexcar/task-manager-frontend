import { Task } from '../models/Task';


export function initialFindMake(tasklist: Task[]){
    const makeFilter: {[type : string] : string[]}    = {}
    for (let i = 0; i < tasklist.length; i++) {
        // if make NOT in dict, add make and model
        const currMake = tasklist[i].make
        const currModel = tasklist[i].model
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
      console.log(makeFilter)
      return makeFilter;
}
