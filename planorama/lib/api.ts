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

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
})

export const searchCities = async (parameter: string) => {
  try {
    const response = await API.get(`/city-and-airport-search/${parameter}`)
    return response.data
  } catch (error: Error | unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error(errorMessage);
    throw error
  }
}

export const searchFlights = async (originCode: string, destinationCode: string, dateOfDeparture: string) => {
  try {
    const response = await API.get("/flights/flight-search", {
      params: { originCode, destinationCode, dateOfDeparture },
    })
    return response.data
  } catch (error: Error | unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error(errorMessage);
    throw error
  }
}


export interface HotelSearchParams {
  cityCode: string;
  checkInDate: string;
  checkOutDate: string;
  adults?: number;
  roomQuantity?: number;
  priceRange?: string;
  amenities?: string[];
  ratings?: number[]; 
}


export const searchHotels = async (params: HotelSearchParams) => {
  try {
    const response = await API.get("/hotels/search", { params })
    return response.data
  } catch (error: Error | unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error(errorMessage);
    throw error
  }
}
