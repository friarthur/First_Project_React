
import './App.css'
import Navbar from './components/Navbar.jsx'
import Banner from './components/Banner.jsx'
import Sobre from './components/Sobre.jsx'
import Trajetoria from './components/Trajetoria.jsx'
import Linguagens from './components/Linguagens.jsx'
import Contatos from './components/Contatos.jsx'
import Footer from './components/Footer.jsx'
function App() {
  

  return (
   <div className="App">
    <Navbar />
    
      <Banner />
    <div>
    <Sobre />
    <Trajetoria />
    <Linguagens />
    <Contatos />
    </div>
    <div className="footer">
      <Footer />
      </div>
    
    
  </div>
  )
}

export default App
