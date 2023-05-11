import './App.css';
import Header from './Components/Header'
import Cart from './Components/Cartwidget'
import Navbar from './Components/Navbar'
import ItemListContainer from './Components/ItemListContainer'

function App() {
  return (
    <div className= "container-fluid">
      <Header/>
      <ItemListContainer greeting = "¡Sitio web en construcción...disculpe las molestias!"/>
    </div>
  );
}

export default App;
