"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { format } from "date-fns"
import { Loader2, Clock, Plane, Luggage } from "lucide-react"
import { searchFlights } from "../lib/api"

export default function FlightSearch() {
  const [originCode, setOriginCode] = useState('')
  const [destinationCode, setDestinationCode] = useState('')
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [dateOfDeparture, setDateOfDeparture] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [results, setResults] = useState<{ 
    id: string; 
    price?: { grandTotal?: string; currency?: string }; 
    itineraries?: { duration?: string; segments?: Segment[] }[]; 
    numberOfBookableSeats?: number 
  }[]>([])
  const [error, setError] = useState('')
  const [showResults, setShowResults] = useState(false)

  // Update dateOfDeparture when date changes
  const handleDateChange = (newDate: Date | undefined) => {
    setDate(newDate)
    if (newDate) {
      setDateOfDeparture(format(newDate, "yyyy-MM-dd"))
    }
  }

  const handleSearch = async () => {
    if (!originCode || !destinationCode || !dateOfDeparture) {
      setError('Please fill in all fields')
      return
    }

    setIsSearching(true)
    setShowResults(false)
    setError('')

    try {
      const res = await searchFlights(
        originCode, 
        destinationCode, 
        dateOfDeparture
      )
      
      const flightData = res.data
      console.log("Flight Data:", flightData)

      if (Array.isArray(flightData) && flightData.length > 0) {
        setResults(flightData)
        setShowResults(true)
      } else {
        setError('No flights found')
        setResults([])
      }
    } catch (err) {
      console.log("Error:", err)
      setError('Failed to fetch flights')
      setResults([])
    } finally {
      setIsSearching(false)
    }
  }

  // Format flight duration from API response
interface DurationFormatter {
    (duration: string | undefined): string;
}

const formatDuration: DurationFormatter = (duration) => {
    if (!duration) return "N/A";
    // Remove PT prefix from ISO duration format
    return duration.replace('PT', '').toLowerCase();
};

  // Calculate number of stops based on segments
interface Segment {
    departure?: {
        iataCode?: string;
        at?: string;
    };
    arrival?: {
        iataCode?: string;
        at?: string;
    };
    carrierCode?: string;
    number?: string;
}

const calculateStops = (segments: Segment[] | undefined): number => {
    if (!segments || !Array.isArray(segments)) return 0;
    return segments.length - 1;
};

  // Format datetime from API response
interface FormatDateTime {
    (dateTimeString: string | undefined): string;
}

const formatDateTime: FormatDateTime = (dateTimeString) => {
    if (!dateTimeString) return "N/A";
    try {
        const date = new Date(dateTimeString);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } catch (e) {
        return dateTimeString;
    }
};

  return (
    <div className="space-y-8">
      <Card>
        <CardContent className="p-6">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="from">From</Label>
              <div className="flex w-full rounded-md border border-input bg-transparent px-3 py-2">
                <input
                  placeholder="Origin (e.g. LON)"
                  value={originCode}
                  onChange={e => setOriginCode(e.target.value.toUpperCase())}
                  className="w-full bg-transparent outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="to">To</Label>
              <div className="flex w-full rounded-md border border-input bg-transparent px-3 py-2">
                <input
                  placeholder="Destination (e.g. SFO)"
                  value={destinationCode}
                  onChange={e => setDestinationCode(e.target.value.toUpperCase())}
                  className="w-full bg-transparent outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="date">Departure Date</Label>
              <div className="flex w-full rounded-md border border-input bg-transparent px-3 py-2">
                <input
                  type="date"
                  placeholder="DD/MM/YYYY"
                  value={dateOfDeparture}
                  onChange={e => setDateOfDeparture(e.target.value)}
                  className="w-full bg-transparent outline-none"
                />
              </div>
            </div>

            <div className="flex items-end">
              <Button className="w-full bg-sky-600 hover:bg-sky-700" onClick={handleSearch} disabled={isSearching}>
                {isSearching ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Searching...
                  </>
                ) : (
                  "Search Flights"
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {isSearching && (
        <div className="flex justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-sky-600" />
        </div>
      )}

      {error && (
        <div className="text-center py-6">
          <p className="text-red-500">{error}</p>
        </div>
      )}

      {showResults && results.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">
            Flight Results
            <span className="text-lg font-normal text-gray-500 ml-2">
              {originCode} to {destinationCode}
            </span>
          </h2>

          <div className="space-y-4">
            {results.map((flight: { id: string; price?: { grandTotal?: string; currency?: string }; itineraries?: { duration?: string; segments?: Segment[] }[]; numberOfBookableSeats?: number }) => {
              const itineraries = flight.itineraries?.[0]; // Get the first itinerary
              const segments = itineraries?.segments || [];
              const departureSegment = segments[0]; // First segment of the flight
              const arrivalSegment = segments[segments.length - 1]; // Last segment of the flight
              
              // Extracting information from the segments
              const departureAirport = departureSegment?.departure?.iataCode;
              const arrivalAirport = arrivalSegment?.arrival?.iataCode;
              const departureTime = formatDateTime(departureSegment?.departure?.at);
              const arrivalTime = formatDateTime(arrivalSegment?.arrival?.at);
              const price = flight.price?.grandTotal;
              const currency = flight.price?.currency;
              const stops = calculateStops(segments);
              const duration = formatDuration(itineraries?.duration);
              const availableSeats = flight.numberOfBookableSeats;

              return (
                <Card key={flight.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="p-6 flex-1">
                        <div className="flex items-center justify-between mb-4">
                          <div className="font-semibold">{departureSegment?.carrierCode || "Airline"}</div>
                          <div className="text-sm text-gray-500">Flight {departureSegment?.number || "N/A"}</div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="text-center">
                            <div className="text-2xl font-bold">{departureTime}</div>
                            <div className="text-sm text-gray-500">{departureAirport}</div>
                          </div>

                          <div className="flex flex-col items-center px-4">
                            <div className="text-xs text-gray-500 mb-1">{duration}</div>
                            <div className="relative w-32 h-[2px] bg-gray-300">
                              <div className="absolute top-1/2 left-0 w-2 h-2 -mt-1 rounded-full bg-sky-600"></div>
                              <div className="absolute top-1/2 right-0 w-2 h-2 -mt-1 rounded-full bg-sky-600"></div>
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                              {stops === 0 ? "Nonstop" : `${stops} stop${stops > 1 ? 's' : ''}`}
                            </div>
                          </div>

                          <div className="text-center">
                            <div className="text-2xl font-bold">{arrivalTime}</div>
                            <div className="text-sm text-gray-500">{arrivalAirport}</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 mt-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {duration}
                          </div>
                          <div className="flex items-center">
                            <Plane className="h-4 w-4 mr-1" />
                            {stops === 0 ? "Nonstop" : `${stops} stop${stops > 1 ? 's' : ''}`}
                          </div>
                          <div className="flex items-center">
                            <Luggage className="h-4 w-4 mr-1" />
                            {availableSeats} seats available
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-6 flex flex-col justify-between border-t md:border-t-0 md:border-l">
                        <div className="text-2xl font-bold text-center md:text-right">
                          {price} {currency}
                        </div>
                        <Button className="mt-4 bg-sky-600 hover:bg-sky-700">Select Flight</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      )}

      {showResults && results.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No flights found for your search criteria.</p>
        </div>
      )}
    </div>
  )
}