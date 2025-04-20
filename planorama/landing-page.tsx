import { Button } from "@/components/ui/button"
import { MapPin, Plane, Hotel, Calendar, Share2, Clock, Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-500 text-white p-1 rounded">
              <MapPin className="h-5 w-5" />
            </div>
            <h1 className="text-xl font-bold text-emerald-700">Planorama</h1>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm font-medium text-gray-600 hover:text-emerald-600">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-emerald-600">
              How It Works
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-gray-600 hover:text-emerald-600">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="outline" size="sm">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                Sign up
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-emerald-50 to-white">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                Plan your perfect trip with ease
              </h1>
              <p className="text-lg text-gray-600">
                Planorama is the all-in-one travel planner that helps you create, organize, and share your travel
                itineraries with drag-and-drop simplicity.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/signup">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 w-full sm:w-auto">
                    Get Started — It's Free
                  </Button>
                </Link>
                <Link href="#how-it-works">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    See How It Works
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Check className="h-4 w-4 text-emerald-500" />
                <span>No credit card required</span>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Planorama app interface"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Everything you need for seamless travel planning</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Planorama combines powerful travel APIs with an intuitive interface to make trip planning effortless.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl border">
                <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                  <Plane className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Flight Search</h3>
                <p className="text-gray-600">
                  Find and compare flights from hundreds of airlines using the Amadeus API integration.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border">
                <div className="bg-emerald-100 p-3 rounded-full w-fit mb-4">
                  <Hotel className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Accommodations & Attractions</h3>
                <p className="text-gray-600">
                  Discover hotels, restaurants, and attractions with Google Maps API integration.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border">
                <div className="bg-amber-100 p-3 rounded-full w-fit mb-4">
                  <Calendar className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Drag & Drop Planning</h3>
                <p className="text-gray-600">
                  Easily organize your itinerary with our intuitive drag-and-drop interface.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border">
                <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Travel Time Calculations</h3>
                <p className="text-gray-600">Get accurate travel times between locations to optimize your schedule.</p>
              </div>

              <div className="bg-white p-6 rounded-xl border">
                <div className="bg-sky-100 p-3 rounded-full w-fit mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-sky-600"
                  >
                    <path d="M8 16.2c4 .2 8-1.1 11.4-3.8" />
                    <path d="M8 19.9c4 .2 8-1.1 11.4-3.8" />
                    <path d="M8 12.4c4 .2 8-1.1 11.4-3.8" />
                    <path d="M8 8.7c4 .2 8-1.1 11.4-3.8" />
                    <path d="M12.5 4.3c1.4-.5 2.7-1.1 4-1.9" />
                    <path d="M19 16c.3 1.1.5 2.2.5 3.5 0 1-.1 1.9-.3 2.8" />
                    <path d="M4 5c1.1 0 2.3.2 3.5.2" />
                    <path d="M7 10.8c-1.1.3-2.3.5-3.5.5" />
                    <path d="M7 16c-1.1.3-2.3.5-3.5.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Weather Forecasts</h3>
                <p className="text-gray-600">Check the weather for your destination with OpenWeatherMap integration.</p>
              </div>

              <div className="bg-white p-6 rounded-xl border">
                <div className="bg-pink-100 p-3 rounded-full w-fit mb-4">
                  <Share2 className="h-6 w-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Collaborative Planning</h3>
                <p className="text-gray-600">
                  Share your itineraries with friends and family for collaborative trip planning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">How Planorama Works</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Planning your perfect trip is as easy as 1-2-3 with our intuitive platform.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-emerald-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Create Your Trip</h3>
                <p className="text-gray-600">
                  Set your destination, dates, and preferences to get started with your travel planning.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-emerald-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Add Activities</h3>
                <p className="text-gray-600">
                  Search for flights, hotels, restaurants, and attractions to add to your itinerary.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-emerald-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Organize & Share</h3>
                <p className="text-gray-600">
                  Drag and drop to organize your perfect schedule, then share it with your travel companions.
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Link href="/signup">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  Start Planning Your Trip
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose the plan that works best for your travel needs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-xl border">
                <h3 className="text-xl font-semibold mb-2">Free</h3>
                <div className="text-4xl font-bold mb-4">$0</div>
                <p className="text-gray-600 mb-6">Perfect for occasional travelers</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-emerald-500" />
                    <span>Up to 3 trips</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-emerald-500" />
                    <span>Basic flight search</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-emerald-500" />
                    <span>Weather forecasts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-emerald-500" />
                    <span>Share with 1 person</span>
                  </li>
                </ul>
                <Link href="/signup">
                  <Button variant="outline" className="w-full">
                    Get Started
                  </Button>
                </Link>
              </div>

              <div className="bg-emerald-50 p-8 rounded-xl border-2 border-emerald-500 relative">
                <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  POPULAR
                </div>
                <h3 className="text-xl font-semibold mb-2">Premium</h3>
                <div className="text-4xl font-bold mb-4">$9.99</div>
                <p className="text-gray-600 mb-6">For frequent travelers</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-emerald-500" />
                    <span>Unlimited trips</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-emerald-500" />
                    <span>Advanced flight search</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-emerald-500" />
                    <span>Weather forecasts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-emerald-500" />
                    <span>Share with 5 people</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-emerald-500" />
                    <span>Travel time calculations</span>
                  </li>
                </ul>
                <Link href="/signup">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Get Premium</Button>
                </Link>
              </div>

              <div className="bg-white p-8 rounded-xl border">
                <h3 className="text-xl font-semibold mb-2">Business</h3>
                <div className="text-4xl font-bold mb-4">$29.99</div>
                <p className="text-gray-600 mb-6">For travel agencies & groups</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-emerald-500" />
                    <span>Unlimited trips</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-emerald-500" />
                    <span>Premium flight search</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-emerald-500" />
                    <span>Advanced weather data</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-emerald-500" />
                    <span>Share with unlimited people</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-emerald-500" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <Link href="/signup">
                  <Button variant="outline" className="w-full">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-emerald-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to plan your next adventure?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of travelers who use Planorama to create unforgettable trips.
            </p>
            <Link href="/signup">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                Get Started for Free
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-emerald-500 text-white p-1 rounded">
                  <MapPin className="h-5 w-5" />
                </div>
                <h1 className="text-xl font-bold text-white">Planorama</h1>
              </div>
              <p className="text-sm">
                The all-in-one travel planner that helps you create, organize, and share your travel itineraries.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#features" className="hover:text-emerald-400">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="hover:text-emerald-400">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400">
                    API
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400">
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-emerald-400">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-emerald-400">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} Planorama. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
