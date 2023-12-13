import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native'

const CustomInput = (
    {
        placeholderProp,
        textItemProp,
        onChangeTextHandlerEvent,
        addItemToListEvent
    }
) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder={placeholderProp}
                onChangeText={onChangeTextHandlerEvent}
                value={textItemProp}
            />
            <TouchableOpacity onPress={addItemToListEvent}>
                <View style={styles.addWrapper}>
                    <Text style={styles.addText}>+</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 20,
        margin: 20,
    },
    textInput: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#636363',
        borderRadius: 60,
        borderColor: '#10002b',
        borderWidth: 1,
        width: 180,
        
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#636363',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#10002b',
        borderWidth: 1,
    },
    addText: {
        fontSize: 30
    }
})