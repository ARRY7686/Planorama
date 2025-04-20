"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Plus, Plane, Hotel, MapPin, Coffee, Camera, Trash2 } from "lucide-react"
import { cn } from "@/lib/utils"

type ItineraryItem = {
  id: string
  type: "flight" | "hotel" | "activity" | "restaurant"
  title: string
  location?: string
  time?: string
  notes?: string
  day: number
}

export default function ItineraryPlanner() {
  const [tripName, setTripName] = useState("My Trip")
  const [startDate, setStartDate] = useState<Date | undefined>(new Date())
  const [endDate, setEndDate] = useState<Date | undefined>(new Date(new Date().setDate(new Date().getDate() + 7)))
  const [selectedDay, setSelectedDay] = useState(1)
  const [itineraryItems, setItineraryItems] = useState<ItineraryItem[]>([
    {
      id: "1",
      type: "flight",
      title: "Flight to Destination",
      location: "JFK to LAX",
      time: "08:00 AM",
      notes: "Check in online 24 hours before",
      day: 1,
    },
    {
      id: "2",
      type: "hotel",
      title: "Check in to Hotel",
      location: "Grand Hotel Downtown",
      time: "3:00 PM",
      notes: "Confirmation #12345",
      day: 1,
    },
    {
      id: "3",
      type: "restaurant",
      title: "Dinner Reservation",
      location: "Ocean View Restaurant",
      time: "7:30 PM",
      day: 1,
    },
    {
      id: "4",
      type: "activity",
      title: "City Tour",
      location: "Downtown",
      time: "10:00 AM",
      day: 2,
    },
  ])

  const [newItemType, setNewItemType] = useState<ItineraryItem["type"]>("activity")
  const [newItemTitle, setNewItemTitle] = useState("")
  const [newItemLocation, setNewItemLocation] = useState("")
  const [newItemTime, setNewItemTime] = useState("")
  const [newItemNotes, setNewItemNotes] = useState("")

  const addItem = () => {
    if (!newItemTitle) return

    const newItem: ItineraryItem = {
      id: Date.now().toString(),
      type: newItemType,
      title: newItemTitle,
      location: newItemLocation,
      time: newItemTime,
      notes: newItemNotes,
      day: selectedDay,
    }

    setItineraryItems([...itineraryItems, newItem])

    // Reset form
    setNewItemTitle("")
    setNewItemLocation("")
    setNewItemTime("")
    setNewItemNotes("")
  }

  const removeItem = (id: string) => {
    setItineraryItems(itineraryItems.filter((item) => item.id !== id))
  }

  const getDaysArray = () => {
    if (!startDate || !endDate) return [1]

    const days = []
    const currentDate = new Date(startDate)
    const lastDate = new Date(endDate)

    let dayCount = 1
    while (currentDate <= lastDate) {
      days.push(dayCount)
      currentDate.setDate(currentDate.getDate() + 1)
      dayCount++
    }

    return days
  }

  const getItemsForDay = (day: number) => {
    return itineraryItems.filter((item) => item.id !== "new" && item.day === day)
  }

  const getItemIcon = (type: ItineraryItem["type"]) => {
    switch (type) {
      case "flight":
        return <Plane className="h-5 w-5" />
      case "hotel":
        return <Hotel className="h-5 w-5" />
      case "restaurant":
        return <Coffee className="h-5 w-5" />
      case "activity":
        return <Camera className="h-5 w-5" />
      default:
        return <MapPin className="h-5 w-5" />
    }
  }

  const getItemColor = (type: ItineraryItem["type"]) => {
    switch (type) {
      case "flight":
        return "bg-blue-100 text-blue-600"
      case "hotel":
        return "bg-purple-100 text-purple-600"
      case "restaurant":
        return "bg-amber-100 text-amber-600"
      case "activity":
        return "bg-emerald-100 text-emerald-600"
      default:
        return "bg-gray-100 text-gray-600"
    }
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardContent className="p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="trip-name">Trip Name</Label>
              <Input
                id="trip-name"
                value={tripName}
                onChange={(e) => setTripName(e.target.value)}
                placeholder="Enter trip name"
              />
            </div>

            <div className="space-y-2">
              <Label>Start Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn("w-full justify-start text-left font-normal", !startDate && "text-muted-foreground")}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {startDate ? format(startDate, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={startDate} onSelect={setStartDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label>End Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn("w-full justify-start text-left font-normal", !endDate && "text-muted-foreground")}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {endDate ? format(endDate, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={endDate} onSelect={setEndDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-[250px_1fr] gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Days</h3>
          <div className="space-y-2">
            {getDaysArray().map((day) => (
              <Button
                key={day}
                variant={selectedDay === day ? "default" : "outline"}
                className="w-full justify-start"
                onClick={() => setSelectedDay(day)}
              >
                Day {day}
                {startDate && (
                  <span className="ml-auto text-xs opacity-70">
                    {format(new Date(startDate.getTime() + (day - 1) * 24 * 60 * 60 * 1000), "MMM d")}
                  </span>
                )}
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">
              Day {selectedDay} Itinerary
              {startDate && (
                <span className="ml-2 text-sm text-gray-500">
                  {format(new Date(startDate.getTime() + (selectedDay - 1) * 24 * 60 * 60 * 1000), "EEEE, MMMM d")}
                </span>
              )}
            </h3>
          </div>

          <div className="space-y-4">
            {getItemsForDay(selectedDay).length > 0 ? (
              getItemsForDay(selectedDay).map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className={`p-2 rounded-full ${getItemColor(item.type)}`}>{getItemIcon(item.type)}</div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <div>
                            <h4 className="font-medium">{item.title}</h4>
                            {item.location && (
                              <div className="text-sm text-gray-500 flex items-center mt-1">
                                <MapPin className="h-3.5 w-3.5 mr-1" />
                                {item.location}
                              </div>
                            )}
                          </div>
                          {item.time && <div className="text-sm font-medium">{item.time}</div>}
                        </div>
                        {item.notes && <div className="mt-2 text-sm text-gray-600">{item.notes}</div>}
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center py-12 border-2 border-dashed rounded-lg">
                <p className="text-gray-500">No activities planned for this day yet.</p>
              </div>
            )}
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Add New Item</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  <Button
                    variant={newItemType === "activity" ? "default" : "outline"}
                    className="justify-start"
                    onClick={() => setNewItemType("activity")}
                  >
                    <Camera className="mr-2 h-4 w-4" />
                    Activity
                  </Button>
                  <Button
                    variant={newItemType === "restaurant" ? "default" : "outline"}
                    className="justify-start"
                    onClick={() => setNewItemType("restaurant")}
                  >
                    <Coffee className="mr-2 h-4 w-4" />
                    Restaurant
                  </Button>
                  <Button
                    variant={newItemType === "hotel" ? "default" : "outline"}
                    className="justify-start"
                    onClick={() => setNewItemType("hotel")}
                  >
                    <Hotel className="mr-2 h-4 w-4" />
                    Hotel
                  </Button>
                  <Button
                    variant={newItemType === "flight" ? "default" : "outline"}
                    className="justify-start"
                    onClick={() => setNewItemType("flight")}
                  >
                    <Plane className="mr-2 h-4 w-4" />
                    Flight
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="item-title">Title</Label>
                    <Input
                      id="item-title"
                      value={newItemTitle}
                      onChange={(e) => setNewItemTitle(e.target.value)}
                      placeholder="Enter title"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="item-location">Location</Label>
                    <Input
                      id="item-location"
                      value={newItemLocation}
                      onChange={(e) => setNewItemLocation(e.target.value)}
                      placeholder="Enter location"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="item-time">Time</Label>
                    <Input
                      id="item-time"
                      value={newItemTime}
                      onChange={(e) => setNewItemTime(e.target.value)}
                      placeholder="e.g. 2:30 PM"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="item-notes">Notes</Label>
                    <Input
                      id="item-notes"
                      value={newItemNotes}
                      onChange={(e) => setNewItemNotes(e.target.value)}
                      placeholder="Any additional notes"
                    />
                  </div>
                </div>

                <Button onClick={addItem} className="w-full bg-sky-600 hover:bg-sky-700">
                  <Plus className="mr-2 h-4 w-4" />
                  Add to Itinerary
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
