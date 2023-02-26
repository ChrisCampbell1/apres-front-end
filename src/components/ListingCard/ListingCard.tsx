// npm modules
import { Link } from 'react-router-dom'

// assets and stylesheets
import styles from './ListingCard.module.css'
import snowflake from '/assets/snowflake.svg'

//types
import {Listing, User} from '../../types/models'

interface ListingCardProps {
  listing: Listing;
  user: User | null;
}

const ListingCard = (props: ListingCardProps): JSX.Element => {
  const { listing, user } = props

  const arr: number[] = [1, 2, 3, 4, 5]

  return (  
    <Link to={`/listings/${listing.id}`} state={{user}}>
      <div className={styles.container}>
        <img src={listing.image} alt="product image" />
        <p id={styles.title}>{listing.title}</p>
        <p>${listing.price}</p>
        <p>Location: {listing?.seller.city}, {listing.seller.state}</p>
        <p>Condition: {arr.map((el: number): JSX.Element => (
          el <= listing.condition ?
          <img
            id={styles.snowflake}
            key={el}
            src={snowflake} 
            alt="Snowflake Symbol"
          />
          :
          <></>
          ))}
        </p>
      </div>
    </Link>
  )
}

export default ListingCard;
