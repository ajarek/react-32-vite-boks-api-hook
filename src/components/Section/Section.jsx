import React from 'react'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import classes from './styles.module.css'

export const Section = (props) => {
  const { className, error, data,onClick, ...otherProps } = props
  


  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
      {data &&
        data.items.map((el, i) =>
          el.volumeInfo.imageLinks ? (
            <div
              key={el.id}
              className={classes.card}
             
            >
              <img
                src={el.volumeInfo.imageLinks.smallThumbnail}
                alt={'image'+el.volumeInfo.title}
                onClick={onClick}
                id={el.id}
              />
              <div className={classes.title}>
                <p>{el.volumeInfo.title}</p>
              </div>
              <div className={classes.authors}>
                <p>
                  {el.volumeInfo.authors
                    ? el.volumeInfo.authors[0]
                    : 'is lacking'}
                </p>
              </div>
            </div>
          ) : null
        )}
    </div>
  )
}
export default Section
