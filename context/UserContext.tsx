import { useEffect } from "react"
import { useState } from "react"
import { createContext } from "react"

interface ChildrenP {
  children: React.ReactNode
}

interface Props {
  user: { lat: number; lng: number }
}

export const UserContext = createContext<Props>({
  user: { lat: 0, lng: 0 },
})

const UserProvider = ({ children }: ChildrenP) => {
  const [user, setUser] = useState<{ lat: number; lng: number }>({
    lat: 0,
    lng: 0,
  })

  useEffect(() => {
    if (typeof window !== "undefined") {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        setUser({
          lat: coords.latitude,
          lng: coords.longitude,
        })
      })
    }
  }, [])

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  )
}

export default UserProvider
