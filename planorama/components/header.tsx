import Link from "next/link"
import { Plane } from "lucide-react"

export default function Header() {
  return (
    <header className="border-b bg-white sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-sky-500 text-white p-1 rounded">
            <Plane className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold text-sky-700">Planorama</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-gray-600 hover:text-sky-600">
            Flights
          </Link>
          <Link href="/" className="text-sm font-medium text-gray-600 hover:text-sky-600">
            Itineraries
          </Link>
          <Link href="/" className="text-sm font-medium text-gray-600 hover:text-sky-600">
            Packing Lists
          </Link>
          <Link href={"/contact"} className="text-sm font-medium text-gray-600 hover:text-sky-600">
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  )
}
