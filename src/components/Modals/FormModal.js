import React from 'react';
import { StyleSheet} from 'react-native';
import { Portal, Modal} from 'react-native-paper';

const FormModal = props => {
  return (
    <Portal>
      <Modal {...props}
        style={{...styles.modalStyle, ...props.style}} 
        contentContainerStyle={{...styles.contentStyle,...props.contentContainerStyle}}
      >
        {props.children}
      </Modal>
    </Portal>
  )
};

const styles = StyleSheet.create({
  modalStyle: {
    alignItems: 'center',
  },

  contentStyle: {
    backgroundColor: 'white',
    padding: 20,
    maxWidth: '90%',
    maxHeight: '95%'
  },
});

export default FormModal;





