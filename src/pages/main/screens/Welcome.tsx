import * as React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Button } from 'react-native-paper'
import * as RootNavigation from '../../../utils/RootNavigation'

const Welcome: React.FC = () => {
  const handleRegistration = () => {
    RootNavigation.navigate('Registration')
  }

  const handleLogin = () => {
    RootNavigation.navigate('Login')
  }

  return (
    <>
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome to My App</Text>
        <Text style={styles.subtitle}>Enjoy your healthy life</Text>
        <Button
          mode="contained"
          onPress={handleRegistration}
          style={styles.button}
        >
          {'  Sign Up '}
        </Button>
        <Text> Already have an account?</Text>

        <TouchableOpacity onPress={handleLogin}>
          <Text> Login </Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 32,
  },
  button: {
    marginTop: 32,
    width: '80%',
  },
})

export default Welcome
