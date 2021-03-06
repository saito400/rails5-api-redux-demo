import React from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from '../actions'

function Count({ number, increase, decrease }) {
  return (
    <div className='container'>
      Some state changes:
      {number}
      <button onClick={() => increase(1)}>Increase</button>
      <button onClick={() => decrease(1)}>Decrease</button>
    </div>
  )
}

export default connect(
  state => ({ number: state.count.number }),
  { increase, decrease }
)(Count)

