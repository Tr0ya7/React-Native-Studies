import { useState } from "react"
import { StyleSheet, View, Switch, Text } from "react-native"

const App = () => {
    const [switchValue, setSwitchValue] = useState<boolean>(false)

    return <View style={styles.container}><Switch value={switchValue} onValueChange={setSwitchValue} thumbColor="red" /><Text style={styles.text}>{switchValue ? "Active" : "Inactive"}</Text></View>
}

const styles = StyleSheet.create({
    container: {
        margin: 15,        
        alignItems: 'center',
        rowGap: 15
    },

    text: {
        textAlign: 'center',
        fontSize: 30
    }
})

export default App