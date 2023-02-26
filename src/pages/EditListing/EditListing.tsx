// npm modules
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router'

// assets and stylesheets
import styles from './EditListing.module.css'

// services
import * as listingService from '../../services/listingService'

// types
import {Listing, User} from '../../types/models'
import { EditListingFormData } from '../../types/forms'

interface EditListingProps {
  user: User | null;
}

const EditListing = (props: EditListingProps): JSX.Element => {
  const navigate = useNavigate()
  const location = useLocation()
  const listing: Listing = location.state
  const { user } = props
  
  const [form, setForm] = useState<EditListingFormData>({
    title: listing.title,
    description: listing.description,
    category: listing.category,
    condition: listing.condition,
    manufacturer: listing.manufacturer,
    yearManufactured: listing.yearManufactured.toString(),
    dimensions: listing.dimensions,
    material: listing.material,
    price: listing.price,
  })

  const [photoData, setPhotoData] = useState<File | null>(null)

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [evt.target.name]: evt.target.value })
  }
  
  const handleChangePhoto = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (evt.target.files) setPhotoData(evt.target.files[0])
  }

  const handleSubmit = async (evt: React.FormEvent) => {
    evt.preventDefault()
    const newListing = await listingService.editListing(form, listing?.id)
    if (photoData !== null) {
      await listingService.addPhoto(photoData, listing.id)
    }
    navigate(`/listings/${listing.id}`, {
      state: {user}
    })
  }

  return (  
    <div className={styles.container}>
      <h1>New Listing</h1>
      <form autoComplete='off' onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputContainer}>
          <label htmlFor="title-input">Title</label>
          <input 
            name='title'
            type='text' 
            required
            id='title-input'
            placeholder='What are you selling?'
            onChange={handleChange}
            value={form.title}
          />
        </div>
        <div className={styles.inputContainer}>
          {photoData ?
            <label htmlFor="image-input" className={styles.photoInput}>Image Added</label>
            :
            <label htmlFor="image-input" className={styles.photoInput}>Add an Image</label>
          }
          <input
            type='file'
            name='image'
            id='image-input'
            onChange={handleChangePhoto}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="category-input">Category</label>
          <select
            name="category"
            id="category-input"
            required
            onChange={handleChange}
            value={form.category}
          >
            <option value="Skis">Skis</option>
            <option value="Ski Boots">Ski Boots</option>
            <option value="Poles">Poles</option>
            <option value="Accessories">Accessories</option>
            <option value="Clothing">Clothing</option>
            <option value="Snowboards">Snowboards</option>
            <option value="Snowboard Boots">Snowboard Boots</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div  className={styles.inputContainer}>
          <label htmlFor="condition-input">Condition</label>
          <select 
            name="condition" 
            id="condition-input"
            required
            onChange={handleChange}
            value={form.condition}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="description-input">Description</label>
          <textarea 
            name='description'
            cols={10}
            rows={10} 
            required
            id='description-input'
            placeholder=''
            onChange={handleChange}
            value={form.description}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="manufacturer-input">Manfacturer</label>
          <input 
            name='manufacturer'
            type="text" 
            required
            id='manufacturer-input'
            placeholder='manufacturer'
            onChange={handleChange}
            value={form.manufacturer}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="year-input">Year Manufactured</label>
          <input
            name='yearManufactured'
            type="number" 
            required
            id='year-input'
            placeholder='year'
            onChange={handleChange}
            value={form.yearManufactured}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="dimensions-input">Dimensions</label>
          <input 
            name='dimensions'
            type="text" 
            required
            id='dimensions-input'
            placeholder='dimensions or clothing size'
            onChange={handleChange}
            value={form.dimensions}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="material-input">Material</label>
          <input 
            name='material'
            type="text" 
            required
            id='material-input'
            placeholder='material(s)'
            onChange={handleChange}
            value={form.material}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="price-input">Price</label>
          <input 
            name='price'
            type="number" 
            required
            id='price-input'
            placeholder='Price in USD'
            onChange={handleChange}
            value={form.price}
          />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default EditListing;
