// assets and stylesheets
import styles from './ListingCardContainer.module.css'

// components
import ListingCard from '../ListingCard/ListingCard'

//types
import {Listing, User} from '../../types/models'

interface ListingCardContainerProps {
  listings: Listing[];
  user: User | null;
}

const ListingCardContainer = (props: ListingCardContainerProps): JSX.Element => {
  const { listings, user } = props


  return (  
    <div className={styles.container}>
      this is a ListingCardContainer
      {listings.map((listing) =>
      <ListingCard key={listing.id} listing={listing} user={user}/>
      )}
    </div>
  )
}

export default ListingCardContainer;
