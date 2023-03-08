import React, { memo, useCallback } from 'react'
import RoomItem from '@/components/room-item'
import { useSelector, shallowEqual } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RoomsWrapper } from './style'

const EntireRooms = memo(() => {
  
  const { roomList, totalCount, isLoading } = useSelector(state => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
    isLoading: state.entire.isLoading
  }), shallowEqual)

  const navigate = useNavigate()
  const itemClickhandle = useCallback((itemData) => {
    // 路由跳转传参：通过state的方式传参，刷新state方式传递的参数是不会消失的
    navigate('/detail', {
      state: itemData
    })
  }, [navigate])

  return (
    <RoomsWrapper>
      <h2 className='title'>共{ totalCount }多处住所</h2>
      <div className='list'>
        {
          roomList.map(item => {
            return (
              <RoomItem 
                key={item._id} 
                itemData={item} 
                itemWidth="20%"
                itemClick={itemClickhandle}
              />
            )
          })
        }
      </div>
      { isLoading && <div className="cover"></div> }
    </RoomsWrapper>
  )
})

export default EntireRooms