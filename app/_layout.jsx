import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitle: "Travel BucketList",
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
          color: '#333',
        },
      }}
    />
  );
}

