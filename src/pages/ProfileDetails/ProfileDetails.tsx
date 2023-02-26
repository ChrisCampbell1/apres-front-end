// npm modules
import { useLocation } from 'react-router'
import { useState, useEffect } from 'react'

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
      <h1>Profile Details Page</h1>
      <img src={location.state.photo} alt="user avatar" />
      <p>Location: {location.state.city}, {location.state.state}</p>
      <p>{location.state.about}</p>
      <h3>Listings</h3>
      <ListingCardContainer listings={listings} user={user}/>
    </div>
  )
}

export default ProfileDetails;
