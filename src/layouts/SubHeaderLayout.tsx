import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import AppBar from '../components/AppBar'

export interface IFunctions {
  handleSearch: Function
  handleCart: Function
}

const SubHeaderLayout: React.FC = () => {
  const [icons, newIcons] = useState<string[]>([])

  const [functionList, newNavFunction] = useState<Function[]>([])

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

  newNavFunction([...functionList, handleSearch])

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

export default SubHeaderLayout
