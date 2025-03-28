import { useAuth } from "@/hooks/useAuth";
import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";

export default function InitialLayout() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    user
      ? router.replace("/(app)/(tabs)/home")
      : router.replace("/(auth)/login");
  }, [user]);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
