// npm modules
import { useState } from 'react';

// assets and stylesheets
import styles from './Filter.module.css'

//types
import { FilterData } from '../../types/forms';

interface FilterProps {
  minPrice: number;
  maxPrice: number;
  handleFilterClick: (price: number | null, recencey: string | null, condition: number | null, state: string | null) => void;
  handleFilterResetClick: () => void;
}

const Filter = (props: FilterProps): JSX.Element => {
  const {minPrice, maxPrice, handleFilterClick, handleFilterResetClick} = props

  const [priceFilter, setPriceFilter] = useState<number | null>(null)
  const [recencyFilter, setRecencyFilter] = useState<string | null>(null)
  const [conditionFilter, setConditionFilter] = useState<number | null>(null)
  const [stateFilter, setStateFilter] = useState<string | null>(null)

  function handlePriceChange(evt: React.ChangeEvent<HTMLInputElement>): void {
    setPriceFilter(parseInt(evt.target.value))
  }

  function handleRecencyChange(evt: React.ChangeEvent<HTMLSelectElement>): void {
    setRecencyFilter(evt.target.value)
  }

  function handleConditionChange(evt: React.ChangeEvent<HTMLSelectElement>): void {
    setConditionFilter(parseInt(evt.target.value))
  }

  function handleStateChange(evt: React.ChangeEvent<HTMLSelectElement>): void {
    setStateFilter(evt.target.value)
  }

  return (  
    <div className={styles.container}>
      <h3>Filters</h3>
      <label htmlFor="price">Filter by Price</label>
      <input
        type="range"
        name="price"
        id="price"
        step={1}
        min={minPrice}
        max={maxPrice}
        onChange={handlePriceChange}
      />
      <p>Max Price: ${priceFilter}</p>
      {/* <label htmlFor="recency">Newest Listings</label>
      <select
        name="recency"
        id="recency"
        onChange={handleRecencyChange}
      >
        <option value=""></option>
        <option value="first">First</option>
        <option value="last">Last</option>
      </select> */}
      <label htmlFor="condition">Min Condition</label>
      <select
        name="condition"
        id="condition"
        onChange={handleConditionChange}
      >
        <option value=""></option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <label htmlFor="state">Filter by State</label>
      <select
        name="state"
        id="state"
        onChange={handleStateChange}
      >
        <option value=""></option>
        <option value="AL">Alabama</option>
        <option value="AK">Alaska</option>
        <option value="AZ">Arizona</option>
        <option value="AR">Arkansas</option>
        <option value="CA">California</option>
        <option value="CO">Colorado</option>
        <option value="CT">Connecticut</option>
        <option value="DE">Delaware</option>
        <option value="DC">District Of Columbia</option>
        <option value="FL">Florida</option>
        <option value="GA">Georgia</option>
        <option value="HI">Hawaii</option>
        <option value="ID">Idaho</option>
        <option value="IL">Illinois</option>
        <option value="IN">Indiana</option>
        <option value="IA">Iowa</option>
        <option value="KS">Kansas</option>
        <option value="KY">Kentucky</option>
        <option value="LA">Louisiana</option>
        <option value="ME">Maine</option>
        <option value="MD">Maryland</option>
        <option value="MA">Massachusetts</option>
        <option value="MI">Michigan</option>
        <option value="MN">Minnesota</option>
        <option value="MS">Mississippi</option>
        <option value="MO">Missouri</option>
        <option value="MT">Montana</option>
        <option value="NE">Nebraska</option>
        <option value="NV">Nevada</option>
        <option value="NH">New Hampshire</option>
        <option value="NJ">New Jersey</option>
        <option value="NM">New Mexico</option>
        <option value="NY">New York</option>
        <option value="NC">North Carolina</option>
        <option value="ND">North Dakota</option>
        <option value="OH">Ohio</option>
        <option value="OK">Oklahoma</option>
        <option value="OR">Oregon</option>
        <option value="PA">Pennsylvania</option>
        <option value="RI">Rhode Island</option>
        <option value="SC">South Carolina</option>
        <option value="SD">South Dakota</option>
        <option value="TN">Tennessee</option>
        <option value="TX">Texas</option>
        <option value="UT">Utah</option>
        <option value="VT">Vermont</option>
        <option value="VA">Virginia</option>
        <option value="WA">Washington</option>
        <option value="WV">West Virginia</option>
        <option value="WI">Wisconsin</option>
        <option value="WY">Wyoming</option>
      </select>
      <button onClick={() => handleFilterClick(priceFilter, recencyFilter, conditionFilter, stateFilter)}>Filter Listigns</button>
      <button onClick={() => handleFilterResetClick()}>Reset Filters</button>
    </div>
  )
}

export default Filter;
