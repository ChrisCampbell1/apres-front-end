// npm modules 
import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import CategoryPage from './pages/CategoryPage/CategoryPage'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import Confirmation from './pages/Confirmation/Confirmation'
import NewListing from './pages/NewListing/NewListing'
import EditListing from './pages/EditListing/EditListing'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'

// stylesheets
import './App.css'

// types
import { User } from './types/models'

function App(): JSX.Element {
  const navigate = useNavigate()
  
  const [user, setUser] = useState<User | null>(authService.getUser())

  const handleLogout = (): void => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = (): void => {
    setUser(authService.getUser())
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route path="/all" element={<CategoryPage category="" user={user}/>} />
        <Route path="/skis" element={<CategoryPage category="Skis" user={user}/>} />
        <Route path="/ski-boots" element={<CategoryPage category="Ski-Boots" user={user}/>} />
        <Route path="/poles" element={<CategoryPage category="Poles"  user={user}/>} />
        <Route path="/accessories" element={<CategoryPage category="Accessories" user={user}/>} />
        <Route path="/clothing" element={<CategoryPage category="Clothing" user={user}/>} />
        <Route path="/snowboards" element={<CategoryPage category="Snowboards" user={user}/>} />
        <Route path="/snowboard-boots" element={<CategoryPage category="Snowboard-Boots" user={user}/>} />
        <Route path="/other" element={<CategoryPage category="Other" user={user}/>} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/listings/:id" element={<ProductDetail />}/>
        <Route
          path="/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/listings/new"
          element={
            <ProtectedRoute user={user}>
              <NewListing user={user}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/listings/:id/edit"
          element={
            <ProtectedRoute user={user}>
              <EditListing user={user}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
