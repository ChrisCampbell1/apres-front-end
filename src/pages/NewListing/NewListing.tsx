// npm modules
import React, { useState } from 'react'
import { useNavigate } from 'react-router'

// assets and stylesheets
import styles from './NewListing.module.css'

// services
import * as listingService from '../../services/listingService'

// types
import {Listing, User} from '../../types/models'
import { NewListingFormData } from '../../types/forms'

interface NewListingProps {
  user: User | null;
}

const NewListing = (props: NewListingProps): JSX.Element => {
  const navigate = useNavigate()
  
  const [form, setForm] = useState<NewListingFormData>({
    title: '',
    description: '',
    category: 'Skis',
    condition: 3,
    manufacturer: '',
    yearManufactured: '',
    dimensions: '',
    material: '',
    price: 1,
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
    const newListing = await listingService.create(form)
    if (photoData !== null) {
      await listingService.addPhoto(photoData, newListing.id)
    }
    navigate(`/listings/${newListing.id}`, {
      state: props.user
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
          />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default NewListing;
