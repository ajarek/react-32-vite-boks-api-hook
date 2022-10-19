import React, { useContext, useEffect} from 'react'
import { AppContext } from '../../App'
import classes from './styles.module.css'
import {DebounceInput} from 'react-debounce-input'

export const AsideRight = (props) => {
  const { className, ...otherProps } = props
  
  const { search,setSearch  } = useContext(AppContext) 
  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <div className={classes.h1}>
        <h1>Find Your Book</h1>
      </div>
      <div className={classes.input}>
      <DebounceInput
          minLength={2}
          debounceTimeout={1000}
          type='search'
          placeholder='Enter Your Book Name'
          value={search}
          onChange={e=>{
            setSearch(e.target.value)
          }}
        />
      </div>
      <div className={classes.img}></div>
    </div>
  )
}
export default AsideRight
