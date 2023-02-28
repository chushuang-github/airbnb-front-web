import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { fetchHomeDataAction } from '@/store/modules/home'
import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import SectionHeader from '@/components/section-header'
import RoomItem from '@/components/room-item'

const Home = memo(() => {
  const dispatch = useDispatch()
  const { goodPriceInfo } = useSelector(state => ({
    goodPriceInfo: state.home.goodPriceInfo
  }), shallowEqual)

  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className='content'>
        <div className='good-price'>
          <SectionHeader title={goodPriceInfo.title} />
          <ul className='room-list'>
            {
              goodPriceInfo.list?.slice(0, 8).map(item => {
                return <RoomItem itemData={item} key={item.id} />
              })
            }
          </ul>
        </div>
      </div>
    </HomeWrapper>
  )
})

export default Home