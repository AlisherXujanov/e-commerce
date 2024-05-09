import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './Layout'
import LandingPage from "./LandingPage"
import Blog from "./Blog"
import NoPage from "./NoPage"
import Products from './Products'
import Contact from './Contact'
// Products
export default function AllComponents() {
  const location = useLocation()
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Layout />} >
        <Route index element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  )
}
