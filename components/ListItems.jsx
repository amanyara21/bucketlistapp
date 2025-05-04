import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons, Feather, Ionicons } from '@expo/vector-icons';

export default function ListItem({ place, visited, onToggle, onDelete }) {
    return (
        <View style={styles.card}>
            <View style={styles.info}>
                <Text style={styles.place}>{place}</Text>
                <View style={styles.row}>
                    <Text style={[styles.status, { color: visited ? 'green' : 'red' }]}>
                        {visited ? 'Visited' : 'Not Visited'}
                    </Text>
                    <Ionicons
                        name={visited ? 'checkmark-circle' : 'close-circle'}
                        size={20}
                        color={visited ? 'green' : 'red'}
                    />
                </View>
            </View>

            <View style={styles.actions}>
                <TouchableOpacity style={styles.toggleButton} onPress={onToggle}>
                    <Feather name="repeat" size={20} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
                    <MaterialIcons name="delete" size={20} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 16,
        margin: 8,
        borderRadius: 12,
        elevation: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
    },
    info: {
        flex: 1,
    },
    place: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginVertical: 4,
    },
    status: {
        fontSize: 16,
        fontWeight: '600',
    },

    actions: {
        flexDirection: 'row',
        gap: 10,
        marginLeft: 10,
    },
    toggleButton: {
        backgroundColor: '#0077cc',
        padding: 10,
        borderRadius: 8,
    },
    deleteButton: {
        backgroundColor: '#cc0000',
        padding: 10,
        borderRadius: 8,
    },
});
