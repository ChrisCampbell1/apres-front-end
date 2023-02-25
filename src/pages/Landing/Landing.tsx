// assets and stylesheets
import styles from './Landing.module.css'
import hero from '/assets/temp-landing-hero.png'

// types
import { User } from '../../types/models'

interface LandingProps {
  user: User | null;
}

const Landing = (props: LandingProps): JSX.Element => {
  const { user } = props

  return (
    <main className={styles.container}>
      <h1>Landing Page</h1>
      <img src={hero} alt="apres-logo" />
      <article>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum laudantium id exercitationem molestias molestiae ratione fugiat officiis dolorem! Aperiam, quo suscipit ipsum odio porro officiis asperiores nostrum corporis nobis dolorum?
      </article>
      <article>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum laudantium id exercitationem molestias molestiae ratione fugiat officiis dolorem! Aperiam, quo suscipit ipsum odio porro officiis asperiores nostrum corporis nobis dolorum?
      </article>
    </main>
  )
}

export default Landing
