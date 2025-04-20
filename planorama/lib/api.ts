import axios from "axios"
import dotenv from "dotenv"
dotenv.config()


export type Airport = {
  code: string
  name: string
  city: string
}

export type Flight = {
  id: string
  airline: string
  flightNumber: string
  departureAirport: string
  arrivalAirport: string
  departureTime: string
  arrivalTime: string
  duration: string
  price: number
  stops: number
}

// Mock data for citySearch API
const airports: Airport[] = [
  { code: "JFK", name: "John F. Kennedy International Airport", city: "New York" },
  { code: "LAX", name: "Los Angeles International Airport", city: "Los Angeles" },
  { code: "ORD", name: "O'Hare International Airport", city: "Chicago" },
  { code: "LHR", name: "Heathrow Airport", city: "London" },
  { code: "CDG", name: "Charles de Gaulle Airport", city: "Paris" },
  { code: "SFO", name: "San Francisco International Airport", city: "San Francisco" },
  { code: "DXB", name: "Dubai International Airport", city: "Dubai" },
  { code: "HND", name: "Haneda Airport", city: "Tokyo" },
  { code: "SIN", name: "Changi Airport", city: "Singapore" },
  { code: "SYD", name: "Sydney Airport", city: "Sydney" },
]

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
})

export const searchCities = async (parameter: string) => {
  try {
    const response = await API.get(`/city-and-airport-search/${parameter}`)
    return response.data
  } catch (error) {
    console.error("Error searching cities:", error)
    throw error
  }
}

export const searchFlights = async (originCode: string, destinationCode: string, dateOfDeparture: string) => {
  try {
    const response = await API.get("/flights/flight-search", {
      params: { originCode, destinationCode, dateOfDeparture },
    })
    return response.data
  } catch (error) {
    console.error("Error searching flights:", error)
    throw error
  }
}

export const searchHotels = async (params: any) => {
  try {
    const response = await API.get("/hotels/search", { params })
    return response.data
  } catch (error) {
    console.error("Error searching hotels:", error)
    throw error
  }
}
