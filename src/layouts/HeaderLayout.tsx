import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import AppBar from '../components/AppBar'

export interface IFunctions {
  handleSearch: Function
  handleCart: Function
}

const HeaderLayout: React.FC = () => {
  const [icons, newIcons] = useState<string[]>([])

  const handleSearch = () => {
    const newIcon = 'magnify'
    newIcons([...icons, newIcon])
  }

  const handleCart = () => {
    const newIcon = 'cart'
    newIcons([...icons, newIcon])
  }

  const handleNavFunctions: IFunctions = {
    handleCart,
    handleSearch,
  }

  const props = {
    icons,
    styles,
    handleNavFunctions: handleNavFunctions,
  }

  return (
    <>
      <AppBar {...props} />
    </>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -50,
  },
  header: {},
})

export default HeaderLayout
