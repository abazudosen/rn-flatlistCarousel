import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import eventList from "./eventList";
import eventsListDetails from "./eventsListDetails";

const Stack = createSharedElementStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ gestureEnabled: false }}
        headerMode={null}
      >
        <Stack.Screen name="eventList" component={eventList} />
        <Stack.Screen
          name="eventsListDetails"
          component={eventsListDetails}
          sharedElementsConfig={(route, otherRoute, showing) => {
            const { item } = route.params;

            return [
              {
                id: `item.${item.key}.image`,
              },
              {
                id: "general.bg",
              },
            ];
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
