import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import Container from './components/Container/Container'
import AsideLeft from './components/AsideLeft/AsideLeft'
import AsideRight from './components/AsideRight/AsideRight'
import './App.css'
const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LoadBooks />
    </QueryClientProvider>
  )
}

function LoadBooks() {
  const { isLoading, error, data, refetch } = useQuery(['repoData'], () =>
    fetch('https://www.googleapis.com/books/v1/volumes?q=pan%20samochodzik').then(res =>
      res.json()
    )
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message
  console.log(data);

  return (
    <div className="App">
    <Container>
     <AsideLeft/>
     <AsideRight/>
    </Container>
     <button
     onClick={refetch}
     >refetch</button>
    </div>
  )
}

export default App
