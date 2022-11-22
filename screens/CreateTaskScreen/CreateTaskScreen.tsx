import { VStack, View } from "native-base";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import CreateTaskHeader from "../../components/CreateTask/CreateTaskHeader/CreateTaskHeader";
import DropdownSection from "../../components/CreateTask/DropdownSection/DropdownSection";
import PlaceholderTaskCard from "../../components/CreateTask/PlaceholderTaskCard/PlaceholderTaskCard";
import { styles } from "./createTaskScreenStyles"

const CreateTaskScreen = () => {
    const [type, setType] = useState('');
    const [priority, setPriority] = useState(0);
    const [vehicle, setVehicle] = useState('');
    const [assigned, setAssigned] = useState('');
    const [license, setLicense] = useState('');
    const [mva, setMva] = useState('');
    const [visibleModal, setVisibleModal] = useState('')

    const showModal = (title: string) => {
        setVisibleModal(title)
    }

    return (
        <SafeAreaView>
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
        </SafeAreaView>
    )
}

export default CreateTaskScreen