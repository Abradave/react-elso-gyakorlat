
import './App.css'
import Header from './Components/Header'
import Content from './Components/Content'
import Footer from './Components/Footer'

function App() {
 
  return (
    <>
      <Header />
      <Content count={20}/>
      <Footer name='AbraDave' link='https://github.com/Abradave'/>
        
    </>
  )
}

export default App
