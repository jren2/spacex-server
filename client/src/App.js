import Launches from './components/Launches'
import { Route, Routes } from 'react-router-dom'
import Launch from './components/Launch'


export function App() {
  return (
    <>
      <div>SpaceX</div>
      <Routes>
        <Route path="/" element={<Launches></Launches>}></Route>
        <Route path="/launch/:flight_number" element={<Launch></Launch>} />
      </Routes>
    </>
  )
}