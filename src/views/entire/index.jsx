import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EntireFilter from './c-cpns/entire-filter'
import EntirePagination from './c-cpns/entire-pagination'
import EntireRooms from './c-cpns/entire-rooms'
import { fetchRoomListAction } from '@/store/modules/entire/actionCreators'
import { EntireWrapper } from './style'

const Entire = memo(() => {
  const dispatch = useDispatch()
  const { roomList } = useSelector(state => ({
    roomList: state.entire.roomList
  }))

  useEffect(() => {
    dispatch(fetchRoomListAction())
  }, [dispatch])

  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  )
})

export default Entire