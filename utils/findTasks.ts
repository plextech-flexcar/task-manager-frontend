import { Vehicle } from '../models/Vehicle';


export function initialFindMakeAndModel(vehicleList: Vehicle[]){
    const makeFilter: {[type : string] : string[]} = {}
    for (let i = 0; i < vehicleList.length; i++) {
        // if make NOT in dict, add make and model
        const currMake = vehicleList[i].makeName
        const currModel = vehicleList[i].modelName
        if (!(currMake in makeFilter)){
            makeFilter[currMake] = []
            makeFilter[currMake].push(currModel)
        }
        //if make in dict
        else {
        //if model not in list of dict add
            if ( makeFilter[currMake].indexOf(currModel) === -1){
                makeFilter[currMake].push(currModel)
            }
        }
        //if model is in list of dict, don't do anything
      }
      console.log(makeFilter)
      return makeFilter;
}

export function initialFindMakes(vehicleList : Vehicle[]) {
    const makeFilter: {[type : string] : string[]} = {}
    for (let i = 0; i < vehicleList.length; i++) {
        // if make NOT in dict, add make and model
        const currMake = vehicleList[i].makeName
        if (!(currMake in makeFilter)){
            makeFilter[currMake] = []
        }
      }
      return makeFilter;
}
