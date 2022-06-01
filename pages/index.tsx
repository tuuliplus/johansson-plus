import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Johansson Plus</title>
        <meta name="description" content="Your help with the technical side of Web Analytics and SEO." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
      </Head>
      <main className={styles.main}>
        <picture>
          <source srcSet="/icon-384.webp" type="image/webp" />
          <source srcSet="/icon-384.png" type="image/png" />
          <img src="/icon-384.png" alt="Johansson Plus Logo" width="192px" height="192px" />
        </picture>
        <h1 className={styles.title}>
          Johansson Plus
        </h1>
        <p className={styles.description}>
          Your help with the technical side of Web Analytics and SEO.
        </p>
        <div className={styles.grid}>
          <Link href="/#footer">
            <a className={styles.card}>
              <h2>Contact info &rarr;</h2>
              <p>Services? We have services!</p>
            </a>
          </Link>
            <a href="https://github.com/johansson-plus" target="_blank" className={styles.card} rel="noopener">
              <h2>Github &rarr;</h2>
              <p>You Github? We Github!</p>
            </a>
        </div>
      </main>
      <footer id="footer" className={styles.footer}>
        <p>
          Johansson Plus
          <br/>
          <br/>
          <a href="https://tietopalvelu.ytj.fi/yritystiedot.aspx?yavain=2353885&tarkiste=C9219A323832200A90459D06ACE2A65D20464FA5">FI24374066</a>
          <br/>
          <br/>
          Turku, Finland
        </p>
        <p>
          Aleksi Johansson
          <br/>
          <br/>
          Web Analytics and Technical SEO Consultant
          <br/>
          <br/>
          <a href="mailto:aleksi@johansson.plus">aleksi@johansson.plus</a>
        </p>
      </footer>
    </div>
  )
}

export default Home
