import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Platform from './components/Platform/Platform'
import Features from './components/Features/Features'

function App() {

  return (
    <>
      <Header>
        <Navbar />
        <Banner />
      </Header>
      <Platform />
      <Features />
    </>
  )
}

export default App
