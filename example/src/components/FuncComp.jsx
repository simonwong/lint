import React, { useEffect } from 'react'

function FuncComp () {
  useEffect(() => {
    console.log('useEffect FuncComp')

    return () => {
      console.log('useEffect unmount FuncComp')
    }
  })

  return (
    <div>
      It&apos;s a funcComp
    </div>
  )
}

export default FuncComp
