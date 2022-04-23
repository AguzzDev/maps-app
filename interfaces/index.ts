export type SearchLocation = SearchLocationBody[]

export interface SearchLocationBody {
  coords: number[]
  placeName: string
  type: string
}
