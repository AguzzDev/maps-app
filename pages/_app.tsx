import type { AppProps } from "next/app"
import MapProvider from "context/MapContext"
import UserProvider from "context/UserContext"

import "../styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <MapProvider>
        <Component {...pageProps} />
      </MapProvider>
    </UserProvider>
  )
}

export default MyApp
