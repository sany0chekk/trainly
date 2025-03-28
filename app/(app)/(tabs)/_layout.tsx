import { COLORS } from "@/config/theme";
import { Tabs } from "expo-router";
import { Book, Dumbbell, User, History, Bike } from "lucide-react-native";
export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary.default,
        tabBarInactiveTintColor: COLORS.text.secondary,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: COLORS.background.default,
          borderColor: "transparent",
          height: 40,
          paddingTop: 10,
        },
      }}
    >
      <Tabs.Screen
        name="workout"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Dumbbell color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="programs"
        options={{
          tabBarIcon: ({ color, size }) => <Book color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          tabBarIcon: ({ color, size }) => (
            <History color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="exercises"
        options={{
          tabBarIcon: ({ color, size }) => <Bike color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}
