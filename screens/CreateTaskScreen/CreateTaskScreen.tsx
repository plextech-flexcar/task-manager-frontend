import { HStack, VStack } from "native-base";
import React, { useState } from "react";
import { SafeAreaView, ScrollView, View, Text, ImageSourcePropType } from "react-native";
import CreateTaskHeader from "../../components/CreateTask/CreateTaskHeader/CreateTaskHeader";
import DropdownSection from "../../components/CreateTask/DropdownSection/DropdownSection";
import AssignModal from "../../components/CreateTask/Modals/AssignModal";
import DescriptionModal from "../../components/CreateTask/Modals/DescriptionModal";
import PriorityModal from "../../components/CreateTask/Modals/PriorityModal";
import TaskTypeModal from "../../components/CreateTask/Modals/TaskTypeModal";
import PlaceholderTaskCard from "../../components/CreateTask/PlaceholderTaskCard/PlaceholderTaskCard";
import GenericButton from "../../components/GenericButton/GenericButton";
import { styles } from "./createTaskScreenStyles"

const CreateTaskScreen = () => {
    const [type, setType] = useState('');
    const [priority, setPriority] = useState(0);
    const [priorityText, setPriorityText] = useState('');
    const [priorityIcon, setPriorityIcon] = useState(null as unknown as ImageSourcePropType)
    const [vehicle, setVehicle] = useState('1');
    const [description, setDescription] = useState('');
    const [assignedStatus, setAssignedStatus] = useState('');
    const [assigned, setAssigned] = useState('Denver Nguyen');
    const [license, setLicense] = useState('1');
    const [mva, setMva] = useState('');
    const [visibleModal, setVisibleModal] = useState('1');
    const assignedPair = (assigned) || assignedStatus==="Open";
    const isDisabled = !([priority, vehicle, assignedPair, license, mva].every((value) => !!value));
    const searchIcon = require('../../assets/CreateTaskIcons/searchIcon.png');
    console.log(isDisabled)

    const showModal = (title: string) => {
        setVisibleModal(title)
    }

    const changePriority = (p: number, t: string, i: ImageSourcePropType) => {
        setPriority(p); 
        setPriorityText(t);
        setPriorityIcon(i);
    }

    return (
        <>
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
                        value={type}
                    />
                    <DropdownSection 
                        title={"Priority"} 
                        placeholder={"Assign priority"}
                        dropdownArrow={true}
                        onPress={showModal}
                        value={priorityText}
                        icon={priorityIcon}
                    />
                    <DropdownSection 
                        title={"Task Description"} 
                        placeholder={"Define task description"}
                        dropdownArrow={false}
                        onPress={showModal}
                        value={description}
                    />
                    <DropdownSection 
                        title={"Vehicle MVA, VIN, or License plate"} 
                        placeholder={"Search for vehicle"}
                        dropdownArrow={false}
                        onPress={showModal}
                    />
                    <DropdownSection 
                        title={"Status"} 
                        placeholder={"Assign Status"}
                        dropdownArrow={true}
                        onPress={showModal}
                        value={assignedStatus}
                    />
                    {(assignedStatus === "Assigned") && 
                        <DropdownSection 
                            title={"Assigned To"} 
                            placeholder={"Search for user"}
                            dropdownArrow={false}
                            onPress={showModal}
                            icon={searchIcon}
                        />
                    }
                </VStack>   
            </ScrollView>
            <View style={styles.footer}>
                <HStack space={3} style={styles.buttonContainer}>
                    <GenericButton isPurple={false} text={'CANCEL'}/>
                    <GenericButton isPurple={true} text={'CREATE TASK'} isDisabled={isDisabled}/>
                </HStack>
            </View>
            <PriorityModal
                showModal={visibleModal==="Priority"}
                changePriority={changePriority}
                onClose={() => setVisibleModal('')}   
            />    
            <DescriptionModal
                showModal={visibleModal==="Task Description"}
                changeDescription={(comment) => setDescription(comment)}
                onClose={() => setVisibleModal('')}
            />
            <TaskTypeModal
                showModal={visibleModal==="Task Type"}
                changeTask={(type) => setType(type)}
                onClose={() => setVisibleModal('')}
            />
            <AssignModal
                showModal={visibleModal==="Status"}
                changeStatus={(status) => setAssignedStatus(status)}
                onClose={() => setVisibleModal('')}
            />
    </>
    )
}

export default CreateTaskScreen