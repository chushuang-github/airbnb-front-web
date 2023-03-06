import React, { memo, useState } from 'react'
import filterData from '@/assets/data/filter_data.json'
import classNames from 'classnames'
import { FilterWrapper } from './style'

const EntireFilter = memo(() => {
  const [selectItems, setSelectItems] = useState([])
  const itemClickHandle = (item) => {
    const newSelectItems = [...selectItems]
    if(selectItems.includes(item)) {
      const index = newSelectItems.indexOf(item)
      newSelectItems.splice(index, 1)
    }else {
      newSelectItems.push(item)
    }
    setSelectItems(newSelectItems)
  }

  return (
    <FilterWrapper>
      <div className='filter'>
        {
          filterData.map((item, index) => {
            return (
              <div 
                className={classNames('item', { active: selectItems.includes(item) })}
                key={index}
                onClick={() => itemClickHandle(item)}
              >
                { item }
              </div>
            )
          })
        }
      </div>
    </FilterWrapper>
  )
})


export default EntireFilter