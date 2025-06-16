import { StyleSheet, Text, View } from "react-native"
import Slider from "@react-native-community/slider"
import { useState } from "react"

const App = () => {
    const [sliderValue, setSliderValue] = useState<number>(0)

    return (
        <View style={styles.container}>
            <Text style={styles.sliderValueText}>
                {sliderValue.toFixed()}
            </Text>
            <Slider minimumValue={0} maximumValue={100} minimumTrackTintColor="#00ff00" maximumTrackTintColor="#ff0000" value={sliderValue} onValueChange={setSliderValue} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15
    },

    sliderValueText: {
        textAlign: 'center',
        fontSize: 30
    }
})

export default App