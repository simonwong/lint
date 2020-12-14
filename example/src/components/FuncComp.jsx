import React, { useEffect, useState } from 'react'

function FuncComp() {
  const [number, setNumber] = useState(0)

  const retureRadeom = () => {
    Math.random()
  }

  useEffect(() => {
    retureRadeom()
    return () => {
      retureRadeom()
    }
  }, [number])

  const getDouble = num => num * 2

  useEffect(() => {
    getDouble(number)
  })

  const handleSetNumber = () => {
    setNumber(number + 1)
  }

  return (
    <div>
      <h1>It&apos;s a funcComp</h1>
      <button type="button" onClick={handleSetNumber}>
        set Number
      </button>
      <p>{number}</p>
    </div>
  )
}

export default FuncComp
