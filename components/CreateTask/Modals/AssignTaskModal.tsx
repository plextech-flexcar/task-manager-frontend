import React from "react";
import { Modal } from "native-base";
import NameListScreen from "../../../screens/NameListScreen/NameListScreen";
import { styles } from "./styles.js";
import { User } from '../../../models/User'


const AssignTaskModal = (
    {
        showModal,
        changeAssigned,
        onClose,
      }: {
        showModal: boolean;
        changeAssigned: (s: string) => void;
        onClose: () => void;
      }
) => {
    const onAssign = (user: User) => {
      onClose();
      changeAssigned(user.firstName + ' ' + user.lastName)
    };
    return (
        <Modal
        _backdrop={{bg: "#2A00A5"}}
        isOpen={showModal}
        onClose={() => onClose()}
        safeAreaTop={true}
        style={styles.modal}
        size={'full'}
        >
          <NameListScreen closeCall={onClose} onAssignCall={onAssign} />
        </Modal>
    )
}

export default AssignTaskModal