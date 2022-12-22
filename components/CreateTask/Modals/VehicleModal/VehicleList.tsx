import React from 'react';
import { Pressable, View } from 'react-native';
import { Vehicle } from '../../../../models/Vehicle';
import VehicleCard from './VehicleCard';
import  { styles } from './vehicleCardStyles'

const VehicleList = ({
    changeVehicle,
    vehicles,
  }: {
    changeVehicle: (n: number) => void;
    vehicles: Vehicle[];
  }) => {
    const lastElem = vehicles.at(-1)
    const onPress = (vehicleId: number) => {
        changeVehicle(vehicleId)
    }
    return (
    <View style={{width: '100%', height:'100%', display: 'flex', backgroundColor: '#FFFFFF', borderRadius: 8}}>
        {vehicles.map((vehicle: Vehicle) => {
            return (
            <>
                <Pressable onPress={() => onPress(vehicle.vehicleId)}>
                    <VehicleCard vehicle={vehicle}/>
                </Pressable>
                {!(lastElem === vehicle) && <View style={styles.lineSeparator}/>}
            </>
            );
        })}
    </View>
    );
};

export default VehicleList;
