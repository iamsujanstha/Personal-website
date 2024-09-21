
import React from 'react'

// Very simple component that receives two props:
// An image to display and isSelected to see if it's selected (styling purposes)

const Flag = ({ image, ...props }) => (
  <img alt="flag" src={image} {...props} />
)

export default Flag