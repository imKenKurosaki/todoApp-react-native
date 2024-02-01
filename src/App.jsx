import Aboutus from './pages/Aboutus'
import Loading, { delayData } from './components/Loading'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'

const Home = lazy(() => delayData(import('./pages/Home')));

function App() {

  return (
    <BrowserRouter basename='/todo'>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>} />
        <Route path="/aboutus" element={<Aboutus />} />
      </Routes>
    </ BrowserRouter>
  )
}

export default App
