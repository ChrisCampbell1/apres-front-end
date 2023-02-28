// npm modules
import { NavLink, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

// stylesheets and assets
import styles from './NavBar.module.css'
import logo from '/assets/logo-text-centered.png'
import white from '/assets/logo-white.png'

// types
import { User } from '../../types/models'

interface NavBarProps {
  user: User | null;
  handleLogout: () => void;
}

const NavBar = (props: NavBarProps): JSX.Element => {
  const { user, handleLogout } = props
  const [open, setOpen] = useState<boolean>(false)
  
  function handleClick():void {
    setOpen(!open)
  }

  const location = useLocation()

  useEffect(():void => {
    setOpen(false)
  }, [location])


  return (
    <>
    <nav className={styles.container}>
      <NavLink to="/">
        <img src={logo} alt="apres logo" />
      </NavLink>
      {user ?
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li className={styles.dropdown}>
            <NavLink to="/all">Listings</NavLink>
            <ul className={styles.dropdownContent}>
              <li><NavLink to="/skis">Skis</NavLink></li>
              <li><NavLink to="/ski-boots">Ski Boots</NavLink></li>
              <li><NavLink to="/poles">Poles</NavLink></li>
              <li><NavLink to="/accessories">Accessories</NavLink></li>
              <li><NavLink to="/clothing">Clothing</NavLink></li>
              <li><NavLink to="/snowboards">Snowboards</NavLink></li>
              <li><NavLink to="/snowboard-boots">Snowboard Boots</NavLink></li>
              <li><NavLink to="/other">Other</NavLink></li>
            </ul>
          </li>
          <li><NavLink to="/listings/new">Create Listing</NavLink></li>
          <li><NavLink to="/profiles">Profiles</NavLink></li>
          <li><NavLink to="/change-password">Change Password</NavLink></li>
          <li><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></li>
        </ul>
      :
      <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li className={styles.dropdown}>
            <NavLink to="/all">Listings</NavLink>
            <ul className={styles.dropdownContent}>
              <li><NavLink to="/skis">Skis</NavLink></li>
              <li><NavLink to="/ski-boots">Ski Boots</NavLink></li>
              <li><NavLink to="/poles">Poles</NavLink></li>
              <li><NavLink to="/accessories">Accessories</NavLink></li>
              <li><NavLink to="/clothing">Clothing</NavLink></li>
              <li><NavLink to="/snowboards">Snowboards</NavLink></li>
              <li><NavLink to="/snowboard-boots">Snowboard Boots</NavLink></li>
              <li><NavLink to="/other">Other</NavLink></li>
            </ul>
          </li>
          <li><NavLink to="/login">Log In</NavLink></li>
          <li><NavLink to="/signup">Sign Up</NavLink></li>
        </ul>
      }
    </nav>
    <div className={styles.mobileNav}>
      <div className={styles.header}>
      <img src={white} alt="apres logo" id={styles.white} />
      <p id={styles.hamburger} onClick={() => handleClick()}>☰</p>
      </div>
      {open &&
        <nav className={styles.menu}>
          {user ?
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/all">All Listings</NavLink></li>
              <li><NavLink to="/skis">Skis</NavLink></li>
              <li><NavLink to="/ski-boots">Ski Boots</NavLink></li>
              <li><NavLink to="/poles">Poles</NavLink></li>
              <li><NavLink to="/accessories">Accessories</NavLink></li>
              <li><NavLink to="/clothing">Clothing</NavLink></li>
              <li><NavLink to="/snowboards">Snowboards</NavLink></li>
              <li><NavLink to="/snowboard-boots">Snowboard Boots</NavLink></li>
              <li><NavLink to="/other">Other</NavLink></li>
              <li><NavLink to="/listings/new">Create Listing</NavLink></li>
              <li><NavLink to="/profiles">Profiles</NavLink></li>
              <li><NavLink to="/change-password">Change Password</NavLink></li>
              <li><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></li>
            </ul>
          :
          <ul>
              <li><NavLink to="/">Home</NavLink></li>
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
      }
    </div>
    </>
    // <nav className={styles.container}>
    //   <NavLink to="/">
    //     <img src={logo} alt="apres logo" />
    //   </NavLink>
    //   {user ?
    //     <ul>
    //       <li><NavLink to="/">Home</NavLink></li>
    //       <li><NavLink to="/all">All Listings</NavLink></li>
    //       <li><NavLink to="/skis">Skis</NavLink></li>
    //       <li><NavLink to="/ski-boots">Ski Boots</NavLink></li>
    //       <li><NavLink to="/poles">Poles</NavLink></li>
    //       <li><NavLink to="/accessories">Accessories</NavLink></li>
    //       <li><NavLink to="/clothing">Clothing</NavLink></li>
    //       <li><NavLink to="/snowboards">Snowboards</NavLink></li>
    //       <li><NavLink to="/snowboard-boots">Snowboard Boots</NavLink></li>
    //       <li><NavLink to="/other">Other</NavLink></li>
    //       <li><NavLink to="/listings/new">Create Listing</NavLink></li>
    //       <li><NavLink to="/profiles">Profiles</NavLink></li>
    //       <li><NavLink to="/change-password">Change Password</NavLink></li>
    //       <li><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></li>
    //     </ul>
    //   :
    //   <ul>
    //       <li><NavLink to="/">Home</NavLink></li>
    //       <li><NavLink to="/all">All Listings</NavLink></li>
    //       <li><NavLink to="/skis">Skis</NavLink></li>
    //       <li><NavLink to="/ski-boots">Ski Boots</NavLink></li>
    //       <li><NavLink to="/poles">Poles</NavLink></li>
    //       <li><NavLink to="/accessories">Accessories</NavLink></li>
    //       <li><NavLink to="/clothing">Clothing</NavLink></li>
    //       <li><NavLink to="/snowboards">Snowboards</NavLink></li>
    //       <li><NavLink to="/snowboard-boots">Snowboard Boots</NavLink></li>
    //       <li><NavLink to="/other">Other</NavLink></li>
    //       <li><NavLink to="/login">Log In</NavLink></li>
    //       <li><NavLink to="/signup">Sign Up</NavLink></li>
    //     </ul>
    //   }
    // </nav>
  )
}

export default NavBar
