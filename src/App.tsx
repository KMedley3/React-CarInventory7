import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import routes from './config/routes'
import Navbar from './components/Navbar'


function App() {

  return (
  <BrowserRouter>
    <Navbar />
    <Routes>
      { routes.map((routes, index) => (
        <Route
          key={index}
          path={routes.path}
          element={
            <routes.component />
          }
          />
      )) }
    </Routes>
  </BrowserRouter>
  )
}

export default App
