import { useState } from "react"
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Alert, Keyboard } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"

const App = () => {
    const [input, setInput] = useState('')
    const [name, setName] = useState('')

    const saveName = async () => {
        Alert.alert('Saved!')
        Keyboard.dismiss()

        if (input !== name) await AsyncStorage.setItem('name', input)

        await AsyncStorage.getItem('name').then((value) => setName(value))
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <TextInput style={styles.input} value={input} onChangeText={setInput} underlineColorAndroid="transparent" />
                <TouchableOpacity onPress={saveName}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.name}>
                {name}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,        
        marginTop: 20,
        alignContent: 'center'
    },

    content: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    input: {
        width: 350,
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        margin: 10
    },

    buttonText: {
        backgroundColor: 'black',
        color: 'white',
        height: 40,
        padding: 10,
        marginLeft: 4
    },

    name: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 15
    }
})

export default App