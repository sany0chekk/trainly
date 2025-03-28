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
          height: 60,
          position: "absolute",
          bottom: 20,
          left: 20,
          right: 20,
          borderRadius: 30,
          paddingTop: 10,
          paddingBottom: 10,
          marginHorizontal: 20,
          elevation: 0,
          shadowColor: COLORS.background.default,
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.1,
          shadowRadius: 8,
        },
      }}
      initialRouteName="workout"
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
