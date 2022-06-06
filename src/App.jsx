import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom';
import { LoadingScreen } from './Components';
import { Home } from './Pages';
import { useSelector } from 'react-redux';

function App() {

  const isLoading = useSelector( state => state.isLoading );

  return (
    <div className="App">
      <HashRouter>
        <LoadingScreen/>
        <Routes>
          <Route path='' element={ <Home/> }/>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
