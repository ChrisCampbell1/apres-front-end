// npm modules
import { useParams } from 'react-router'
import { useState, useEffect } from 'react'

// assets and stylesheets
import styles from './ProductDetail.module.css'

// services
import * as listingService from '../../services/listingService'

// types
import {Listing} from '../../types/models'

const ProductDetail = (): JSX.Element => {
  const params = useParams()
  const { id } = params
  const [listing, setListing] = useState<Listing>()

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
  }, [listing])

  return (  
    <div className={styles.container}>
      this is a ProductDetail Page
    </div>
  )
}

export default ProductDetail;
