import React from 'react';
import { View, Box, Text, HStack } from "native-base";
import { styles } from './dropdownSectionStyles';
import { TouchableOpacity, Image } from 'react-native';


const DropdownSection = (
    {
        title, 
        placeholder,
        dropdownArrow,
        isSearch,
        onPress,
    } : {
        title: string, 
        placeholder: string,
        dropdownArrow: boolean,
        isSearch?: boolean,
        onPress: React.Dispatch<React.SetStateAction<any>>,

    }) => {
        const downArrow = require('../../../assets/CreateTaskIcons/downArrow.png')
        const searchIcon = require('../../../assets/CreateTaskIcons/searchIcon.png')
        return (
            <View style={styles.dropdownSection}>
                <Text style={styles.titleText} >{title}</Text>
                <TouchableOpacity onPress={() => onPress(title)}>
                    <Box style={styles.dropdown}>
                        <HStack justifyContent={dropdownArrow ? "space-between" : ""} alignItems = {"center"}>
                            {isSearch && <Image source={searchIcon} style={ {height: 17.5, width: 17.5, marginRight: 11.5} }/>}
                            <Text style={styles.placeholderText}>{placeholder}</Text>
                            {dropdownArrow && <Image source={downArrow} style={ {height: 8.5, width: 15.5} }/>}
                        </HStack>
                    </Box>
                </TouchableOpacity>
            </View>
        )
}

export default DropdownSection



