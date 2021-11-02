/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { FC, useState, useEffect } from 'react'

interface DemoComponentProps {
  num?: number
}

type DemoData = {
  value: string
}

const DemoComponent: FC<DemoComponentProps> = ({ num }) => {
  const [data, setData] = useState<DemoData[]>(null)

  useEffect(() => {
    setData([
      { value: '123' },
      { value: '345' },
      { value: '678' },
      { value: '2333' },
      { value: '88888' },
    ])
  }, [])

  return (
    <div>
      <h1>{num}</h1>
      <ul>
        {data?.map(item => (
          <li key={item.value}>{item.value}</li>
        ))}
      </ul>
    </div>
  )
}

DemoComponent.defaultProps = {
  num: 1234,
}

export default DemoComponent
