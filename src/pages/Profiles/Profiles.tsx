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

  if(!profiles.length) return <p>No profiles yet</p>

  return (
    <>
      <h1>Hello. This is a list of all the profiles.</h1>
      {profiles.map((profile: Profile) =>
        // <p key={profile.id}>{profile.name}</p>
        <div key={profile.id} className={styles.profileCard}>
          <img src={profile.photo} alt="user avatar" />
          <Link to={`/profiles/${profile.id}`} state={profile}>{profile.name}</Link>
        </div>
      )}
    </>
  )
}

export default Profiles
