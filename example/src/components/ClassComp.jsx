import React from 'react'

class ClassComp extends React.Component {
  state = {
    number: 0
  }

  componentDidMount () {
    this.setNumber()
  }


  setNumber = () => {
    this.setState({
      number: 1
    })
  }

  render () {
    const { number } = this.state

    return (
      <div>
        <h1>
          It&apos;s a class Comp
        </h1>
        <p>{ number }</p>
      </div>
    )
  }
}

export default ClassComp
