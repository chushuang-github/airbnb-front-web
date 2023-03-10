import { changeHeaderConfigAction } from '@/store/modules/main'
import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import DetailPicture from './c-cpns/detail-picture'
import { DetailWrapper } from './style'

const Detail = memo(() => {
  const location = useLocation()
  const detailInfo = location.state
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: true, topOpacity: false }))
  }, [dispatch])

  return (
    <DetailWrapper>
      <DetailPicture picturesData={detailInfo.picture_urls}/>
    </DetailWrapper>
  )
})

export default Detail