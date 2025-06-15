import { Picker } from "@react-native-picker/picker"
import { useState } from "react"
import { StyleSheet, Text, View } from "react-native"

const App = () => {
    const pizzas = [
        {id: 1, name: 'Strogonoff', price: 35.9}, {id: 2, name: 'Pepperoni', price: 59}, {id: 3, name: 'Four chease', price: 37}, {id: 4, name: 'Brigadeiro', price: 25.7}, {id: 5, name: 'Portguesa', price: 30}
    ]
    const [selectedPizza, setSelectedPizza] = useState<null | number>(null)

    let selectedPizzaIndex = selectedPizza! - 1

    return (
        <View style={styles.container}>
            <Text>
                Menu:
            </Text>
            <Picker selectedValue={selectedPizza} onValueChange={setSelectedPizza}>
                {pizzas.map((pizza) => <Picker.Item value={pizza.id} label={pizza.name} />)}
            </Picker>
            {selectedPizza !== null 
                ? 
                    <View style={styles.pizza}>
                        <Text style={styles.logo}>
                            You chose: {pizzas[selectedPizza - 1].name}
                        </Text>
                        <Text>
                            {pizzas[selectedPizzaIndex].price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                        </Text>
                    </View>
                :
                    <></>
            }
            {selectedPizza !== null && <Text>{selectedPizzaIndex}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },

    logo: {
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold'
    },

    pizza: {        
        alignItems: 'center',
        marginTop: 15,
        fontSize: 25
    }
})

export default App
