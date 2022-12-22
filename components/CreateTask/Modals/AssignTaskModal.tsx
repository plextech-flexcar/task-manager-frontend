import React from "react";
import { Modal } from "native-base";
import NameListScreen from "../../../screens/NameListScreen/NameListScreen";
import { styles } from "./styles.js";


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
    return (
        <Modal
        _backdrop={{bg: "#2A00A5"}}
        isOpen={showModal}
        onClose={() => onClose()}
        safeAreaTop={true}
        style={styles.modal}
        size={'full'}
        >
          <NameListScreen closeCall={onClose} onAssignCall={changeAssigned} />
        </Modal>
    )
}

export default AssignTaskModal