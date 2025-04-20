import Link from "next/link"
import { Plane } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-sky-500 text-white p-1 rounded">
                <Plane className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold text-white">Planorama</span>
            </div>
            <p className="text-sm">
              Your complete travel companion for flight search, itinerary planning, and packing assistance.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Features</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-sky-400">
                  Flight Search
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-sky-400">
                  Itinerary Planner
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-sky-400">
                  Packing Assistant
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-sky-400">
                  Travel Tips
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-sky-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-sky-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-sky-400">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-sky-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-sky-400">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-sky-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-sky-400">
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
  )
}
