import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import CreateTaskHeader from "../../components/CreateTask/CreateTaskHeader";
import PlaceholderTaskCard from "../../components/CreateTask/PlaceholderTaskCard";

const CreateTaskScreen = () => {
    const [type, setType] = useState('');
    const [priority, setPriority] = useState(0);
    const [vehicle, setVehicle] = useState('');
    const [assigned, setAssigned] = useState('');
    const [license, setLicense] = useState('');
    const [mva, setMva] = useState('');

    return (
        <SafeAreaView>
            <CreateTaskHeader/>
            <PlaceholderTaskCard 
                type={type} 
                priority={priority}
                vehicle={vehicle}
                assigned={assigned}
                license={license}
                mva={mva}
            ></PlaceholderTaskCard>
        </SafeAreaView>
    )
}

export default CreateTaskScreen