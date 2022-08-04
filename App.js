import React from "react";
import StackNavigation from "./src/navigation/stackNav/StackNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import rootReducer from "./src/redux/reducer";
import { createStore } from "redux";

const store = createStore(rootReducer);


class App extends React.Component {

  render() {
    return (
      <Provider store={store} >
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </Provider>
    )
  }
}

export default App; 