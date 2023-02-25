// assets and stylesheets
import styles from './ListingCardContainer.module.css'

// components
import ListingCard from '../ListingCard/ListingCard'

//types
import {Listing} from '../../types/models'

interface ListingCardContainerProps {
  listings: Listing[]
}

const ListingCardContainer = (props: ListingCardContainerProps): JSX.Element => {
  const { listings } = props


  return (  
    <div className={styles.container}>
      this is a ListingCardContainer
      {listings.map((listing) =>
      <ListingCard key={listing.id} listing={listing}/>
      )}
    </div>
  )
}

export default ListingCardContainer;
