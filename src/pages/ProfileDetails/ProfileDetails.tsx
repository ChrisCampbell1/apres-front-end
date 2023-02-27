// npm modules
import { useLocation } from 'react-router'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// assets and stylesheets
import styles from './ProfileDetails.module.css'

// components
import ListingCardContainer from '../../components/ListingCardContainer/ListingCardContainer'

// services
import * as listingService from '../../services/listingService'

// types
import { Profile, User, Listing } from '../../types/models'

interface ProfileDetailsProps {
  user: User | null;
}

const ProfileDetails = (props: ProfileDetailsProps): JSX.Element => {
  const location = useLocation()
  const [listings, setListings] = useState<Listing[]>([])
  const { user } = props

  useEffect(():void =>{
    async function fetchListings(): Promise<void> {
      try {
        const listingData = await listingService.getUserListings(location.state.id)
        setListings(listingData)
      } catch (error) {
        console.log(error)
      }
    }
    fetchListings()
  }, [location])

  return (  
    <div className={styles.container}>
      <div className={styles.sideBySide}>
        <div>
          <img src={location.state.photo} alt="user avatar" />
        </div>
        <div>
          {(user?.profile.id === location.state.id)
            ?
            // <Link to={`/`}>Edit Profile</Link> for icebox feature
            <></>
            :
            <></>
          }
          <h1>{location.state.name}</h1>
          <p>Location: {location.state.city}, {location.state.state}</p>
          <p>Member Since: {location.state.createdAt.slice(0,10)}</p>
          <p>{location.state.about}</p>
        </div>
      </div>
      <h3>Listings</h3>
      {listings.length > 0 ?
        <ListingCardContainer listings={listings} user={user}/>
      :
        <h4>{location.state.name} doesn't have any listings yet</h4>
      }
    </div>
  )
}

export default ProfileDetails;
