"use client"

import { useState } from "react"
import {
  Search,
  MapPin,
  Calendar,
  Clock,
  Plus,
  Sun,
  Cloud,
  CloudRain,
  Share2,
  Plane,
  Hotel,
  Coffee,
  Camera,
  ChevronDown,
  X,
  Menu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function PlanoramaDesign() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-3 bg-white border-b">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="bg-emerald-500 text-white p-1 rounded">
              <MapPin className="h-5 w-5" />
            </div>
            <h1 className="text-xl font-bold text-emerald-700">Planorama</h1>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="gap-1">
            <Share2 className="h-4 w-4" />
            Share
          </Button>
          {/* <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar> */}
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        {sidebarOpen && (
          <div className="w-80 border-r bg-white flex flex-col">
            <div className="p-4 border-b">
              <h2 className="font-semibold mb-2">Trip to Paris</h2>
              <div className="flex items-center text-sm text-gray-500 gap-2">
                <Calendar className="h-4 w-4" />
                <span>June 15-22, 2025</span>
              </div>
            </div>

            <Tabs defaultValue="search" className="flex-1 flex flex-col">
              <TabsList className="grid grid-cols-3 mx-4 mt-2">
                <TabsTrigger value="search">Search</TabsTrigger>
                <TabsTrigger value="saved">Saved</TabsTrigger>
                <TabsTrigger value="weather">Weather</TabsTrigger>
              </TabsList>

              <TabsContent value="search" className="flex-1 overflow-auto p-4 space-y-4">
                <div className="space-y-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input placeholder="Search for places..." className="pl-9" />
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-1 rounded-full">
                      <Hotel className="h-3.5 w-3.5" />
                      Hotels
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1 rounded-full">
                      <Coffee className="h-3.5 w-3.5" />
                      Restaurants
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1 rounded-full">
                      <Camera className="h-3.5 w-3.5" />
                      Attractions
                    </Button>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-medium">Flight Search</h3>
                  <Card>
                    <CardContent className="p-3 space-y-3">
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="text-xs text-gray-500">From</label>
                          <Input placeholder="NYC" className="h-8 mt-1" />
                        </div>
                        <div>
                          <label className="text-xs text-gray-500">To</label>
                          <Input placeholder="Paris" className="h-8 mt-1" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="text-xs text-gray-500">Depart</label>
                          <Input type="date" className="h-8 mt-1" />
                        </div>
                        <div>
                          <label className="text-xs text-gray-500">Return</label>
                          <Input type="date" className="h-8 mt-1" />
                        </div>
                      </div>
                      <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Search Flights</Button>
                    </CardContent>
                  </Card>

                  <h3 className="font-medium">Popular in Paris</h3>
                  <div className="space-y-2">
                    {["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral", "Arc de Triomphe"].map((place, i) => (
                      <Card key={i} className="overflow-hidden">
                        <div className="flex">
                          <div className="w-20 h-20 bg-gray-200 flex-shrink-0">
                            <img
                              src={`/placeholder.svg?height=80&width=80`}
                              alt={place}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <CardContent className="p-3 flex-1">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-medium text-sm">{place}</h4>
                                <p className="text-xs text-gray-500">Tourist Attraction</p>
                              </div>
                              <Button size="icon" variant="ghost" className="h-6 w-6">
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                          </CardContent>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="saved" className="flex-1 overflow-auto p-4 space-y-4">
                <h3 className="font-medium">Saved Places</h3>
                <div className="space-y-2">
                  {["Hotel de Paris", "Le Petit Café", "Musée d'Orsay"].map((place, i) => (
                    <Card key={i} className="overflow-hidden">
                      <div className="flex">
                        <div className="w-20 h-20 bg-gray-200 flex-shrink-0">
                          <img
                            src={`/placeholder.svg?height=80&width=80`}
                            alt={place}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardContent className="p-3 flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium text-sm">{place}</h4>
                              <p className="text-xs text-gray-500">
                                {i === 0 ? "Hotel" : i === 1 ? "Restaurant" : "Attraction"}
                              </p>
                            </div>
                            <Button size="icon" variant="ghost" className="h-6 w-6">
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="weather" className="flex-1 overflow-auto p-4 space-y-4">
                <h3 className="font-medium">Weather Forecast</h3>
                <Card>
                  <CardContent className="p-3">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">Paris, France</h4>
                      <span className="text-sm text-gray-500">7-day forecast</span>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-center">
                      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
                        <div key={i} className="p-2">
                          <div className="text-xs font-medium">{day}</div>
                          <div className="my-1">
                            {i === 0 && <Sun className="h-5 w-5 mx-auto text-yellow-500" />}
                            {i === 1 && <Sun className="h-5 w-5 mx-auto text-yellow-500" />}
                            {i === 2 && <Cloud className="h-5 w-5 mx-auto text-gray-400" />}
                            {i === 3 && <CloudRain className="h-5 w-5 mx-auto text-blue-400" />}
                            {i === 4 && <CloudRain className="h-5 w-5 mx-auto text-blue-400" />}
                            {i === 5 && <Cloud className="h-5 w-5 mx-auto text-gray-400" />}
                            {i === 6 && <Sun className="h-5 w-5 mx-auto text-yellow-500" />}
                          </div>
                          <div className="text-xs">{70 + Math.floor(Math.random() * 10)}°F</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Map View */}
          <div className="relative h-1/2 bg-gray-200 border-b">
            <div className="absolute inset-0">
              <img
                src="/placeholder.svg?height=400&width=800"
                alt="Map of Paris"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-4 right-4 flex gap-2">
              <Button variant="outline" size="sm" className="bg-white">
                <MapPin className="h-4 w-4 mr-1" />
                Add Location
              </Button>
            </div>
          </div>

          {/* Itinerary Timeline */}
          <div className="flex-1 overflow-auto p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-lg">Itinerary</h2>
              {/* <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    Day 1
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Day 1</DropdownMenuItem>
                  <DropdownMenuItem>Day 2</DropdownMenuItem>
                  <DropdownMenuItem>Day 3</DropdownMenuItem>
                  <DropdownMenuItem>Day 4</DropdownMenuItem>
                  <DropdownMenuItem>Day 5</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu> */}
            </div>

            <div className="space-y-4">
              {/* Flight */}
              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Plane className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium">Flight to Paris</h3>
                        <Button variant="ghost" size="sm" className="h-6 px-2">
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="text-sm text-gray-600 mt-1">Air France #456</div>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="text-sm">
                          <div className="font-medium">8:30 AM</div>
                          <div className="text-xs text-gray-500">JFK</div>
                        </div>
                        <div className="flex-1 border-t border-dashed border-gray-300 mx-2 relative">
                          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-white px-2 text-xs text-gray-500">
                            7h 30m
                          </div>
                        </div>
                        <div className="text-sm">
                          <div className="font-medium">4:00 PM</div>
                          <div className="text-xs text-gray-500">CDG</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Hotel */}
              <Card className="border-l-4 border-l-emerald-500">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-100 p-2 rounded-full">
                      <Hotel className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium">Hotel de Paris</h3>
                        <Button variant="ghost" size="sm" className="h-6 px-2">
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="text-sm text-gray-600 mt-1">Check-in: 3:00 PM</div>
                      <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                        <Clock className="h-3.5 w-3.5" />
                        <span>30 min from airport by taxi</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Restaurant */}
              <Card className="border-l-4 border-l-amber-500">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-amber-100 p-2 rounded-full">
                      <Coffee className="h-5 w-5 text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium">Le Petit Café</h3>
                        <Button variant="ghost" size="sm" className="h-6 px-2">
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="text-sm text-gray-600 mt-1">Dinner: 7:30 PM</div>
                      <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                        <Clock className="h-3.5 w-3.5" />
                        <span>15 min walk from hotel</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Empty Slot */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                <Button variant="ghost" className="text-gray-500">
                  <Plus className="h-4 w-4 mr-1" />
                  Add Activity
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
