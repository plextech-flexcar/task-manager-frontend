import { HStack, VStack } from "native-base";
import React, { useState } from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import CreateTaskHeader from "../../components/CreateTask/CreateTaskHeader/CreateTaskHeader";
import DropdownSection from "../../components/CreateTask/DropdownSection/DropdownSection";
import PlaceholderTaskCard from "../../components/CreateTask/PlaceholderTaskCard/PlaceholderTaskCard";
import GenericButton from "../../components/GenericButton/GenericButton";
import { styles } from "./createTaskScreenStyles"

const CreateTaskScreen = () => {
    const [type, setType] = useState('1');
    const [priority, setPriority] = useState(1);
    const [vehicle, setVehicle] = useState('1');
    const [assigned, setAssigned] = useState('Denver Nguyen');
    const [license, setLicense] = useState('1');
    const [mva, setMva] = useState('');
    const [visibleModal, setVisibleModal] = useState('1');
    const isDisabled = !([priority, vehicle, assigned, license, mva].every((value) => !!value));
    console.log(isDisabled)

    const showModal = (title: string) => {
        setVisibleModal(title)
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView>
                <VStack style = {styles.vstack}>
                    <CreateTaskHeader/>
                    <PlaceholderTaskCard 
                            type={type} 
                            priority={priority}
                            vehicle={vehicle}
                            assigned={assigned}
                            license={license}
                            mva={mva}
                    />
                    <DropdownSection 
                        title={"Task Type"} 
                        placeholder={"Select task type"}
                        dropdownArrow={true}
                        onPress={showModal}
                    />
                    <DropdownSection 
                        title={"Priority"} 
                        placeholder={"Assign priority"}
                        dropdownArrow={true}
                        onPress={showModal}
                    />
                    <DropdownSection 
                        title={"Task Description"} 
                        placeholder={"Define task description"}
                        dropdownArrow={false}
                        onPress={showModal}
                    />
                    <DropdownSection 
                        title={"Vehicle MVA, VIN, or License plate"} 
                        placeholder={"Search for vehicle"}
                        dropdownArrow={false}
                        isSearch={true}
                        onPress={showModal}
                    />
                    <DropdownSection 
                        title={"Status"} 
                        placeholder={"Assign Status"}
                        dropdownArrow={true}
                        onPress={showModal}
                    />
                </VStack>   
            </ScrollView>
                <View style={styles.footer}>
                    <HStack space={3} style={styles.buttonContainer}>
                        <GenericButton isPurple={false} text={'CANCEL'}/>
                        <GenericButton isPurple={true} text={'CREATE TASK'} isDisabled={isDisabled}/>
                    </HStack>
                </View>
        </SafeAreaView>
    )
}

export default CreateTaskScreen