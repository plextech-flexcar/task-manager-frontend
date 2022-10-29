import React from "react"
import {
     SafeAreaView,
     StyleSheet,
     View
} from "react-native"
import {styles} from "./styles"
import { Name } from "../../models/Name"
import NameCardList from "../../components/NameCardList/NameCardList"
import PurpleHeader from "../../components/PurpleHeader"
import AssignModalFunc from "../../components/TaskAssign/AssignModal"

const NameListScreen = () => {
    let name1: Name = {
        FullName:"Nandish Khandhar",
        priority: "high",
      }
      let name: Name[] = [
        name1,
        name1,
        name1,
        name1,
        name1,
        name1,

      ]

    return (
        <SafeAreaView style={styles.view}>
         <h3>Assign 4 Tasks</h3>
          <AssignModalFunc/>
         
          <NameCardList name={name} />
      
        </SafeAreaView>
    )
}

export default NameListScreen