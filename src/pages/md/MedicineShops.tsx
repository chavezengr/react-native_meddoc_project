import { Text } from 'react-native'
import { useAppDispatch, useAppSelector } from '../../redux/ducks/hooks'
import { useEffect } from 'react'

import {
  getUser0000Action,
  getuser0000 as getUserByUserName,
} from '../../redux/ducks/user/user0000'
import { getmd0000 as getSubHeaderList } from '../../redux/ducks/md/md0000'

const MedicineShops: React.FC = () => {
  const subHeaderList = useAppSelector(getSubHeaderList)
  const user = useAppSelector(getUserByUserName)

  const dispatch = useAppDispatch()
  const dummUser = 'theUser'

  useEffect(() => {
    dispatch(getUser0000Action(dummUser))
  }, [dummUser, dispatch])

  const renderUser = (
    <Text> hi {user.data?.lastName ? user.data.firstName : ''} </Text>
  )

  const renderSubHeaderList = subHeaderList.map((data) => (
    <Text key={data.id}> {data.category} </Text>
  ))

  return <>{renderUser}</>
  // return <>{renderSubHeaderList}</>
}

export default MedicineShops
