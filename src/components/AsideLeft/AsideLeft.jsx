import React from 'react'

import classes from './styles.module.css'

export const AsideLeft = (props) => {
  const { className, ...otherProps } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
     <h2 className={classes.h2}> A room without books is like<br/> a body without a soul.</h2>
    </div>
  )
}
export default AsideLeft
