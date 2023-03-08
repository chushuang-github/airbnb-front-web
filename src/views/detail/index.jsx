import React, { memo } from 'react'
import { useLocation } from 'react-router-dom'
import HousePicture from './c-cpns/house-picture'
import { DetailWrapper } from './style'

const Detail = memo(() => {
  const location = useLocation()
  const detailInfo = location.state

  return (
    <DetailWrapper>
      <HousePicture picturesData={detailInfo.picture_urls}/>
    </DetailWrapper>
  )
})

export default Detail