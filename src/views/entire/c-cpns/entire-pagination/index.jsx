import React, { memo } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { Pagination } from 'antd'
import { PaginationWrapper } from './style'
import { changeCurrentPageAction, fetchRoomListAction } from '@/store/modules/entire/actionCreators'

const EntirePagination = memo(() => {
  const dispatch = useDispatch()
  const { totalCount, currentPage } = useSelector(state => ({
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage
  }), shallowEqual)

  const start = (currentPage - 1) * 20 + 1
  const end = currentPage * 20

  const handlePageChange = (newPage) => {
    window.scrollTo(0, 0)
    dispatch(changeCurrentPageAction(newPage))
    dispatch(fetchRoomListAction())
  }

  return (
    <PaginationWrapper>
      <Pagination
        current={currentPage} 
        pageSize={20}
        total={totalCount}
        showSizeChanger={false} 
        onChange={handlePageChange} 
      />
      <div className='info'>
        第 {start} ~ {end} 个房源，一共 {totalCount} 个房源
      </div>
    </PaginationWrapper>
  )
})

export default EntirePagination