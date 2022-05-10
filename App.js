import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View,
  Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import Home from './Home'

const Stack = createNativeStackNavigator();

function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Home Sweet Home</Text>
      <StatusBar style="auto" />
      <Button
        title='Go to login'
        onPress={() => navigation.navigate('Login', {data : "Jensen is here"})}
      />
    </View>
  );
}

function Login({navigation, route}) {
  return (
    <View style={styles.container}>
      <Text>Login Screen - {route.params.data}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Login' component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
