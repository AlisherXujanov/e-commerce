import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './Layout'
import LandingPage from "./LandingPage"


export default function AllComponents() {
  const location = useLocation()
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Layout />} >
        <Route index element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
      </Route>
    </Routes>
  )
}
