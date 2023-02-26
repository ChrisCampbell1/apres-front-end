// npm packages
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// assets and stylesheets
import styles from './Profiles.module.css'

// services
import * as profileService from '../../services/profileService'

// types
import { Profile } from '../../types/models'

const Profiles = (): JSX.Element => {
  const [profiles, setProfiles] = useState<Profile[]>([])

  useEffect((): void => {
    const fetchProfiles = async (): Promise<void> => {
      try {
        const profileData: Profile[] = await profileService.getAllProfiles()
        setProfiles(profileData)
      } catch (error) {
        console.log(error)
      }
    }
    fetchProfiles()
  }, [])

  if(!profiles.length) return <p>Loading Profiles</p>

  return (
    <div>
      <h1>User Directory</h1>
      <div className={styles.container}>
        {profiles.map((profile: Profile) =>
          // <p key={profile.id}>{profile.name}</p>
          <Link to={`/profiles/${profile.id}`} state={profile} key={profile.id}>
            <div key={profile.id} className={styles.profileCard}>
              <img src={profile.photo} alt="user avatar" />
              <p id={styles.name}>{profile.name}</p>
              <div className={styles.about}>
                <p>Location: {profile.city}, {profile.state}</p>
                <p>Member Since: {profile.createdAt.slice(0,10)}</p>
                <p>Listings: {profile.listings.length}</p>
              </div>
            </div>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Profiles
