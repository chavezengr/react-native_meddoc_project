import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import * as RootNavigation from '../../../utils/RootNavigation'

const Login: React.FC = () => {
  const handleLogin = () => {
    RootNavigation.navigate('Home')
  }

  return (
    <>
      <View style={styles.container}>
        <TextInput
          mode="outlined"
          label="Username"
          placeholder="Input username"
          right={<TextInput.Affix text="/100" />}
        />
        <TextInput
          mode="outlined"
          label="Password"
          placeholder="Input password"
          secureTextEntry
          right={<TextInput.Icon icon="eye" />}
        />
        <Button style={styles.button} mode="contained" onPress={handleLogin}>
          Login
        </Button>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    justifyContent: 'center',
  },
  button: {
    marginTop: 20,
    width: '80%',
    justifyContent: 'center',
  },
})

export default Login
