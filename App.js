import "react-native-get-random-values";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/home/HomeScreen";
import DatabaseScreen from "./screens/database/DatabaseScreen";
import AboutScreen from "./screens/AboutScreen";
import AntDesign from "@expo/vector-icons/AntDesign";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import SaveGrade from "./screens/home/SaveGrade";
import GradeInput from "./screens/home/GradeInput";
import EditScore from "./screens/database/EditScore";
import { GradesProvider } from "./context/GradesContext";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#0B6623",
        },
        headerTitleStyle: {
          color: "#f5f5f5",
          fontWeight: "bold",
        },
        headerBackImageSource: require("./assets/back.png"),
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Input Scores" component={GradeInput} />
    </Stack.Navigator>
  );
}

function DatabaseStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#0B6623",
        },
        headerTitleStyle: {
          color: "#f5f5f5",
          fontWeight: "bold",
        },
        headerBackImageSource: require("./assets/back.png"),
      }}
    >
      <Stack.Screen name="Database" component={DatabaseScreen} />
      <Stack.Screen name="Edit Score" component={EditScore} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <GradesProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: "#f5f5f5",
            tabBarActiveBackgroundColor: "#0B6623",
            tabBarInactiveTintColor: "#dddddd",
            tabBarInactiveBackgroundColor: "#728C69",
            tabBarLabelStyle: {
              fontSize: 16,
              fontWeight: "bold",
            },
            headerStyle: {
              backgroundColor: "#0B6623",
            },
            headerTitleStyle: {
              color: "#f5f5f5",
              fontWeight: "bold",
            },
          }}
        >
          <Tab.Screen
            name="HomeWrapper"
            component={HomeStack}
            options={{
              tabBarIcon: ({ color }) => (
                <AntDesign name="home" size={20} color={color} />
              ),
              headerShown: false,
              tabBarLabel: "Home",
            }}
          />
          <Tab.Screen
            name="DatabaseWrapper"
            component={DatabaseStack}
            options={{
              tabBarIcon: ({ color }) => (
                <AntDesign name="database" size={20} color={color} />
              ),
              headerShown: false,
              tabBarLabel: "Databases",
            }}
          />
          <Tab.Screen
            name="About"
            component={AboutScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <AntDesign name="infocirlce" size={20} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </GradesProvider>
  );
}
