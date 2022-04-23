import axios from "axios"

const API = axios.create({
  baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places",
  params: {
    limit: 5,
    access_token: process.env.NEXT_PUBLIC_API_TOKEN,
  }
})

export default API