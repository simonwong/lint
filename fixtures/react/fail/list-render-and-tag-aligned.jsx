/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react'

const DemoComponent = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    setData([{ value: '123' }, { value: '345' }, { value: '678' }])
  }, [])

  return (
    <div>
      <ul>
        {data?.map(item => (
          <li>
            {item.value}</li>
        ))}
      </ul>
    </div>
  )
}

export default DemoComponent
