import React from 'react'
import PropTypes from 'prop-types'


interface hell{
    name:string;
    rollNo:number;
    city:string;
    center:string;
    campus:string;
    dayTime:string;
}

const Card = (yup:hell) => {
  return (
    <div>
        <h1>Name:{yup.name}</h1>
        <h2>Roll No:{yup.rollNo}</h2>
        <h2>City:{yup.city}</h2>
        <h2>Center:{yup.center}</h2>
        <h2>Campus:{yup.campus}</h2>
        <h2>Day / Time:{yup.dayTime}</h2>
    </div>
  )
}

Card.propsType = {}

export default Card