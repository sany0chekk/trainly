import { Stack } from "expo-router";
import "../global.css";
import { View } from "react-native";
import { SafeAreaView } from "react-native";

export default function RootLayout() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(app)" />
      </Stack>
    </SafeAreaView>
  );
}
