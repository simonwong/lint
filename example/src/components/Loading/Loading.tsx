import React from 'react'
import LoadingToast from './LoadingToast'
import BaseLoading from './BaseLoading'
import styles from './index.less'

class Loading extends BaseLoading {
  constructor () {
    super()
    this.div = document.createElement('div')
    this.LoadingNode = (
      <div className={styles.container}>
        <LoadingToast />
      </div>
    )
  }
}

export default Loading
