import { useFetch } from './api/useFetch'
import Container from './components/Container/Container'
import AsideLeft from './components/AsideLeft/AsideLeft'
import AsideRight from './components/AsideRight/AsideRight'
import { Loading } from './components/Loading/Loading'
import { FullPageLayout } from './components/FullPageLayout/FullPageLayout'
import { Section } from './components/Section/Section'
import './App.css'
import { useState, createContext, useEffect } from "react";

export const AppContext = createContext()
function App() {
  const[search,setSearch]=useState('spin')

  const url =`https://www.googleapis.com/books/v1/volumes?q=${search}`
   const { data, pending, error } = useFetch(url)
  

   data?console.log(data):null
  

  return (
    <div className="App">
         
        {pending ? (
          <FullPageLayout>
            <Loading />
          </FullPageLayout>
        ) : null}
       <AppContext.Provider value={{search,setSearch  }}>
    <Container>
     <AsideLeft/>
     <AsideRight/>
    </Container>
    <Section
    data={data}
    error={error}
    />
     </AppContext.Provider>
    </div>
  )
}

export default App
