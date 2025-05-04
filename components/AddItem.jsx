import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function AddItem({ value, onTextChange, onAddData }) {
    return (
        <View style={styles.box}>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onTextChange}
                placeholder="Enter Location"
                placeholderTextColor="#888"
            />
            <TouchableOpacity style={styles.button} onPress={() => { onAddData(value) }}>
                <Text style={styles.buttonText}>ADD</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
    },
    input: {
        flex: 1,
        height: 48,
        borderWidth: 1.5,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 12,
        fontSize: 16,
        backgroundColor: '#fff',
        marginRight: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    button: {
        height: 48,
        paddingHorizontal: 20,
        backgroundColor: '#007AFF',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#007AFF',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 3,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
