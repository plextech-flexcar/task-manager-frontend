import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import { styles } from './styles.js';
import { 
  allTasksAtom, 
  atomFilterOptions, 
  atomFilters, 
  atomModalVisible, 
  displayTasksAtom, 
  searchQueryAtom, 
  sortFilterHeaderAtom, 
  vehicleIdToLicense, 
  vehicleIdToMVA 
} from '../../atoms';
import { useAtom } from 'jotai';
import { searchFilteredTasks } from '../../utils/searchFilteredTasks';

export default function HeaderButton(props: { buttonName: string }) {
  const { buttonName } = props;
  const [isActive, setIsActive] = useAtom(sortFilterHeaderAtom);
  const [filter, setFilter] = useAtom(atomFilters)
  const [filterOptions, setFilterOptions] = useAtom(atomFilterOptions)
  const [isModalVisible, setModalVisible] = useAtom(atomModalVisible);
  const [allTasks] = useAtom(allTasksAtom)
  const [mva] = useAtom(vehicleIdToMVA)
  const [license] = useAtom(vehicleIdToLicense)
  const [query] = useAtom(searchQueryAtom) 
  const [displayTasks, setDisplayTasks] = useAtom(displayTasksAtom)

  const handleClick = () => {
    if (buttonName === 'Sort & Filter') {
      setModalVisible(true);
    } else {
      setIsActive(false)
      const defaultFilter = {
        "Market": [],
        "Task Type": [],
        "Make & Model": {},
        "Status": [],
        "Priority" : [],
        "Quick View": [],
    };
      const defaultMakesModels = filterOptions["Make & Model"]
      Object.keys(defaultMakesModels).forEach((make: string) => {
        (defaultFilter["Make & Model"] as any)[make] = [];
      })
      setFilter(defaultFilter);
      const newDisplayTasks = searchFilteredTasks(query, mva, license, allTasks)
      setDisplayTasks(newDisplayTasks);
    }
  };

  const numFilters = () => {
    if (buttonName === 'Reset') {
      return ''
    }
    let count = 0;
    Object.keys(filter).forEach((key) => {
      if (key !== "Make & Model" && filter[key].length !== 0) {
        count++
      } else if (key === "Make & Model") {
        Object.keys(filter["Make & Model"]).forEach((make: string) => {
          if (filter["Make & Model"][make].length !== 0) {
            count++
          }
        })
      }
    })
    if (count !== 0) {
      setIsActive(true)
      return ': ' + count.toString()
    }
    return ''
  }
  return (
    <>  
      <TouchableHighlight
        style={isActive && buttonName === 'Sort & Filter' ? styles.active : styles.notActive}
        onPress={handleClick}
        underlayColor={'#CECED0'}
      >
        <>
          <Text style={isActive && buttonName === 'Sort & Filter' ? styles.activeButton : styles.notActiveButton}>
            {buttonName + numFilters()}
          </Text>
        </>
      </TouchableHighlight>
    </>
  );
}
