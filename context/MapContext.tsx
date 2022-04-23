import { createContext } from "react"
import mapboxgl from "mapbox-gl"
import { Map, Popup } from "mapbox-gl"
import { useEffect } from "react"
import { useRef, useState, useContext } from "react"
import { UserContext } from "./UserContext"

interface Props {
  children: React.ReactNode
}
interface MapP {
  map?: Map
}

export const MapContext = createContext<MapP>({
  map: undefined,
})

const MapProvider = ({ children }: Props) => {
  mapboxgl.accessToken = process.env.NEXT_PUBLIC_API_TOKEN!

  const [loading, setLoading] = useState(true)
  const [map, setMap] = useState<Map>()
  const mapContainer = useRef<HTMLDivElement>(null)

  const { user } = useContext(UserContext)

  useEffect(() => {
    setLoading(false)

    if (!loading && user.lat !== 0 && user.lng !== 0) {
      const map = new Map({
        container: mapContainer.current!,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [user.lng, user.lat],
        zoom: 9,
      })
      setMap(map)
    }
  }, [loading, user])

  return (
    <MapContext.Provider value={{ map }}>
      <section ref={mapContainer} style={{ width: "100vw", height: "100vh" }}>
        {children}
      </section>
    </MapContext.Provider>
  )
}

export default MapProvider
