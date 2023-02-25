// services
import * as tokenService from './tokenService'

// types
import { Listing } from '../types/models'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/listings`

async function getListings(category: string): Promise<Listing[]> {
  try {
    const res = await fetch(`${BASE_URL}/category/${category}`)
    return await res.json() as Listing[]
  } catch (error) {
    throw error
  }
}

async function getListing(id: string | undefined): Promise<Listing> {
  try {
    const res = await fetch(`${BASE_URL}/${id}`)
    return await res.json() as Listing
  } catch (error) {
    throw error
  }
}

async function purchaseListing(id: number | undefined): Promise<Listing> {
  try {
    const res = await fetch(`${BASE_URL}/${id}/purchase`, {
      method: 'PUT',
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
    })
    return await res.json() as Listing
  } catch (error) {
    throw error
  }
}






export { getListings, getListing, purchaseListing }
