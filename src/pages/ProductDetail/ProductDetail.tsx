// npm modules
import { useParams, useLocation, useNavigate, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

// assets and stylesheets
import styles from './ProductDetail.module.css'
import snowflake from '/assets/snowflake-black.svg'

// services
import * as listingService from '../../services/listingService'

// types
import {Listing} from '../../types/models'

const ProductDetail = (): JSX.Element => {
  const navigate = useNavigate()
  const params = useParams()
  const location = useLocation()
  const profileId = location.state.user?.profile.id
  const { id } = params
  const [listing, setListing] = useState<Listing>()
  const arr: number[] = [1, 2, 3, 4, 5]

  async function handlePurchaseClick(): Promise<void> {
    try {
      if (id && listing) {
        await listingService.purchaseListing(listing.id)
        navigate('/confirmation', {
          state: {listing}
        })
      } else return
    } catch (error) {
      console.log(error)
    }
  }

  async function handleDelete(): Promise<void> {
    try {
      if (listing?.id) await listingService.deleteListing(listing?.id)
      navigate('/all')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(():void =>{
    async function fetchListing(): Promise<void> {
      try {
        if (id){
          const listingData = await listingService.getListing(id)
          setListing(listingData)
        } else return
      } catch (error) {
        console.log(error)
      }
    }
    fetchListing()
  }, [])

  return (  
    <div className={styles.container}>
      {listing ?
        <div className={styles.sideBySide}>
          <div>
            <img src={listing?.image} alt={`${listing?.category}`} />
          </div>
          <div>
            <h1>{listing?.title}</h1>
            <p><span>Price: </span>${listing?.price}</p>
            <p><span>Status: </span>{listing?.status}</p>
            <p><span>Listed by: </span><Link to={`/profiles/${listing?.sellerId}`} id={styles.sellerLink}>{listing?.seller.name}</Link> on {listing?.createdAt.slice(0,10)}</p>
            <p><span>Description:</span></p>
            <p>{listing?.description}</p>
            <p><span>Condition: </span>{arr.map((el: number): JSX.Element => (
            el <= listing?.condition ?
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
            <p><span>Manufacturer: </span>{listing?.manufacturer}</p>
            <p><span>Year Manufactured: </span>{listing?.yearManufactured}</p>
            <p><span>Dimensions: </span>{listing?.dimensions}</p>
            <p><span>Material: </span>{listing?.material}</p>
            {(profileId !== undefined && listing?.status === "For Sale" && profileId !== listing?.sellerId) 
              ?
              <button onClick={() => handlePurchaseClick()} id={styles.purchase}>Purchase</button>
              :
              (listing?.status === "For Sale" && profileId !== listing?.sellerId) ?
                <p>Please log in to make a purchase</p>
                :
                <></>
            }
            {(profileId === listing?.sellerId)
            ?
            <div className={styles.buttons}>
              <Link to={`/listings/${listing?.id}/edit`} state={listing}>Edit Listing</Link>
              <button onClick={() => handleDelete()} id={styles.delete}>Delete Listing</button>        
            </div>
            :
            <></>
            }
          </div>
        </div>
        :
        <div>
          <h1>Loading...</h1>
        </div>  
    }
    </div>
  )
}

export default ProductDetail;
