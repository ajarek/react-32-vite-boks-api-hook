import { React, useContext } from 'react'
import { AppContext } from '../../App'
import classes from './styles.module.css'
import { useFetch } from '../../api/useFetch'

export const ModalBook = (props) => {
  const { className, ...otherProps } = props
  const { bookId, setShowBook } = useContext(AppContext)

  const url = `https://www.googleapis.com/books/v1/volumes?q=${bookId}`
  const { data, pending, error } = useFetch(url)

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
      onClick={() => setShowBook(false)}
    >
      {data &&
        data.items.map((el) =>
          bookId == el.id ? (
            <div key={el.id}>
              <h1>{el.volumeInfo.title}</h1>
              <h2>{el.volumeInfo.subtitle}</h2>
              <img
                src={el.volumeInfo.imageLinks.thumbnail}
                alt=''
              />
              <p>author: {el.volumeInfo.authors[0]}</p>
              <p>country: {el.accessInfo.country}</p>
              <p>language: {el.volumeInfo.language}</p>
              <p>publishedDate: {el.volumeInfo.publishedDate}</p>
              <p>
                description:
                <br /> {el.volumeInfo.description}
              </p>
            </div>
          ) : null
        )}
    </div>
  )
}
export default ModalBook
