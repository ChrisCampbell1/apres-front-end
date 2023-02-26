// npm modules
import { useLocation } from 'react-router';

// assets and stylesheets
import styles from './ProfileDetails.module.css'

// components
import ListingCardContainer from '../../components/ListingCardContainer/ListingCardContainer'
import ListingCard from '../../components/ListingCard/ListingCard';

// types
import { Profile, User } from '../../types/models'

interface ProfileDetailsProps {
  user: User | null;
}

const ProfileDetails = (props: ProfileDetailsProps): JSX.Element => {
  const location = useLocation()
  return (  
    <div className={styles.container}>
      <h1>Profile Details Page</h1>
      <img src={location.state.photo} alt="user avatar" />
      <p>Location: {location.state.city}, {location.state.state}</p>
      <p>{location.state.about}</p>
      <h3>Listings</h3>
      <p>listing cards container goes here</p>
    </div>
  )
}

export default ProfileDetails;
