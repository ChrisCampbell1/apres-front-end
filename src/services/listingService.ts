// services
import * as tokenService from './tokenService'

// types
import { Listing } from '../types/models'
import { NewListingFormData, EditListingFormData } from '../types/forms'

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

async function createListing (formData: NewListingFormData): Promise<Listing> {
  try {
    const res = await fetch(`${BASE_URL}`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(formData)
    })
    return await res.json() as Listing
  } catch (error) {
    throw error
  }
}

async function addPhoto(
  photoData: File, 
  listingId: number
): Promise<Listing> {
  try {
    const data = new FormData()
    data.append('image', photoData)
    const res = await fetch(`${BASE_URL}/${listingId}/add-photo`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: data
    })
    return await res.json() as Listing
  } catch (error) {
    throw error
  }
}

async function editListing(formData: EditListingFormData, id: number): Promise<Listing> {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(formData)
    })
    return await res.json() as Listing
  } catch (error) {
    throw error
  }
}

async function deleteListing(id: number): Promise<Listing> {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
    })
    return await res.json() as Listing
  } catch (error) {
    throw error
  }
}

export { getListings, getListing, purchaseListing, createListing, addPhoto, editListing, deleteListing }
