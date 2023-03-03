import React, { memo, useEffect, useRef, useState } from 'react'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import { ScorllViewWrapper } from './style'

const ScrollView = memo((props) => {
  // 是否显示右边的按钮
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)
  const [posIndex, setPosIndex] = useState(0)
  const totalDistanceRef = useRef(0)

  // 组件渲染完毕，判断是否显示右侧的按钮
  const scrollContentRef = useRef()
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth
    const clientWidth = scrollContentRef.current.clientWidth
    const totalDistance = scrollWidth - clientWidth
    totalDistanceRef.current = totalDistance
    setShowRight(totalDistance > 0)
  }, [props.children])

  // 事件处理的逻辑
  const controlClickHandle = (isRight) => {
    const newIndex = isRight ? posIndex + 1 : posIndex - 1
    const newEl = scrollContentRef.current.children[newIndex]
    const newOffsetLeft = newEl.offsetLeft
    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`
    setPosIndex(newIndex)

    // 是否显示按钮
    setShowRight(totalDistanceRef.current > newOffsetLeft)
    setShowLeft(newOffsetLeft > 0)
  }

  return (
    <ScorllViewWrapper>
      { showLeft && (
        <div className='control left' onClick={() => controlClickHandle(false)}>
          <IconArrowLeft />
        </div>
      )}
      { showRight && (
        <div className='control right' onClick={() => controlClickHandle(true)}>
          <IconArrowRight />
        </div>
      )}

      <div className='scroll'>
        <div className='scroll-content' ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ScorllViewWrapper>
  )
})

export default ScrollView