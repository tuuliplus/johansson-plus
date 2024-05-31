'use client'

import '../styles/globals.css'
import Script from 'next/script'

declare global {
  interface Window {
    dataLayer: [{}]
  }
}
const dataLayerPush = (dataLayerProps: object) => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push(dataLayerProps)
  }
}

const tagManagerArgs = {
  gtmId: 'GTM-W7K2939',
  auth: 'U_vpzY9li4EGOIxcHUPH0Q',
  preview: 'env-3',
}
if (process.env.NODE_ENV == 'production') {
  tagManagerArgs.auth = 'G7DaCt68dZYo3M8G_aij-Q'
  tagManagerArgs.preview = 'env-1'
}
const gtmUrl = tagManagerArgs
  ? `https://www.googletagmanager.com/gtm.js?id=${tagManagerArgs.gtmId}&gtm_auth=${tagManagerArgs.auth}&gtm_preview=${tagManagerArgs.preview}&gtm_cookies_win=x`
  : undefined

const fathomUrl = 'https://cdn.usefathom.com/script.js'
const fathomSiteId = 'WKVAFXWQ'

const plausibleUrl = 'https://plausible.io/js/script.outbound-links.js'
const plausibleDomain = 'johansson.plus'

const simpleAnalyticsUrl = 'https://scripts.simpleanalyticscdn.com/latest.js'
const simpleAnalyticsDisregardDnt = 'true'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          src={fathomUrl}
          data-spa="auto"
          data-site={fathomSiteId}
          defer
        />
        <Script defer src={plausibleUrl} data-domain={plausibleDomain} />
        <Script
          data-collect-dnt={simpleAnalyticsDisregardDnt}
          async
          defer
          src={simpleAnalyticsUrl}
        />
        <Script
          async
          src={gtmUrl}
          onLoad={() => {
            dataLayerPush({
              event: 'gtm.js',
              'gtm.start': new Date().getTime(),
            })
          }}
        />
      </body>
    </html>
  )
}
