import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { styles } from '../../screens/TaskInfoScreen/TaskInfoStyles.js';
import { filterTasks } from './utilityFilter';
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
  allVehiclesAtom
} from '../../atoms';
import { searchFilteredTasks } from '../../utils/searchFilteredTasks';

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

  const onPress = () => {
    console.log(filter)
    const filteredTasks = filterTasks(filter, allTasks, allVehicles);
    setModalVisible(false);
    setFilteredTasks(filteredTasks);
    const newDisplayTasks = searchFilteredTasks(searchQuery, mva, license, filteredTasks)
    setDisplayTasks(newDisplayTasks);
    changeFilter('Sort & Filter');
  };

  return (
    <SafeAreaView style={styles.whitebg}>
      <View style={styles1.contain}>
        <TouchableOpacity onPress={onPress} style={styles1.buttonPurple}>
          <Text style={[styles1.buttonTextWhite, { textAlign: 'center', justifyContent: 'center' }]}>
              SHOW RESULTS
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles1 = StyleSheet.create({
  buttonGroup: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    textAlign: 'center',
    backgroundColor: '#FFF',
    borderColor: '#2A00A5',
    borderWidth: 2,
    padding: 10,
    borderRadius: 30,
    width: '100%',
    flex: 1,
  },
  buttonText: {
    color: '#2A00A5',
    fontWeight: '700',
  },
  buttonPurple: {
    textAlign: 'center',
    backgroundColor: '#2A00A5',
    padding: 10,
    borderRadius: 30,
    width: '100%',
    flex: 1,
  },
  buttonTextWhite: {
    color: '#FFF',
    fontWeight: '700',
  },
  contain: {
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  modal: {
    width: '100%',
    borderBottomWidth: 0,
    textAlign: 'center',
  },
  bottomModal: {
    marginBottom: 0,
    marginTop: 'auto',
    borderBottomWidth: 0,
  },
});
