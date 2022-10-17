import React, { useState } from 'react'

import classes from './styles.module.css'

export const AsideRight = (props) => {
  const { className, ...otherProps } = props
    const[title, setTitle]=useState('')
    console.log(title);
  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <div className={classes.h1}>
        <h1>Find Your Book</h1>
      </div>
      <div className={classes.input}>
        <input
          type='search'
          placeholder='Enter Your Book Name'
          value={title}
          onChange={e=>setTitle(e.target.value)}
        />
      </div>
      <div className={classes.img}></div>
    </div>
  )
}
export default AsideRight
