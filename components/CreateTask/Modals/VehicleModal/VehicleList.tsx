import React from 'react';
import { View } from 'react-native';
import { Vehicle } from '../../../../models/Vehicle';
import VehicleCard from './VehicleCard';
import  { styles } from './vehicleCardStyles'

const VehicleList = ( props: { vehicles: Vehicle[] }) => {
    const { vehicles } = props;
    const lastElem = vehicles.at(-1)
    return (
    <View style={{width: '100%', height:'100%', display: 'flex', backgroundColor: '#FFFFFF', borderRadius: 8}}>
        {vehicles.map((vehicle: Vehicle) => {
            return (
            <>
                <VehicleCard vehicle={vehicle}/>
                {!(lastElem === vehicle) && <View style={styles.lineSeparator}/>}
            </>
            );
        })}
    </View>
    );
};

export default VehicleList;
