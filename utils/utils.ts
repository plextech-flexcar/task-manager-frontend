import task from "../models/Task"


export function initialFindMake(tasklist: task[]){
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
        if (!(currModel in makeFilter[currMake])){
            makeFilter[currMake].push(currModel)
        }
        }
        //if model is in list of dict, dont do anything
      }
      return makeFilter;
}
