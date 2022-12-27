import React from 'react';
import { View, Box, Text, HStack } from "native-base";
import { styles } from './dropdownSectionStyles';
import { TouchableOpacity, Image, ImageSourcePropType } from 'react-native';


const DropdownSection = ({
        title, 
        placeholder,
        dropdownArrow,
        value,
        icon,
        onPress,
    } : {
        title: string, 
        placeholder: string,
        dropdownArrow: boolean,
        value?: string,
        icon?: ImageSourcePropType,
        onPress: React.Dispatch<React.SetStateAction<any>>,
    }) => {
        const downArrow = require('../../../assets/images/navigation/down-arrow.webp')
        
        return (
            <View style={styles.dropdownSection}>
                <Text style={styles.titleText} >{title}</Text>
                <TouchableOpacity onPress={() => onPress(title)}>
                    <Box style={styles.dropdown}>
                        <HStack justifyContent={dropdownArrow ? "space-between" : ""} alignItems = {"center"}>
                            <HStack>
                                {icon && <Image source={icon} style={ {height: 17.5, width: 17.5, marginRight: 11.5} }/>}
                                {value ? <Text style={styles.valueText}>{value}</Text>
                                : <Text style={styles.placeholderText}>{placeholder}</Text>}
                            </HStack>
                            {dropdownArrow && <Image source={downArrow} style={ {height: 8.5, width: 15.5} }/>}
                        </HStack>
                    </Box>
                </TouchableOpacity>
            </View>
        )
}

export default DropdownSection



