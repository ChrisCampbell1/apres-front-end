// npm modules
import { NavLink } from 'react-router-dom'

// types
import { User } from '../../types/models'

interface NavBarProps {
  user: User | null;
  handleLogout: () => void;
}

const NavBar = (props: NavBarProps): JSX.Element => {
  const { user, handleLogout } = props
  
  return (
    <nav>
      {user ?
        <ul>
          <li>Welcome, {user.name}</li>
          <li><NavLink to="/profiles">Profiles</NavLink></li>
          <li><NavLink to="/change-password">Change Password</NavLink></li>
          <li><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></li>
        </ul>
      :
        <ul>
          <li><NavLink to="/all">All Listings</NavLink></li>
          <li><NavLink to="/skis">Skis</NavLink></li>
          <li><NavLink to="/ski-boots">Ski Boots</NavLink></li>
          <li><NavLink to="/poles">Poles</NavLink></li>
          <li><NavLink to="/accessories">Accessories</NavLink></li>
          <li><NavLink to="/clothing">Clothing</NavLink></li>
          <li><NavLink to="/snowboards">Snowboards</NavLink></li>
          <li><NavLink to="/snowboard-boots">Snowboard Boots</NavLink></li>
          <li><NavLink to="/other">Other</NavLink></li>
          <li><NavLink to="/login">Log In</NavLink></li>
          <li><NavLink to="/signup">Sign Up</NavLink></li>
        </ul>
      }
    </nav>
  )
}

export default NavBar