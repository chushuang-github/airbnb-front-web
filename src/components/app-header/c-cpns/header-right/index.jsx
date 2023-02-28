import React, { memo, useState, useEffect } from 'react'
import IconGlobal from '@/assets/svg/icon-global'
import IconProfileMenu from '@/assets/svg/icon-profile-menu'
import IconProfileAvatar from '@/assets/svg/icon-profile-avatar'
import { RightWrapper } from './style'

const HeaderRight = memo(() => {
  const [showPanel, setShowPanel] = useState(false)
  const profileClickHandle = () => {
    setShowPanel(true)
  }

  useEffect(() => {
    // window点击的函数
    const windowClickHandle = () => {
      setShowPanel(false)
    }
    // 捕获的阶段执行函数
    window.addEventListener("click", windowClickHandle, true)
    return () => {
      window.removeEventListener("click", windowClickHandle, true)
    }
  }, [])

  return (
    <RightWrapper>
      <div className='btns'>
        <span className='btn'>登录</span>
        <span className='btn'>注册</span>
        <span className='btn'>
          <IconGlobal />
        </span>
      </div>
      <div className='profile' onClick={profileClickHandle}>
        <IconProfileMenu />
        <IconProfileAvatar />
        {
          showPanel && (
            <div className='panel'>
              <div className='top'>
                <div className='item register'>注册</div>
                <div className='item login'>登录</div>
              </div>
              <div className='bottom'>
                <div className='item'>出租房源</div>
                <div className='item'>开展体验</div>
                <div className='item'>帮助</div>
              </div>
            </div>
          )
        }
      </div>
    </RightWrapper>
  )
})

export default HeaderRight