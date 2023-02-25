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
import {Listing} from '../../types/models'

interface CategoryPageProps {
  category: string
}

const CategoryPage = (props: CategoryPageProps): JSX.Element => {
  const [listings, setListings] = useState<Listing[]>([])
  const { category } = props
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
      <h1>this is a category page</h1>
      <Filter />
      <ListingCardContainer listings={listings}/>
    </div>
  )
}

export default CategoryPage;
