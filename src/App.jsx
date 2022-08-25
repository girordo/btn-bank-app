import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
} from './components'

import styles from './styles'

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <section className={`${styles.paddingX} ${styles.flexCenter}`}>
        <section className={`${styles.boxWidth}`}>
          <Navbar />
        </section>
      </section>

      <section className={`bg-primary ${styles.flexStart}`}>
        <section className={`${styles.boxWidth}`}>
          <Hero />
        </section>
      </section>

      <section className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <section className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <CTA />
          <Clients />
        </section>
      </section>
    </div>
  )
}

export default App
