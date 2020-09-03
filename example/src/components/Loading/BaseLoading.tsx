import React from 'react'
import ReactDOM from 'react-dom'

class BaseLoading {
  isLoading: boolean = false

  div: Element

  LoadingNode: React.ReactElement

  constructor() {
    this.isLoading = false
    this.div = document.querySelector('#root') as Element
    this.LoadingNode = <span>Icon</span>
  }

  show() {
    if (this.isLoading) {
      return
    }
    this.isLoading = true

    document.body.appendChild(this.div)
    ReactDOM.render(this.LoadingNode, this.div)
  }

  hide() {
    if (!this.isLoading) {
      return
    }
    this.isLoading = false

    setTimeout(() => {
      const unmountResult = ReactDOM.unmountComponentAtNode(this.div)
      if (unmountResult && this.div.parentNode) {
        this.div.parentNode.removeChild(this.div)
      }
      // 避免闪现
    }, 300)
  }
}

export default BaseLoading
