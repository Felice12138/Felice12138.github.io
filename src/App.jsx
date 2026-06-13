import { HashRouter as BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar    from './components/Navbar'
import PageFrame from './components/PageFrame'
import Home      from './pages/Home'
import About     from './pages/About'
import Contact   from './pages/Contact'
import Works     from './pages/Works'
import './styles/index.css'

export default function App() {
  return (
    <BrowserRouter>
      <PageFrame />
      <Navbar />
      <Routes>
        <Route path="/"        element={<Home />}    />
        <Route path="/about"   element={<About />}   />
        <Route path="/contact" element={<Contact />} />
        <Route path="/works"   element={<Works />}   />
      </Routes>
    </BrowserRouter>
  )
}
