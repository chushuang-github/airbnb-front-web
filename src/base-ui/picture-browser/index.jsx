import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import { PictureBrowserWrapper } from './style'
import IconColse from '@/assets/svg/icon-close'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconDown from '@/assets/svg/icon-down'
import IconUp from '@/assets/svg/icon-up'
import Indicator from '@/base-ui/indicator'
import classNames from 'classnames'

const PictureBrowser = memo((props) => {
  const { pictureUrls, close } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isNext, setIsNext] = useState(false)
  const [isToggle, setIsToggle] = useState(true)

  // 但图片浏览器展示出来的时候，让滚动条消失
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  // 关闭
  const closeBtnClickHandle = () => {
    close && close()
  }

  // 左右按钮
  const controlClickHandle = (isNext = true) => {
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1
    if(newIndex < 0) newIndex = pictureUrls.length - 1
    if(newIndex > pictureUrls.length - 1) newIndex = 0
    setCurrentIndex(newIndex)
    setIsNext(isNext)
  }

  // 图片指示器
  const itemClickHandle = (index) => {
    if(index < currentIndex) {
      setIsNext(false)
    }else {
      setIsNext(true)
    }
    setCurrentIndex(index)
  }

  return (
    <PictureBrowserWrapper isNext={isNext}>
      <div className='top'>
        <div className='close-btn' onClick={closeBtnClickHandle}>
          <IconColse width={24} height={24} />
        </div>
      </div>
      <div className='slider'>
        <div className='control'>
          <div className='btn left' onClick={() => controlClickHandle(false)}>
            <IconArrowLeft width={70}  height={70} />
          </div>
          <div className='btn right' onClick={() => controlClickHandle(true)}>
            <IconArrowRight width={70} height={70} />
          </div>
        </div>
        <div className='picture'>
          <SwitchTransition mode='in-out'>
            <CSSTransition
              classNames="pic"
              // timeout是必传的属性
              timeout={200}
              // key不一样，就表示不是同一个组件，点击按钮的时候会重新渲染一个组件
              key={pictureUrls[currentIndex]}
            >
              <img src={pictureUrls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className='preview'>
        <div className='info'>
          <div className='desc'>
            <div className='count'>
              <span>{currentIndex + 1}/{ pictureUrls.length }：</span>
              <span>room apartment图片{currentIndex + 1}</span>
            </div>
            <div className='toggle' onClick={() => setIsToggle(!isToggle)}>
              <span>{ isToggle ? '隐藏' : '显示' }照片列表</span>
              { isToggle ? <IconDown /> : <IconUp /> }
            </div>
          </div>
          <div className='list' style={{ height: isToggle ? '67px' : '0px' }}>
            <Indicator selectIndex={currentIndex}>
              {
                pictureUrls.map((item, index) => {
                  return (
                    <div
                      className={classNames('item', { active: currentIndex === index })}
                      onClick={() => itemClickHandle(index)}
                      key={item}
                    >
                      <img src={item} alt="" />
                    </div>
                  )
                })
              }
            </Indicator>
          </div>
        </div>
      </div>
    </PictureBrowserWrapper>
  )
})

PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array,
  close: PropTypes.func
}

export default PictureBrowser