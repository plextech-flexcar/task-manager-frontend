import { ScrollView, HStack } from 'native-base';
import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Modal from 'react-native-modal';
import CircleCheckBox from './CircleCheckBox';
import FilterBox from './FilterBox';
import SquareBoxes from './SquareBoxes';
import { atomFilterOptions, atomModalVisible } from '../../atoms';
import { useAtom } from 'jotai';
import SubmitButton from './SubmitButton';
import { styles } from './styles.js';
import CheckBoxFilter from './CheckBoxFilter';

export default function SortFilter() {
  const [isModalVisible, setModalVisible] = useAtom(atomModalVisible);
  const [title, setTitle] = useState('Sort & Filter');
  const [filterOptions, setFilterOptions] = useAtom(atomFilterOptions);

  const [modalIcon, setModalIcon] = useState('closeModal');

  const toggleModal = () => {
    setTitle('Sort & Filter');
    setModalVisible(!isModalVisible);
  };

  const changeFilter = (filterName: string) => {
    console.log(filterName);
    setTitle(filterName);
    setModalIcon('backChevronModal');
  };

  const modalNavigation = () => {
    if (title === 'Sort & Filter') {
      toggleModal();
    } else {
      setModalIcon('closeModal');
      setTitle('Sort & Filter');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Modal
        hasBackdrop
        hideModalContentWhileAnimating
        animationOut={'slideOutDown'}
        backdropOpacity={0.2}
        backdropColor={'#27007A'}
        isVisible={isModalVisible}
        style={styles.view}
        onSwipeComplete={toggleModal}
        swipeDirection="down"
      >
        <View style={styles.modalView}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={modalNavigation}>
              <View style={styles.modalIcon}>
                <Image
                  source={require(`../../assets/${modalIcon}.png`)}
                  style={{ height: 16, width: 16 }}
                ></Image>
                {title !== 'Sort & Filter' && <Text style={styles.backText}> Back </Text>}
              </View>
            </TouchableOpacity>
            <Text style={styles.modalHeaderTitle}>{title}</Text>
          </View>
          <ScrollView>
            {title === 'Sort & Filter' && (
              <>
                <CircleCheckBox />
                <FilterBox changeFilter={changeFilter} />
              </>
            )}
            {title === 'Market' && <SquareBoxes filterCategory={title} />}
            {title === 'Task Type' && <SquareBoxes filterCategory={title} />}
            {title === 'Make & Model' && (
              <CheckBoxFilter filterCategory={title} changeFilter={changeFilter} />
            )}
            {title === 'Status' && <SquareBoxes filterCategory={title} />}
            {title === 'Priority' && <SquareBoxes filterCategory={title} />}
            {title === 'Quick View' && <SquareBoxes filterCategory={title} />}
            {title in filterOptions['Make & Model'] && (
              <SquareBoxes filterCategory={title} />
            )}
          </ScrollView>
          <View>
            {' '}
            <SubmitButton changeFilter={changeFilter} />{' '}
          </View>
        </View>
      </Modal>
    </View>
  );
}
