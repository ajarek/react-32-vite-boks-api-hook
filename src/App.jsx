import { useFetch } from './api/useFetch'
import Container from './components/Container/Container'
import AsideLeft from './components/AsideLeft/AsideLeft'
import AsideRight from './components/AsideRight/AsideRight'
import { Loading } from './components/Loading/Loading'
import { FullPageLayout } from './components/FullPageLayout/FullPageLayout'
import { Section } from './components/Section/Section'
import ModalBook from './components/ModalBook/ModalBook'
import './App.css'
import { useState, createContext, useEffect } from 'react'

export const AppContext = createContext()
function App() {
  const [search, setSearch] = useState(null)
  const [address, setAddress] = useState('')
  const [showBook, setShowBook]= useState(false)
  const [ bookId, setBookId]=useState('')
  
  const url = `https://www.googleapis.com/books/v1/volumes?q=${address}&maxResults=40`
  const { data, pending, error } = useFetch(url)

  useEffect(() => {
    search ? setAddress(search) : setAddress('react js')
  }, [search])

  const showModal = (e) => {
    setBookId(e.target.id)
    setShowBook(true)
    
  }
  
  // data ? console.log(data) : null

  return (
    <div className='App'>
      {pending ? (
        <FullPageLayout
        >
          <Loading />
        </FullPageLayout>
      ) : null}
     
      <AppContext.Provider value={{ search, setSearch, bookId,setShowBook }}>
      {showBook? 
      <FullPageLayout
       className={'layout'}
      >
      <ModalBook/>
        </FullPageLayout>
      
      :null}
        <Container>
          <AsideLeft />
          <AsideRight />
        </Container>
        <Section
          data={data}
          error={error}
          onClick={showModal}
        />
      </AppContext.Provider>
    </div>
  )
}

export default App
