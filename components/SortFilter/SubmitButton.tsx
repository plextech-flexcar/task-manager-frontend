import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { HStack } from 'native-base';
import { styles } from '../../screens/TaskInfoScreen/TaskInfoStyles.js';
import { filterTasks } from './utilityFilter';
import { useAtom } from 'jotai';
import { allTasksAtom, displayTasksAtom, atomFilters } from '../../atoms';


const TaskInfoPopup = () => {
  const [showModal, setShowModal] = useState(true);
  const [allTasks, setAllTasks] = useAtom(allTasksAtom);
  const [displayTasks, setDisplayTasks] = useAtom(displayTasksAtom);
  const [filter, setFilter] = useAtom(atomFilters)

  const onPress = () => {
    const newDisplayTasks = filterTasks(filter, allTasks);
    setDisplayTasks(newDisplayTasks)
  };

  return (
    <SafeAreaView style={styles.whitebg}>
      <View style={styles1.contain}>
        <TouchableOpacity onPress={onPress} style={styles1.buttonPurple}>
          <Text style={styles1.buttonTextWhite}>
            <Text style={{ textAlign: 'center', justifyContent: 'center' }}>
              SHOW RESULTS
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TaskInfoPopup;

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
