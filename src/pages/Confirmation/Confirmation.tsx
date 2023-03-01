// npm modules
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'

// assets and stylesheets
import styles from './Confirmation.module.css'

//types
import { Listing } from '../../types/models'

const Confirmation = (): JSX.Element => {
  const location = useLocation()
  const listing: Listing = location.state.listing
  
  return (  
    <div className={styles.container}>
      <h1>Thank you for your order!</h1>
      <div className={styles.sideBySide}>
        <div className={styles.left}>
          <img src={listing.image} alt={`a ${listing?.category}`} />
        </div>
        <div className={styles.right}>
          <p>Order: {listing.id}</p>
          <p>Price: {listing.price}</p>
          <p>Seller: <Link to={`/profiles/${listing.seller.id}`} state={listing.seller}>{listing.seller.name}</Link></p>
          
          <p>You can get in touch with the seller to facilitate payment and shipping/puckup. Their email is: <a href={`mailto:${listing.seller.email}`}>{listing.seller.email}</a></p>
        </div>
      </div>
    </div>
  )
}

export default Confirmation;
