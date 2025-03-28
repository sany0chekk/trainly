import { TouchableOpacity } from "react-native";
import tw from "@/config/tailwind";

export const Button = TouchableOpacity;

export const styles = {
  container: tw`flex-1 p-4 pb-10 bg-background-secondary`,
  text: tw`text-text`,
  heading: tw`text-text font-bold text-2xl`,
  button: tw`bg-primary py-4 px-6 rounded-full`,
};
