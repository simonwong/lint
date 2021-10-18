/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react'

interface DemoComponentProps {
  onChange?: () => void
}

const DemoComponent: React.FC<DemoComponentProps> = ({ onChange }) => {
  const handleClick = () => {
    onChange()
  }

  return (
    <div>
      <button onClick={handleClick}>change btn</button>
    </div>
  )
}

export default DemoComponent
