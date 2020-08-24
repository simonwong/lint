import React from 'react'
import classnames from 'classnames'
import LoadingToast from './LoadingToast'
import BaseLoading from './BaseLoading'
import styles from './index.less'

class PageLoading extends BaseLoading {
  constructor () {
    super()
    this.div = document.createElement('div')
    this.LoadingNode = (
      <div className={classnames(styles.container, styles.page)}>
        <LoadingToast />
      </div>
    )
  }
}

export default PageLoading
