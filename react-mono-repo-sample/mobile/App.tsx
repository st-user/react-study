import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppRegistry } from 'react-native';
import { Button, Provider, Toast } from '@ant-design/react-native';

export default function App() {
  return (
    <Provider>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!!</Text>
        <StatusBar style="auto" />
        <Button onPress={() => Toast.info('This is a toast tips')}>
          Start
        </Button>
      </View>
    </Provider>
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
