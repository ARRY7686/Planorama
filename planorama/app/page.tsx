import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FlightSearch from "@/components/flight-search"
import ItineraryPlanner from "@/components/itinerary-planner"
import PackingAssistant from "@/components/packing-assistant"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Plane, Calendar, Briefcase } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-sky-100 to-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                Your complete travel companion
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Search flights, plan your itinerary, and pack smart - all in one place.
              </p>
            </div>
          </div>
        </section>

        {/* Main Tabs Section */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="flights" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="flights" className="text-base py-3">
                  <Plane className="mr-2 h-4 w-4" />
                  Flight Search
                </TabsTrigger>
                <TabsTrigger value="itinerary" className="text-base py-3">
                  <Calendar className="mr-2 h-4 w-4" />
                  Itinerary Planner
                </TabsTrigger>
                <TabsTrigger value="packing" className="text-base py-3">
                  <Briefcase className="mr-2 h-4 w-4" />
                  Packing Assistant
                </TabsTrigger>
              </TabsList>

              <TabsContent value="flights">
                <FlightSearch />
              </TabsContent>

              <TabsContent value="itinerary">
                <ItineraryPlanner />
              </TabsContent>

              <TabsContent value="packing">
                <PackingAssistant />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why choose Planorama?</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-sky-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Plane className="h-6 w-6 text-sky-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Smart Flight Search</h3>
                <p className="text-gray-600">
                  Find the best flights with our powerful search engine that compares options across multiple airlines.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-sky-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-sky-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Intuitive Itinerary Planning</h3>
                <p className="text-gray-600">
                  Organize your trip day by day with our easy-to-use itinerary planner. Keep all your travel details in
                  one place.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-sky-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-sky-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Smart Packing Lists</h3>
                <p className="text-gray-600">
                  Never forget essential items with customized packing lists based on your destination and trip
                  duration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-sky-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to plan your next adventure?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Start using Planorama today and experience stress-free travel planning.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
