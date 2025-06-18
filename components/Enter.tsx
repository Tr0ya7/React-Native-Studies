import { Button, GestureResponderEvent, StyleSheet, Text, View } from "react-native"

const Enter = ({ closeModal }: { closeModal: (event: GestureResponderEvent) => void }) => <View style={styles.hi}><Text style={styles.hiText}>Good to see u!</Text><Button title="Exit" onPress={ closeModal } /></View>

const styles = StyleSheet.create({
    hi: {
        backgroundColor: '#292929',
        width: '100%',
        height: 350,
        borderRadius: 15
    },

    hiText: {
        color: 'white',
        fontSize: 28,
        paddingTop: 15,
        textAlign: 'center'
    }
})

export default Enter