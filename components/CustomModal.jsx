import { View, Text, Modal, StyleSheet, Button } from 'react-native'

const CustomModal = (
    {
        animationTypeProp,
        isVisibleProp,
        itemSelectedProp,
        onDeleteItemHandlerEvent,
        setModalVisibleEvent
    }
) => {
    return (
        <Modal style={styles.modalContainer} animationType={animationTypeProp} visible={isVisibleProp}>
            <View style={styles.modalMessageContainer}>
                <Text style={styles.modalText}>Se eliminará: </Text>
                <Text>{itemSelectedProp.value}</Text>
            </View>
            <View style={styles.modalButtonContainer}>
                <Button title="Cancelar" color="#ccc" onPress={() => setModalVisibleEvent(!isVisibleProp)} />
                <Button title="Si, eliminar" color="#ef233c" onPress={onDeleteItemHandlerEvent} />
            </View>
        </Modal>
    )
}

export default CustomModal

const styles = StyleSheet.create({
    
    modalMessageContainer: {
        padding: 100,
        backgroundColor: "#fff",
        alignItems: "center",
        borderRadius: 50,
        borderColor: "#ccc",
        justifyContent: "center"
    },
    modalButtonContainer: {
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingTop: 20
    }
})