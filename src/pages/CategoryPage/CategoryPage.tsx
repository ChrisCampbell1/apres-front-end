// assets and stylesheets
import styles from './CategoryPage.module.css'

// npm modules 
import { useState, useEffect } from 'react'

// components
import Filter from '../../components/Filter/Filter'
import ListingCardContainer from '../../components/ListingCardContainer/ListingCardContainer'

// services
import * as listingService from '../../services/listingService'

//types
import {Listing, User} from '../../types/models'

interface CategoryPageProps {
  category: string;
  user: User | null;
}

const CategoryPage = (props: CategoryPageProps): JSX.Element => {
  const [listings, setListings] = useState<Listing[]>([])
  const { category, user } = props
  console.log(category)


  useEffect(():void =>{
    async function fetchListings(): Promise<void> {
      try {
        const listingData = await listingService.getListings(category)
        setListings(listingData)
      } catch (error) {
        console.log(error)
      }
    }
    fetchListings()
  }, [category])

  return (  
    <div className={styles.container}>
      <h1>this is a category page for {category}</h1>
      <Filter />
      {listings.length > 0 ?
        <ListingCardContainer listings={listings} user={user}/>
      :
      <>
        <h1>No {category} Listings</h1>
        <h3>Please check back later!</h3>
      </>
    }
    </div>
  )
}

export default CategoryPage;
