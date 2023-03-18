import './App.css'
import Header from './components/header'
import {Routes, Route} from 'react-router-dom'
import Home from './Routes/home'

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
