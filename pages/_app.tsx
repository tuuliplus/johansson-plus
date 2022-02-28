import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'GTM-W7K2939',
  auth: 'U_vpzY9li4EGOIxcHUPH0Q',
  preview: 'env-3'
}

if (process.env.NODE_ENV == 'production') {
  tagManagerArgs.auth = 'G7DaCt68dZYo3M8G_aij-Q';
  tagManagerArgs.preview = 'env-1';
}

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
