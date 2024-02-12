import Lode from "./Lode"
import Auta from "./Auta"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="Lode" element={<Lode/>}></Route>
      <Route path="Auta" element={<Auta/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
