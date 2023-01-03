import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
} from 'react-native';
import { styles } from '../../screens/TaskInfoScreen/TaskInfoStyles.js';
import { filterTasks } from '../../utils/utilityFilter';
import { useAtom } from 'jotai';
import {
  allTasksAtom,
  filteredTasksAtom,
  atomFilters,
  atomModalVisible,
  searchQueryAtom,
  vehicleIdToLicense,
  vehicleIdToMVA,
  displayTasksAtom,
  allVehiclesAtom,
  atomSorts
} from '../../atoms';
import { searchFilteredTasks } from '../../utils/searchFilteredTasks';
import GenericButton from '../GenericButton/GenericButton';
import { SORT_MAP } from '../../utils/utilitySort';

export default function SubmitButton(props: {
  changeFilter: React.Dispatch<React.SetStateAction<any>>;
}) {
  const { changeFilter } = props;
  const [isModalVisible, setModalVisible] = useAtom(atomModalVisible);
  const [allTasks, setAllTasks] = useAtom(allTasksAtom);
  const [filteredTasks, setFilteredTasks] = useAtom(filteredTasksAtom);
  const [filter, setFilter] = useAtom(atomFilters);
  const [allVehicles, setAllVehicles] = useAtom(allVehiclesAtom);
  const [displayTasks, setDisplayTasks] = useAtom(displayTasksAtom)
  const [searchQuery] = useAtom(searchQueryAtom);
  const [mva] = useAtom(vehicleIdToMVA);
  const [license] = useAtom(vehicleIdToLicense);
  const [sort] = useAtom(atomSorts)

  const onPress = () => {
    const filteredTasks = filterTasks(filter, allTasks, allVehicles);
    setModalVisible(false);
    setFilteredTasks(filteredTasks);
    const newDisplayTasks = searchFilteredTasks(searchQuery, mva, license, filteredTasks)
    const sortFunction = SORT_MAP[sort] as Function
    const sortedDisplayTasks = sortFunction(newDisplayTasks)
    setDisplayTasks(sortedDisplayTasks);
    changeFilter('Sort & Filter');
    
  };

  return (
    <SafeAreaView style={styles.footer}>
        <View style={{margin: 15, height: '100%'}}>
          <GenericButton
            isPurple={true}
            functionCall={onPress}
            text={'SHOW RESULTS'}
          />
        </View>
    </SafeAreaView>
  );
}
