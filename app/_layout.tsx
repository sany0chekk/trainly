import "../global.css";
import { SafeAreaView } from "react-native";
import AuthProvider from "@/providers/auth-provider";
import InitialLayout from "@/components/InitialLayout";

export default function RootLayout() {
  return (
    <AuthProvider>
      <SafeAreaView className="flex-1 bg-background">
        <InitialLayout />
      </SafeAreaView>
    </AuthProvider>
  );
}
