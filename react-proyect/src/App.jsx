/* eslint-disable react/prop-types */
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'




function App() {
  

  return (
    <>
      <div>
        <NavBar logo="TecnoGlaz"/>

        <ItemListContainer greeting="Bienvenidos a TecnoGlaz" />
      </div>
      
    </>
      
  )
}

export default App
