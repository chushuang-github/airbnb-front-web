import * as actionTypes from './constants'
import { getEntireRoomList } from '@/services/modules/entire'

export const changeCurrentPageAction = (currentPage) => {
  return {
    type: actionTypes.CHANGE_CURRENT_PAGE,
    currentPage
  }
}

export const changeTotalCountAction = (totalCount) => {
  return {
    type: actionTypes.CHANGE_TOTAL_COUNT,
    totalCount
  }
}

export const changeRoomListAction = (roomList) => {
  return {
    type: actionTypes.CHANGE_ROOM_LIST,
    roomList
  }
}

// 发送网络请求
export const fetchRoomListAction = () => {
  return async (dispatch, getState) => {
    // 根据页码获取数据
    const currentPage = getState().entire.currentPage
    const res = await getEntireRoomList(currentPage * 20)
    
    // 获取到最新的数据，保存到redux中
    const { list, totalCount } = res
    dispatch(changeTotalCountAction(totalCount))
    dispatch(changeRoomListAction(list))
  }
}