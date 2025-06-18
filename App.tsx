import { useState } from "react"
import { Button, Modal, StyleSheet, Text, View } from "react-native"
import Enter from "./components/Enter"

const App = () => {
    const [modalVisible, setModalVisible] = useState<boolean>(false)

    return (
        <View style={styles.container}>
            <Button title="Enter" onPress={() => setModalVisible(true)} />
            <Modal animationType="slide" visible={modalVisible} transparent={true}>
                <View style={styles.modalContent}>
                    <Enter closeModal={() => setModalVisible(false)} />
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ddd'
    },

    modalContent: {
        margin: 15,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default App