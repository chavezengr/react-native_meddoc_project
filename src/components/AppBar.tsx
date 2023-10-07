import * as React from 'react'
import { Appbar } from 'react-native-paper'

interface IComponentProps {
  icons: string[]
  styles: any
  handleNavFunctions: any
}

const AppBar: React.FC<IComponentProps> = (props) => {
  const { styles, icons, handleNavFunctions } = props

  return (
    <>
      <Appbar.Header style={styles.container}>
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon="cart" onPress={() => {}} />
      </Appbar.Header>
    </>
  )
}

export default AppBar
