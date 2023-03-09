import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import { ItemWrapper } from './style'
import { Rate, Carousel } from 'antd'
import classNames from 'classnames'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import Indicator from '@/base-ui/indicator'

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%", itemClick } = props
  const [selectIndex, setSelectIndex] = useState(0)

  // 点击轮播图的左右按钮
  const swiperRef = useRef()
  const handleBtnClick = (isRight = true, event) => {
    event.stopPropagation()
    isRight ? swiperRef.current.next() : swiperRef.current.prev()
  }

  // 轮播变化之前的回调函数
  const handleBeforeChange = (from, to) => {
    setSelectIndex(to)
  }

  // 点击轮播的指示器
  const handleDotClick = (index, event) => {
    event.stopPropagation()
    swiperRef.current.goTo(index, false)
  }

  // 点击跳转
  const itemClickHandle = () => {
    itemClick && itemClick(itemData)
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
        <div className='btn left' onClick={(e) => handleBtnClick(false, e)}>
          <IconArrowLeft width={25}  height={25} />
        </div>
        <div className='btn right' onClick={(e) => handleBtnClick(true, e)}>
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
                    onClick={(e) => handleDotClick(index, e)}
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
      onClick={() => itemClickHandle()}
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