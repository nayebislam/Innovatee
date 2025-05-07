import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Platform from './components/Platform/Platform'

function App() {

  return (
    <>
      <Header>
        <Navbar />
        <Banner />
      </Header>
      <Platform />
    </>
  )
}

export default App
