import PropTypes from 'prop-types'
import React, { memo } from 'react'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import { SectionV1Wrapper } from './style'

const HomeSection = memo((props) => {
  const { infoData } = props
  return (
    <SectionV1Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionRooms roomList={infoData.list} itemWidth="25%" />
    </SectionV1Wrapper>
  )
})

HomeSection.propTypes = {
  infoData: PropTypes.object
}

export default HomeSection