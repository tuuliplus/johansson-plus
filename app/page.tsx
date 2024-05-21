import styles from '../styles/Home.module.css'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Johansson Plus',
  description: 'Your help with the technical side of Web Analytics and SEO.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function Page() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <picture>
          <source srcSet="/icon-384.webp" type="image/webp" />
          <source srcSet="/icon-384.png" type="image/png" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/icon-384.png"
            alt="Johansson Plus Logo"
            width="192px"
            height="192px"
          />
        </picture>
        <h1 className={styles.title}>Johansson Plus</h1>
        <p className={styles.description}>
          Your help with the technical side of Web Analytics and SEO.
        </p>
        <div className={styles.grid}>
          <Link href="/#footer" className={styles.card}>
            <h2>Contact info &rarr;</h2>
            <p>Services? We have services!</p>
          </Link>
          <a
            href="https://github.com/johansson-plus"
            target="_blank"
            className={styles.card}
            rel="noopener"
          >
            <h2>Github &rarr;</h2>
            <p>You Github? We Github!</p>
          </a>
        </div>
      </main>
      <footer id="footer" className={styles.footer}>
        <p>
          Johansson Plus
          <br />
          <br />
          <a href="https://tietopalvelu.ytj.fi/yritys/2437406-6">FI24374066</a>
          <br />
          <br />
          Turku, Finland
        </p>
        <p>
          Aleksi Johansson
          <br />
          <br />
          Senior Web Analytics and Technical SEO Consultant
          <br />
          <br />
          <a href="mailto:aleksi@johansson.plus">aleksi@johansson.plus</a>
        </p>
      </footer>
    </div>
  )
}
