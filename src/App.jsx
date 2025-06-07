import './App.css'
import Banner from './components/banner/Banner.jsx'
import Navbar from './components/navbar/Navbar'
import Header from './components/Header/Header'
import Platform from './components/Platform/Platform'
import Features from './components/Features/Features'
import Integrate from './components/Integrate/Integrate'
import Service from './components/Service/Service'
import Customers from './components/Customers/Customers'
import Pricing from './components/Pricing/Pricing'
import About from './components/About/About'
import FotterPart from './components/FotterPart/FotterPart'

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
      <Customers />
      <Pricing />
      <About />
      <FotterPart />
    </>
  )
}

export default App
