import { Heart, Facebook, Twitter, Linkedin } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <Heart className="text-primary-light text-2xl mr-3" />
              <span className="text-white font-bold text-xl">Sahayata</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              A confidential screening tool designed to help identify early signs of developmental and mental health challenges in young people.
            </p>
            <div className="flex space-x-4">
              <Facebook className="text-gray-300 hover:text-primary-light transition-colors duration-200 cursor-pointer" />
              <Twitter className="text-gray-300 hover:text-primary-light transition-colors duration-200 cursor-pointer" />
              <Linkedin className="text-gray-300 hover:text-primary-light transition-colors duration-200 cursor-pointer" />
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><Link href="/getting-started" className="text-gray-300 hover:text-primary-light transition-colors duration-200">Getting Started</Link></li>
              <li><Link href="/faq" className="text-gray-300 hover:text-primary-light transition-colors duration-200">FAQ</Link></li>
              <li><Link href="/support-centers" className="text-gray-300 hover:text-primary-light transition-colors duration-200">Support Centers</Link></li>
              <li><Link href="/professional-directory" className="text-gray-300 hover:text-primary-light transition-colors duration-200">Professional Directory</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-6">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="/privacy-policy" className="text-gray-300 hover:text-primary-light transition-colors duration-200">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-gray-300 hover:text-primary-light transition-colors duration-200">Terms of Service</Link></li>
              <li><Link href="/disclaimer" className="text-gray-300 hover:text-primary-light transition-colors duration-200">Disclaimer</Link></li>
              <li><Link href="/contact-us" className="text-gray-300 hover:text-primary-light transition-colors duration-200">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Team GhostStack. All rights reserved. • 
            <span className="text-primary-light"> Sahayata is not a diagnostic tool. Please consult healthcare professionals for medical advice.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
