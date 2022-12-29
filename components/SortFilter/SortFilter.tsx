import { ScrollView } from 'native-base';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import Modal from 'react-native-modal';
import CircleCheckBox from './CircleCheckBox';
import FilterBox from './FilterBox';
import SquareBoxes from './SquareBoxes';
import { atomFilterOptions, atomFilters, atomModalVisible } from '../../atoms';
import { useAtom } from 'jotai';
import SubmitButton from './SubmitButton';
import { styles } from './styles.js';
import CheckBoxFilter from './CheckBoxFilter';

export default function SortFilter() {
  const [isModalVisible, setModalVisible] = useAtom(atomModalVisible);
  const [title, setTitle] = useState('Sort & Filter');
  const [filterOptions] = useAtom(atomFilterOptions);
  const [filter, setFilter] = useAtom(atomFilters);
  const [modalIcon, setModalIcon] = useState('closeModal');
  const displayModalIcon = modalIcon === "closeModal" ? 
  require('../../assets/images/navigation/close-button.webp') : require('../../assets/images/navigation/back-arrow.webp');

  const toggleModal = () => {
    setTitle('Sort & Filter');
    setModalVisible(!isModalVisible);
  };

  const changeFilter = (filterName: string) => {
    setTitle(filterName);
    setModalIcon('backArrow');
  };

  const filterModal = (title: string) => {
    if (title === "Sort & Filter") {
      return (<>
        <CircleCheckBox />
        <FilterBox changeFilter={changeFilter} />
      </>);
    } else if (title === 'Make & Model') {
      return (<CheckBoxFilter changeFilter={changeFilter} />)
    } else {
      return (<SquareBoxes filterCategory={title} />)
    }
  }

  const resetFilters = () => {
    const defaultFilter = {
      "Market": [],
      "Task Type": [],
      "Make & Model": {},
      "Status": [],
      "Priority" : [],
      "Quick View": [],
  };
    const defaultMakesModels = filterOptions["Make & Model"];
    Object.keys(defaultMakesModels).forEach((make: string) => {
      (defaultFilter["Make & Model"] as any)[make] = [];
    })
    setFilter(defaultFilter);
  }

  const modalNavigation = () => {
    if (title === 'Sort & Filter') {
      toggleModal();
    } else if (title in filterOptions['Make & Model']) {
        setTitle('Make & Model')
    } else {
      setModalIcon('closeModal');
      setTitle('Sort & Filter');
    }
  };

  return (
    <SafeAreaView style={styles.sortFilterView}>
      <Modal
        hideModalContentWhileAnimating
        animationOut={'slideOutDown'}
        backdropOpacity={0.2}
        backdropColor={'#27007A'}
        isVisible={isModalVisible}
        style={styles.view}
        onSwipeComplete={toggleModal}
        // swipeDirection="down"
      >
        <SafeAreaView style={styles.modalView}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={modalNavigation}>
              <View style={styles.modalIcon}>
                <Image
                  source={displayModalIcon}
                  style={{ height: 16, width: 16 }}
                />
                {title !== 'Sort & Filter' ? <Text style={styles.backText}> Back </Text> : <></>}
              </View>
            </TouchableOpacity>
            <Text style={styles.modalHeaderTitle}>{title}</Text>
            <TouchableOpacity onPress={resetFilters}>
              <View style={styles.modalIcon}>
                {title === 'Sort & Filter' ? <Text style={styles.resetText}> Reset </Text> : <></>}
              </View>
            </TouchableOpacity>
          </View>
          <View style={{display: 'flex', justifyContent: 'space-between', height: '90%'}}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
              {filterModal(title)}
            </ScrollView>
            <SubmitButton changeFilter={changeFilter}/>
          </View>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}
