import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { useAuth } from "@/hooks/useAuth";
import tw from "@/config/tailwind";
import { styles } from "@/components/ui";

export default function LoginScreen() {
  const { signInWithGoogle } = useAuth();

  return (
    <View style={styles.container}>
      <View style={tw`justify-center items-center mb-10`}>
        <Text style={tw`text-3xl font-bold text-text uppercase`}>
          Welcome to Trainly
        </Text>
        <Text style={tw`text-text-secondary uppercase text-[10px]`}>
          Your personal workout journey starts here
        </Text>
      </View>
      <View style={tw`mb-20 items-center bg-background rounded-lg p-6`}>
        <Text style={tw`text-text text-center mb-6`}>
          Track your progress, create custom workouts,{"\n"}and achieve your
          fitness goals
        </Text>
        <View style={tw`flex-row flex-wrap justify-center gap-2`}>
          <Text
            style={tw`text-text font-bold text-xs bg-primary p-2 rounded-lg`}
          >
            Progress Tracking
          </Text>
          <Text
            style={tw`text-text font-bold text-xs bg-primary p-2 rounded-lg`}
          >
            Custom Workouts
          </Text>
          <Text
            style={tw`text-text font-bold text-xs bg-primary p-2 rounded-lg`}
          >
            Exercise Library
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={signInWithGoogle}
        style={tw`bg-text py-4 px-6 w-full flex-row items-center justify-center gap-4 rounded-full`}
      >
        <Image
          source={require("../../assets/images/google.png")}
          contentFit="contain"
          style={tw`w-[25px] h-[25px]`}
        />
        <Text style={tw`text-background font-bold text-lg text-center`}>
          Continue with Google
        </Text>
      </TouchableOpacity>
    </View>
  );
}
