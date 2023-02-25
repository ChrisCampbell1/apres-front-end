// assets and stylesheets
import styles from './ListingCard.module.css'

//types
import {Listing} from '../../types/models'

interface ListingCardProps {
  listing: Listing
}

const ListingCard = (props: ListingCardProps): JSX.Element => {
  const { listing } = props

  return (  
    <div className={styles.container}>
      this is a ListingCard for {listing.title}
    </div>
  )
}

export default ListingCard;
