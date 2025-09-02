import { Link, useLocation } from "wouter";
import { Heart } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-blue-700 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 py-2">
          <Link href="/" className="flex items-center group">
            <div className="p-2 bg-white/10 rounded-xl mr-3 group-hover:bg-white/20 transition-all duration-300">
              <Heart className="text-white text-2xl" />
            </div>
            <div>
              <span className="text-white font-bold text-xl tracking-wide">Sahayata</span>
              <div className="text-blue-200 text-xs font-medium opacity-90">by GhostStack • Confidential Support</div>
            </div>
          </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <Link 
                href="/"
                className={`transition-all duration-300 px-4 py-2 rounded-xl text-sm font-medium transform hover:scale-105 ${
                  location === "/" 
                    ? "text-white bg-white/20 shadow-md" 
                    : "text-gray-200 hover:text-white hover:bg-white/10"
                }`}
              >
                Home
              </Link>
              <Link 
                href="/about#ghoststack-team"
                className={`transition-all duration-300 px-4 py-2 rounded-xl text-sm font-medium transform hover:scale-105 ${
                  location.startsWith("/about") 
                    ? "text-white bg-white/20 shadow-md" 
                    : "text-gray-200 hover:text-white hover:bg-white/10"
                }`}
              >
                About Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
