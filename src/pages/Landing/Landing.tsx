// assets and stylesheets
import styles from './Landing.module.css'
import hero from '/assets/landing.jpg'

// types
import { User } from '../../types/models'

interface LandingProps {
  user: User | null;
}

const Landing = (props: LandingProps): JSX.Element => {
  const { user } = props

  return (
    <main className={styles.container}>
      <img src={hero} alt="apres-logo" id={styles.hero}/>
      <h1>Welcome to Après</h1>
      <h3>The premiere marketplace for buying and selling used ski and snowboard equipment</h3>
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
