import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Platform from './components/Platform/Platform'
import Features from './components/Features/Features'
import Integrate from './components/Integrate/Integrate'
import Service from './components/Service/Service'

function App() {

  return (
    <>
      <Header>
        <Navbar />
        <Banner />
      </Header>
      <Platform />
      <Features />
      <Integrate />
      <Service />
    </>
  )
}

export default App
