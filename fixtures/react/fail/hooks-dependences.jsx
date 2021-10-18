/* eslint-disable import/no-unresolved */
import React, { useMemo, useState, useEffect } from 'react'

const DemoComponent = ({ number }) => {
  const [data, setData] = useState([])

  // need dependence number
  const count = useMemo(() => number + 10)

  // need dependence count
  useEffect(() => setData(new Array(count).fill({ value: 123 })), [])

  return (
    <div>
      <ul>
        {data?.map(item => <li>{item.value}</li>)}
      </ul>
    </div>
  )
}

export default DemoComponent
