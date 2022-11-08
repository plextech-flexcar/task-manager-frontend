import { ScrollView, HStack } from 'native-base';
import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Modal from 'react-native-modal';
import CircleCheckBox from './CircleCheckBox';
import FilterBox from './FilterBox';
import SquareBoxes from './SquareBoxes';
import { atomFilterOptions, atomModalVisible } from '../../atoms';
import { useAtom } from 'jotai';
import { flexbox } from 'native-base/lib/typescript/theme/styled-system';

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
            {title === 'Status' && <SquareBoxes filterCategory={title} />}
            {title === 'Priority' && <SquareBoxes filterCategory={title} />}
            {title === 'Quick View' && <SquareBoxes filterCategory={title} />}
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalIcon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalView: {
    height: '85%',
    backgroundColor: '#EDEDED',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },

  modalHeader: {
    paddingVertical: 15,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'baseline',
    paddingHorizontal: 15,
    width: '55%',
  },
  modalHeaderTitle: {
    fontSize: 17,
  },
  backText: {
    fontfamily: 'Inter',
    color: '#2A00A5',
    fontWeight: '400',
    fontSize: 20,
  },
});
