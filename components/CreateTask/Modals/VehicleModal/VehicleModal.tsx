import React, { useState } from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import { Modal } from 'native-base';
import { styles } from '../styles.js';
import { allVehiclesAtom } from '../../../../atoms';
import { useAtom } from 'jotai';
import VehicleList from './VehicleList';
import { Vehicle } from '../../../../models/Vehicle.js';

const VehicleModal = (({
    showModal,
    changeVehicle,
    onClose,
  }: {
    showModal: boolean;
    changeVehicle: (vehicleId:number) => void;
    onClose: () => void;
  }) => {
  const [allVehicles] = useAtom(allVehiclesAtom);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [displayVehicles, setDisplayVehicles] = useState(Object.values(allVehicles))
  const onSubmit = (vehicleId: number) => {
    changeVehicle(vehicleId);
    onClose();
  }
  const mva: { [vehicleId: number]: string } = {};
  const license: {[vehicleId: number]: string } = {};
  const vin: {[vehicleId: number]: string } = {};
  for (const vehicleId in allVehicles) {
    const vehicleIdNum = Number.parseInt(vehicleId);
    const vehicle = allVehicles[vehicleIdNum]
    mva[vehicleIdNum] = vehicle.mva;
    license[vehicleIdNum] = vehicle.license;
    vin[vehicleIdNum] = vehicle.vin;
  }
  const onChangeSearch = (query: string) => {
    setSearchQuery(query)
    const pattern = new RegExp('^' + query + '[a-zA-Z0-9]*');
    console.log(query)
    const matches = new Set<number>();
    for (const vehicleId in mva) {
      const vehicleIdNum = Number.parseInt(vehicleId);
      if (pattern.test(mva[vehicleIdNum])) {
        matches.add(vehicleIdNum);
      }
    }

    for (const vehicleId in license) {
      const vehicleIdNum = Number.parseInt(vehicleId);
      if (pattern.test(license[vehicleIdNum])) {
        matches.add(vehicleIdNum);
      }
    }

    for (const vehicleId in vin) {
      const vehicleIdNum = Number.parseInt(vehicleId);
      if (pattern.test(vin[vehicleIdNum])) {
        matches.add(vehicleIdNum);
      }
    }

    const newDisplayVehicles: Vehicle[] = [];
    matches.forEach((vehicleId: number) => {
      newDisplayVehicles.push(allVehicles[vehicleId])
    })
    setDisplayVehicles(newDisplayVehicles);
    console.log(displayVehicles);
  };
  return (
    <View style= {{width: '100%'}}>
      <Modal
        _backdrop={{bg: "#2A00A5"}}
        isOpen={showModal}
        onClose={() => onClose()}
        safeAreaTop={true}
        style={styles.modal}
        size={'full'}
      >
        <KeyboardAvoidingView
          style={styles.whitebg}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <Modal.CloseButton
              variant="#2A00A5"
              tintColor="#2A00A5"
              color="#2A00A5"
            />
          <Modal.Header style={{backgroundColor: '#EDEDED', borderTopLeftRadius: 20, borderTopRightRadius: 20,}}>
            <Text style={styles.modalHeaderTitle}>
              Search For Vehicle
            </Text>
            <Searchbar
              placeholder="MVA, VIN or license plate"
              placeholderTextColor="#76757D"
              onChangeText={onChangeSearch}
              value={searchQuery}
              style={styles.searchBar}
              inputStyle={{ fontSize: 15 }}
            />
          </Modal.Header>
          <Modal.Body style={{display: 'flex', justifyContent: 'flex-start'}}>
            <VehicleList vehicles={displayVehicles} changeVehicle={onSubmit}/>
          </Modal.Body>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
});

export default VehicleModal;
