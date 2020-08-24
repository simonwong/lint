import React, { forwardRef } from 'react'
import { connect } from 'umi'
import { Input } from 'antd'

function CustomInput ({ value, onChange }, ref) {
  return (
    <div ref={ref}>
      <div>{ value }</div>
      <Input onChange={onChange} />
    </div>
  )
}

export default connect(null, null, null, { forwardRef: true })(forwardRef(CustomInput))
