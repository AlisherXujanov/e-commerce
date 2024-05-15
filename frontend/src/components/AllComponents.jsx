import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './Layout'
import LandingPage from "./LandingPage"
import Blog from "./Blog"
import BlogDetails from "./Blog/BlogDetails.jsx"
import NoPage from "./NoPage"


export default function AllComponents() {
  const location = useLocation()
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Layout />} >
        <Route index element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  )
}
