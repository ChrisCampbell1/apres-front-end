// npm modules
import { Link } from 'react-router-dom';

// assets and stylesheets
import styles from './Landing.module.css'
import heroVideo from '/assets/hero-video.mp4'

// types
import { User } from '../../types/models'

interface LandingProps {
  user: User | null;
}

const Landing = (props: LandingProps): JSX.Element => {
  const { user } = props

  return (
    <main className={styles.container}>
      {/* <img src={hero} alt="apres-logo" id={styles.hero}/> */}
      <video src={heroVideo}
        playsInline
        autoPlay
        muted
        loop
        id={styles.hero}>
      </video>
      <h1>Welcome to the premiere marketplace for buying and selling used ski and snowboard gear.</h1>
      <div className={styles.about}>
        <article>
          Looking to buy used ski or snowboard equipment? You're at the right place. Browse hundreds of local listings to find the best deals on the gear you need.
          <div className='buttons'>
            <Link to={'/'}>Shop Now</Link>
          </div>
        </article>
      <article>
        Not sure what to do with those skis that have been sitting in your quiver unsed for the past few seasons? Create an account on après to list your gear and connect with other local skiers and snowboarders who are shoping for used gear.
        <div className='buttons'>
          <Link to={'/signup'}>Sign Up</Link>
          <Link to={'/login'}>Log In</Link>
        </div>
      </article>
      </div>
    </main>
  )
}

export default Landing
