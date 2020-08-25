import React, { useState } from 'react'
import classnames from 'classnames'

import styles from './index.less'

const ParagraphEllipsis = ({ children, className, limit, ...props }) => {
  const [expandable, setExpandable] = useState(false)

  function handleChangeExpandable () {
    setExpandable(!expandable)
  }

  let showText = children
  let showControlButton = false

  if (typeof showText === 'string' && limit && showText.length >= limit) {
    showControlButton = true
    showText = `${showText.substring(0, limit - 5)}...`
    // 没有设置 limit 就默认显示
  }

  return (
    <div className={classnames(styles.wrap, className)} {...props}>
      <span>{expandable ? children : showText}</span>
      {showControlButton && (
        <div className={styles.controlButton} onClick={handleChangeExpandable}>
          {expandable ? '收起' : '展开'}
        </div>
      )}
    </div>
  )
}

export default ParagraphEllipsis
