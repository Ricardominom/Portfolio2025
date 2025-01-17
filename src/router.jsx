import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Layout from "./layouts/Layout"
import Aboutme from "./components/Aboutme"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"

export default function router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} index />
                <Route path="/aboutme" element={<Aboutme />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
