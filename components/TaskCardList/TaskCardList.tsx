import React from 'react';
import { 
    View, 
    FlatList, 
    ListRenderItem
 } from 'react-native';
 import TaskCard from '../TaskCard/TaskCard';
 import { Task } from '../../models/task';

 const TaskCardList = (props: {
    tasks: Task[]
 }) => {
    let {tasks} = props;

    const renderTaskCard: ListRenderItem<Task>= ({ item }) => {
        return (
            <TaskCard {...item} />
        )
    }

    return (
        <View>
            <FlatList
                data={tasks}
                renderItem={renderTaskCard}
            />
        </View>
    )
}

export default TaskCardList