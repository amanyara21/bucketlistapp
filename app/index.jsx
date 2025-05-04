import { Alert, FlatList, SafeAreaView, Text } from "react-native";
import AddItem from "../components/AddItem"
import ListItems from "../components/ListItems"
import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Index() {
  const [value, setValue] = useState("");
  const [destination, setDestination] = useState([]);

  useEffect(() => {
    getAllLocations();
  }, [])

  const onTextChange = (text) => {
    setValue(text);
  }

  const onAddData = async (text) => {
    text = text.trim();
    if (text.length == 0) {
      Alert.alert("Plz Add Location")
      return;
    }
    try {
      await AsyncStorage.setItem(text, JSON.stringify(false));
      getAllLocations();
      Alert.alert("Location Added Successfully");
      setValue("");
    } catch (error) {
      Alert.alert("Failed to Add Location");
    }
  }


  const getAllLocations = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const items = await AsyncStorage.multiGet(keys);

      const data = items.map(([key, value]) => ({
        key,
        visited: value ? JSON.parse(value) : false
      }));

      setDestination(data);
    } catch (error) {

    }
  }

  const toggleVisited = async (key) => {
    try {
      const item = destination.find((d) => d.key === key);
      const newStatus = !item.visited;

      await AsyncStorage.setItem(key, JSON.stringify(newStatus));
      getAllLocations();
    } catch (err) {
      console.error('Toggle Error:', err);
    }
  };

  const deleteItem = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      getAllLocations();
    } catch (err) {
      console.error('Delete Error:', err);
    }
  };

  const renderItem = ({ item }) => (
    <ListItems
      place={item.key}
      visited={item.visited}
      onToggle={() => toggleVisited(item.key)}
      onDelete={() => deleteItem(item.key)}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AddItem value={value} onTextChange={onTextChange} onAddData={onAddData} />
      <FlatList
        data={destination}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListEmptyComponent={<Text style={{textAlign:'center', marginTop:20}}>No Data Available</Text>}
        />
    </SafeAreaView>
  );
}
