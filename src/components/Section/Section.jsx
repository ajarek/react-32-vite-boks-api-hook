import React from 'react'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import classes from './styles.module.css'

export const Section = (props) => {
  const { className, error, data, ...otherProps } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
      {data &&
        data.items.map((el, i) => {
          return (
            <div
              key={el.id}
              className={classes.card}
            >
              <img
                src={el.volumeInfo.imageLinks?el.volumeInfo.imageLinks.smallThumbnail:'src/assets/avatar-book.jpg'}
                alt=''
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
          )
        })}
    </div>
  )
}
export default Section
