// npm modules
import { useParams, useLocation, useNavigate, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

// assets and stylesheets
import styles from './ProductDetail.module.css'

// services
import * as listingService from '../../services/listingService'

// types
import {Listing} from '../../types/models'

const ProductDetail = (): JSX.Element => {
  const navigate = useNavigate()
  const params = useParams()
  const location = useLocation()
  console.log(location)
  const profileId = location.state.user?.profile.id
  const { id } = params
  const [listing, setListing] = useState<Listing>()

  async function handlePurchaseClick(): Promise<void> {
    try {
      await listingService.purchaseListing(listing?.id)
      navigate('/confirmation', {
        state: {listing}
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(():void =>{
    async function fetchListing(): Promise<void> {
      try {
        const listingData = await listingService.getListing(id)
        setListing(listingData)
      } catch (error) {
        console.log(error)
      }
    }
    fetchListing()
  }, [])

  return (  
    <div className={styles.container}>
      <p>this is a ProductDetail Page for {listing?.title}</p>
      <p>{listing?.description}</p>
      <img src={listing?.image} alt={`${listing?.category}`} />
      <p>${listing?.price}</p>
      <p>{listing?.status}</p>
      <p>{listing?.dimensions}</p>
      {(profileId !== undefined && listing?.status === "For Sale") 
      ?
      <button onClick={() => handlePurchaseClick()}>Purchase</button>
      :
      <p>Please log in to make a purchase</p>
      }
      {(profileId === listing?.sellerId)
      ?
      <div>
        <Link to={`/listings/${listing?.id}/edit`} state={listing}>Edit Listing</Link>
        <Link to={'/'}>Delete Listing Listing</Link>        
      </div>
      :
      <></>
      }
    </div>
  )
}

export default ProductDetail;
