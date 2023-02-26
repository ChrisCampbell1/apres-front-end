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

  function handleFilterClick(price: number | null, recencey: string | null, condition: number | null, state: string | null): void {
    if (price !==  null) {
      const result = listings.filter(listing => listing.price <= price)
      setListings(result)
    }
    if (condition !== null) {
      const result = listings.filter(listing => listing.condition >= condition)
      setListings(result)
    }
    if (state !== null) {
      const result = listings.filter(listing => listing.seller.state === state)
      setListings(result)
    }
    // if (recencey !== null) {
    //   if (recencey === "first") {
    //     listings.sort((a, b): Listing[] => {a.createdAt - b.createdAt})
    //   }
    // }
  }

  function handleFilterResetClick(): void {
    async function fetchListings(): Promise<void> {
      try {
        const listingData = await listingService.getListings(category)
        setListings(listingData)
      } catch (error) {
        console.log(error)
      }
    }
    fetchListings()
  }

  function findMax(listings: Listing[]): number {
    let max = 0
    listings.forEach((listing) => {
      if (listing?.price > max) max = listing.price
    })
    return max
  }

  const maxPrice = findMax(listings)

  function findMin(listings: Listing[]): number {
    let min = maxPrice
    listings.forEach((listing) => {
      if (listing?.price < min) min = listing.price
    })
    return min
  }

  const minPrice = findMin(listings)

  return (  
    <div className={styles.container}>
      <h1>{category} Listings</h1>
      <div className={styles.listings}>
        <Filter minPrice={minPrice} maxPrice={maxPrice} handleFilterClick={handleFilterClick} handleFilterResetClick={handleFilterResetClick}/>
        {listings.length > 0 ?
          <ListingCardContainer listings={listings} user={user}/>
        :
        <>
          <h1>No {category} Listings</h1>
          <h3>Please check back later!</h3>
        </>
        }
      </div>
    </div>
  )
}

export default CategoryPage;
