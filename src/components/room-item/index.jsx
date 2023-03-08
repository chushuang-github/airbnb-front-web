import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import { ItemWrapper } from './style'
import { Rate, Carousel } from 'antd'
import classNames from 'classnames'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import Indicator from '@/base-ui/indicator'

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%" } = props
  const [selectIndex, setSelectIndex] = useState(0)

  // 点击轮播图的左右按钮
  const swiperRef = useRef()
  const handleBtnClick = (isRight = true) => {
    isRight ? swiperRef.current.next() : swiperRef.current.prev()
  }

  // 轮播变化之前的回调函数
  const handleBeforeChange = (from, to) => {
    setSelectIndex(to)
  }

  // 点击轮播的指示器
  const handleDotClick = (index) => {
    swiperRef.current.goTo(index, false)
  }

  // 图片
  const pictureElement = (
    <div className='cover'>
      <img src={itemData.picture_url} alt="" />
    </div>
  )

  // 轮播图
  const swiperElement = (
    <div className='swiper'>
      <div className='control'>
        <div className='btn left' onClick={() => handleBtnClick(false)}>
          <IconArrowLeft width={25}  height={25} />
        </div>
        <div className='btn right' onClick={() => handleBtnClick(true)}>
          <IconArrowRight width={25}  height={25} />
        </div>
      </div>
      <div className='indicator'>
        <Indicator selectIndex={selectIndex}>
          {
            itemData?.picture_urls?.map((item, index) => {
              return (
                <div className='item' key={item}>
                  <span 
                    className={classNames('dot', { active: selectIndex === index })}
                    onClick={() => handleDotClick(index)}
                  ></span>
                </div>
              )
            })
          }
        </Indicator>
      </div>
      <Carousel dots={false} ref={swiperRef} beforeChange={handleBeforeChange}>
        {
          itemData?.picture_urls?.map(item => {
            return (
              <div className='cover' key={item}>
                <img src={item} alt="" />
              </div>
            )
          })
        }
      </Carousel>
    </div>
  )

  return (
    <ItemWrapper 
      verifyColor={itemData?.verify_info?.text_color || "#39576a"}
      itemWidth={itemWidth}
    >
      <div className='inner'>
        {
          itemData.picture_urls ? swiperElement : pictureElement
        }
        <div className='desc'>
          {itemData.verify_info.messages.join(" · ")}
        </div>
        <div className='name'>{itemData.name}</div>
        <div className='price'>￥{itemData.price}/晚</div>
        <div className='bottom'>
          <Rate 
            value={itemData.star_rating ?? 5} 
            allowHalf 
            disabled 
            style={{ fontSize: "12px", color: "#00848a" }} 
          />
          <span className='count'>{ itemData.reviews_count }</span>
          {
            itemData?.bottom_info?.content && <span className='extra'> · { itemData?.bottom_info?.content }</span>
          }
        </div>
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object,
  itemWidth: PropTypes.string
}

export default RoomItem