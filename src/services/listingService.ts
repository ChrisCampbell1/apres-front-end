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









export { getListings }
