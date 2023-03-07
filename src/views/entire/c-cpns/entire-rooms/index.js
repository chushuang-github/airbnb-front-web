import React, { memo } from 'react'
import RoomItem from '@/components/room-item'
import { useSelector, shallowEqual } from 'react-redux'
import { RoomsWrapper } from './style'

const EntireRooms = memo(() => {
  
  const { roomList, totalCount, isLoading } = useSelector(state => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
    isLoading: state.entire.isLoading
  }), shallowEqual)

  return (
    <RoomsWrapper>
      <h2 className='title'>共{ totalCount }多处住所</h2>
      <div className='list'>
        {
          roomList.map(item => {
            return (
              <RoomItem key={item._id} itemData={item} itemWidth="20%" />
            )
          })
        }
      </div>
      { isLoading && <div className="cover"></div> }
    </RoomsWrapper>
  )
})

export default EntireRooms