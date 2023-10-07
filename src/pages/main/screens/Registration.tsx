import * as React from 'react';
import {Text} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
// import {
//   signInWithCredential,
//   signInWithRedirect,
//   signInWithPopup,
//   createUserWithEmailAndPassword,
//   signOut,
// } from 'firebase/auth'
// import { auth, googleProvider } from '../../../config/FireBaseAuthConfig'

const Registration: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  // const signInWithGoogle = async () => {
  //   try {
  //     await signInWithRedirect(auth, googleProvider)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  // const signUpWithEmail = async () => {
  //   try {
  //     await createUserWithEmailAndPassword(auth, email, password)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  // const logOut = async () => {
  //   try {
  //     await signOut(auth)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  return (
    <>
      <Text>Registration on Gmail</Text>
      <TextInput
        label="Email"
        placeholder="Email"
        value={email}
        // onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        label="Password"
        placeholder="Password"
        value={password}
        secureTextEntry
        // onChangeText={(text) => setPassword(text)}
      />
      {/* <Button mode="contained" onPress={signUpWithEmail}>
        {'SignUp'}
      </Button>

      <Button icon={'gmail'} onPress={signInWithGoogle}>
        {'Google'}
      </Button>

      <Button mode="contained" onPress={logOut}>
        {'LogOut'}
      </Button> */}
    </>
  );
};

export default Registration;
