import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigator from './tab-navigation'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import Register from './components/register-form'

const reducers = {
  form : formReducer
}

const reducer = combineReducers(reducers)
let store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)

const onSubmit = values => {
  console.log("values:", values)
  window.alert(JSON.stringify(values, null, 4))
}

export default function App() {
  return (
    <Provider store={store}>
      <Register onSubmit={onSubmit}/>
    </Provider>
  );
}
/**
 *  <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
