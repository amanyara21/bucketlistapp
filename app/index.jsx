import { Alert, FlatList, SafeAreaView, Text } from "react-native";
import AddItem from "../components/AddItem"
import ListItems from "../components/ListItems"
import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Index() {
  const [value, setValue] = useState(""); // State for text input
  const [destination, setDestination] = useState([]); // State for the Destination List

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
      await AsyncStorage.setItem(text, JSON.stringify(false)); // Add Name as Key and visited(false as default) as value in Async Storage
      getAllLocations();
      Alert.alert("Location Added Successfully");
      setValue("");
    } catch (error) {
      Alert.alert("Failed to Add Location");
    }
  }

  // Get All the data from Async Storage by getting all the keys and then get all items from the keys as store it in the state
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

  // Function for toggle visited value (true-> false or false-> true) and save it into AsyncStorage
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

  // Function to Delete Item using key
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
