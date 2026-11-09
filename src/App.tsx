import { useState } from 'react';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Personal from './components/Personal'
import Inventario from './components/Inventario';
import Incidencias from './components/Incidencias';
import './style/App.css'

function App() {

  const [seccion, setSeccion] = useState<string>('Personal');

  return (
    <div id="main-container">
      <Header/>
      <div id="bottom-container">
        <Sidebar onSelectTab={setSeccion}/>
        <main id='app-container'>
          {seccion === 'Personal' && <Personal />}
          {seccion === 'Inventario' && <Inventario />}
          {seccion === 'Incidencias' && <Incidencias />}
        </main>
      </div>
    </div>
  )
}

export default App
