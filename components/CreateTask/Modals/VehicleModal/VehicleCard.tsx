import React from 'react';
import { Image } from 'react-native';
import { Box, View, Text } from 'native-base';
import  { styles } from './vehicleCardStyles'
import { Vehicle } from '../../../../models/Vehicle';

const VehicleCard = ({vehicle} : {vehicle: Vehicle}) => {
    return (
        <Box style={[styles.card, {borderRadius:8}]}>
            <View style={styles.middleHorizontalStack}>
                <View>
                    <Text style={styles.textCarType}>
                        {vehicle.color} {vehicle.makeName} {vehicle.modelName}
                    </Text>
                    <Text style={styles.textTop}>
                        {vehicle.license}, {vehicle.state} • {vehicle.mva}
                    </Text>
                    <Text style={styles.textTop}>VIN: {vehicle.vin}</Text>
                    <Text style={styles.textTop}>{vehicle.marketName}</Text>
                    <View style={vehicle.vehicleStatus ? styles.availableBox : styles.unavailableBox}>
                        <Text>{vehicle.vehicleStatus ? 'Available' : 'Unavailable/Service'}</Text>
                    </View>
                </View>
                <Image style={styles.image} source={{ uri: vehicle.carImage }} />
            </View>
        </Box>
    )
}

export default VehicleCard;