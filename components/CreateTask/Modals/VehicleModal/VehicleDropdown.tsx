import React from 'react';
import { View, Box, Text, HStack } from "native-base";
import { styles } from '../../DropdownSection/dropdownSectionStyles';
import { TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import VehicleCard from './VehicleCard';
import { allVehiclesAtom } from '../../../../atoms';
import { useAtom } from 'jotai';

const VehicleDropdown = ({
        title, 
        placeholder,
        dropdownArrow,
        vehicleId,
        icon,
        onPress,
    } : {
        title: string, 
        placeholder: string,
        dropdownArrow: boolean,
        vehicleId: number,
        icon?: ImageSourcePropType,
        onPress: React.Dispatch<React.SetStateAction<any>>,
    }) => {
        const [allVehicles] = useAtom(allVehiclesAtom);
        
        const downArrow = require('../../../../assets/images/navigation/down-arrow.webp')
        const vehicleData = allVehicles[vehicleId]
        return (
            <View style={vehicleId === -1 ? styles.dropdownSection :styles.vehicleDropdownSection}>
                <Text style={styles.titleText} >{title}</Text>
                <TouchableOpacity onPress={() => onPress(title)}>
                    <Box style={styles.dropdown}>
                        <HStack justifyContent={dropdownArrow ? "space-between" : ""} alignItems = {"center"}>
                            <HStack style= {{width: "100%"}}>
                                {icon && <Image source={icon} style={ {height: 17.5, width: 17.5, marginRight: 11.5} }/>}
                                {vehicleId !== -1 ? <VehicleCard vehicle={vehicleData}/>
                                : <Text style={styles.placeholderText}>{placeholder}</Text>}
                            </HStack>
                            {dropdownArrow && <Image source={downArrow} style={ {height: 8.5, width: 15.5} }/>}
                        </HStack>
                    </Box>
                </TouchableOpacity>
            </View>
        )
}

export default VehicleDropdown



