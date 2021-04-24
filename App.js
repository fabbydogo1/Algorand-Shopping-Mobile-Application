import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {loadUser} from "./redux/actions/auth.js"

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

 function App() {
  return (
    <NavigationContainer>
 
    </NavigationContainer>
  );
}


const mapStateToProps = (state) => ({
  auth: state.auth,
  error: state.error,
  order: state.order
});

// export default ProjectForm
export default connect(mapStateToProps, { loadUser, setUserToken })(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
