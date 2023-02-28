import PropTypes from 'prop-types'
import React, { memo, useState, useCallback } from 'react'
import SectionHeader from '@/components/section-header'
import SectionTabs from '@/components/section-tabs'
import SectionRooms from '@/components/section-rooms'
import { SectionV2Wrapper } from './style'

const HomeSectionV2 = memo((props) => {
  const { infoData } = props

  const initialName = infoData.dest_address[0].name
  const [name, setName] = useState(initialName)
  const tabNames = infoData.dest_address?.map(item => item.name)
  const tabClickHandle = useCallback((item) => {
    setName(item)
  }, [])

  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
      <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth="33.3333%" />
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV2