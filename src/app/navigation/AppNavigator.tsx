import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackParamList } from "../../shared/types/navigation";

const Stack = createStackNavigator<RootStackParamList>();
