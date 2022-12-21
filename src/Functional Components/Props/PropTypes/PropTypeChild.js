import React from 'react'
import PropTypes from 'prop-types'

function PropTypeChild({name,age,gender}) {
  return (
    <div>
      <hr />
      <h1>PropTypeChild</h1>
      <h3> Name : {name} and Age : {age} and Gender : {gender} </h3>
    </div>
  )
}

export default PropTypeChild

PropTypeChild.propTypes = {
  name : PropTypes.string,
  age : PropTypes.number,
  gender : PropTypes.string

}

PropTypeChild.defaultProps = {
  gender : "male"
}