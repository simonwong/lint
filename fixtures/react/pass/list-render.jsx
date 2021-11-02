/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { useState, useEffect } from 'react'

const DemoComponent = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    setData([{ value: '123' }, { value: '345' }, { value: '678' }])
  }, [])

  return (
    <div>
      <ul>
        {data?.map(item => (
          <li key={item.value}>{`${item.value}-CONTENT`}</li>
        ))}
      </ul>
    </div>
  )
}

export default DemoComponent
