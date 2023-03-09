import React, { memo, useState } from 'react'
import PictureBrowser from '@/base-ui/picture-browser'
import { DetailPictureWrapper } from './style'

const DetailPicture = memo((props) => {
  const { picturesData } = props
  const [showBrowser, setShowBrowser] = useState(false)

  const genRightPicItem = (item) => {
    return (
      <div className='item' key={item}>
        <img src={item} alt=""/>
      </div>
    )
  }

  return (
    <DetailPictureWrapper>
      <div className='pictures'>
        <div className='left'>
          <div className='item'>
            <img src={picturesData?.[0]} alt="" />
          </div>
        </div>
        <div className='right'>
          {
            picturesData?.slice(1, 5).map(genRightPicItem)
          }
        </div>
      </div>

      <div className='show-btn' onClick={() => setShowBrowser(true)}>显示照片</div>

      { showBrowser && <PictureBrowser pictureUrls={picturesData} close={() => setShowBrowser(false)} /> }
    </DetailPictureWrapper>
  )
})

export default DetailPicture