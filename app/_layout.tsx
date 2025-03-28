import { SafeAreaView } from "react-native";
import AuthProvider from "@/providers/auth-provider";
import InitialLayout from "@/components/layouts/InitialLayout";
import tw from "@/config/tailwind";

export default function RootLayout() {
  return (
    <AuthProvider>
      <SafeAreaView style={tw`flex-1 bg-background-secondary`}>
        <InitialLayout />
      </SafeAreaView>
    </AuthProvider>
  );
}
