import React from 'react'

class ClassComp extends React.Component {

  componentDidMount () {
    console.log('ClassComp componentDidMount')
    console.log(this)
  }

  render () {
    return (
      <div>
        It&apos;s a class Comp
      </div>
    )
  }
}

export default ClassComp
