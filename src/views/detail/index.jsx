import React, { memo } from 'react'
import { useLocation } from 'react-router-dom'
import DetailPicture from './c-cpns/detail-picture'
import { DetailWrapper } from './style'

const Detail = memo(() => {
  const location = useLocation()
  const detailInfo = location.state

  return (
    <DetailWrapper>
      <DetailPicture picturesData={detailInfo.picture_urls}/>
    </DetailWrapper>
  )
})

export default Detail