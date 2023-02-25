// npm modules
import { Link } from 'react-router-dom'

// assets and stylesheets
import styles from './ListingCard.module.css'

//types
import {Listing, User} from '../../types/models'

interface ListingCardProps {
  listing: Listing;
  user: User | null;
}

const ListingCard = (props: ListingCardProps): JSX.Element => {
  const { listing, user } = props

  return (  
    <div className={styles.container}>
      this is a ListingCard for {listing.title}
      <Link to={`/listings/${listing.id}`} state={{user}}>View Listing</Link>
    </div>
  )
}

export default ListingCard;
