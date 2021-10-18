/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect, useMemo } from 'react'

const DemoComponent = () => {
  const [number] = useState(2)
  const [, setData] = useState([])

  // need dependence number
  const count = useMemo(() => number + 10, [number])

  // need dependence count
  // should not dependence setData
  useEffect(() => {
    setData(new Array(count).fill({ value: 123 }))
  }, [count])

  return <div>{count}</div>
}

export default DemoComponent
