// npm modules
import { Link } from 'react-router-dom';

// assets and stylesheets
import styles from './Landing.module.css'

// types
import { User } from '../../types/models'

interface LandingProps {
  user: User | null;
}

const Landing = (props: LandingProps): JSX.Element => {
  const { user } = props

  return (
    <main className={styles.container}>
      <div className={styles.landingHero}>
        <div className={styles.text}>
          <div className={styles.colorblock}>
            <div className={styles.cta}>
              <h1>Welcome to Après</h1>
              <div className={styles.buttons}>
                <Link to={'/all'}>Shop Now</Link>
              </div>
            </div>
            <div className={styles.cta}>
              <div className={styles.buttons}>
                {user ?
                <>
                <Link to={'/listings/new'}>Create Listing</Link>
                </>
                :
                <>
                <Link to={'/signup'}>Sign Up</Link>
                <Link to={'/login'}>Log In</Link>
                </>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Landing
