// npm modules
import { useLocation } from 'react-router'

// assets and stylesheets
import styles from './Confirmation.module.css'

const Confirmation = (): JSX.Element => {
  const location = useLocation()
  const listing = location.state.listing
  
  return (  
    <div className={styles.container}>
      <h1>Thank you for your order!</h1>
      <img src={listing.image} alt={`a ${listing?.category}`} />
      <p>Order: {listing.id}</p>
      <p>Price: {listing.price}</p>
      <p>Seller: {listing.seller.name}</p>
      
      <p>You can get in touch with the seller to facilitate payment and shipping/puckup. Their email is: <a href={`mailto:${listing.seller.email}`}>{listing.seller.email}</a></p>
    </div>
  )
}

export default Confirmation;
