import { HStack, VStack } from "native-base";
import React, { useState } from "react";
import { SafeAreaView, ScrollView, View, Text, ImageSourcePropType } from "react-native";
import CreateTaskHeader from "../../components/CreateTask/CreateTaskHeader/CreateTaskHeader";
import DropdownSection from "../../components/CreateTask/DropdownSection/DropdownSection";
import StatusModal from "../../components/CreateTask/Modals/StatusModal";
import DescriptionModal from "../../components/CreateTask/Modals/DescriptionModal";
import PriorityModal from "../../components/CreateTask/Modals/PriorityModal";
import TaskTypeModal from "../../components/CreateTask/Modals/TaskTypeModal";
import PlaceholderTaskCard from "../../components/CreateTask/PlaceholderTaskCard/PlaceholderTaskCard";
import GenericButton from "../../components/GenericButton/GenericButton";
import { styles } from "./createTaskScreenStyles"
import VehicleModal from "../../components/CreateTask/Modals/VehicleModal/VehicleModal";
import AssignTaskModal from "../../components/CreateTask/Modals/AssignTaskModal";
import VehicleDropdown from "../../components/CreateTask/Modals/VehicleModal/VehicleDropdown";
import { Task } from "../../models/Task";
import { allTasksAtom, currUserAtom } from "../../atoms";
import { useAtom } from "jotai";
import { useNavigation } from "@react-navigation/native";

const CreateTaskScreen = () => {
    const [currUser] = useAtom(currUserAtom);
    const [allTasks, setAllTasks] = useAtom(allTasksAtom);
    const [type, setType] = useState('');
    const [priority, setPriority] = useState(0);
    const [priorityText, setPriorityText] = useState('');
    const [priorityIcon, setPriorityIcon] = useState(null as unknown as ImageSourcePropType)
    const [vehicleId, setVehicleId] = useState(-1);
    const [description, setDescription] = useState('');
    const [assignedStatus, setAssignedStatus] = useState('');
    const [assigned, setAssigned] = useState('');
    const [userId, setUserId] = useState(-1);
    const [visibleModal, setVisibleModal] = useState('');
    const assignedPair = (assigned) || assignedStatus==="Open";
    const isDisabled = !([priority, assignedPair, description].every((value) => !!value) && vehicleId !== -1);
    const searchIcon = require('../../assets/CreateTaskIcons/searchIcon.png');
    const navigation = useNavigation();

    const submitTask = async (inputTask: Task) => {
        fetch(`http://localhost:8080/api/v1/createTask`, {
          mode: 'cors',
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Origin': 'http://localhost:19006',
          },
          body: JSON.stringify(inputTask),
        })
          .then((response) => response.json())
          .then((json) => {
            setAllTasks([...allTasks, json]);
          });
      };
    const onSubmit = () => {
        const newTask: Task = {
            vehicleId: vehicleId,
            type: type,
            status: assignedStatus === "Open" ? "OPEN" : "ASSIGNED",
            description: description,
            assigned: userId,
            creator: currUser?.firstName + ' ' + currUser?.lastName,
            priority: priority
        }
        submitTask(newTask);
        allTasks.push(newTask)
        setAllTasks(allTasks)
        navigation.navigate('TaskListScreen')
    }
    

    const showModal = (title: string) => {
        setVisibleModal(title)
    }

    const changePriority = (p: number, t: string, i: ImageSourcePropType) => {
        setPriority(p); 
        setPriorityText(t);
        setPriorityIcon(i);
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <VStack style = {styles.vstack}>
                    <CreateTaskHeader/>
                    <PlaceholderTaskCard 
                        type={type} 
                        priority={priority}
                        vehicleId={vehicleId}
                        assigned={assigned}
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
                    {/* <DropdownSection 
                        title={"Vehicle MVA, VIN, or License plate"} 
                        placeholder={"Search for vehicle"}
                        dropdownArrow={false}
                        onPress={showModal}
                        value={String(vehicleId)}
                    /> */}
                    <VehicleDropdown
                        title={"Vehicle MVA, VIN, or License plate"} 
                        placeholder={"Search for vehicle"}
                        dropdownArrow={false}
                        onPress={showModal}
                        vehicleId={vehicleId}
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
                            value={assigned}
                        />
                    }
                </VStack>   
            </ScrollView>
            <View style={styles.footer}>
                <HStack space={3} style={styles.buttonContainer}>
                    <GenericButton isPurple={false} text={'CANCEL'}/>
                    <GenericButton isPurple={true} text={'CREATE TASK'} isDisabled={isDisabled} functionCall={onSubmit}/>
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
            <StatusModal
                showModal={visibleModal==="Status"}
                changeStatus={(status) => setAssignedStatus(status)}
                onClose={() => setVisibleModal('')}
            />
            <VehicleModal
                showModal={visibleModal==="Vehicle MVA, VIN, or License plate"}
                changeVehicle={(vehicleId) => setVehicleId(vehicleId)}
                //add more functionality to change dropdown to display
                onClose={() => setVisibleModal('')}
            />
            <AssignTaskModal
                showModal={visibleModal==="Assigned To"}
                changeAssigned={(assignedPerson) => {setAssigned(assignedPerson)}}
                onClose={() => setVisibleModal('')}
                changeUser={(userId) => setUserId(userId)}
            />
            

    </SafeAreaView>
    )
}

export default CreateTaskScreen