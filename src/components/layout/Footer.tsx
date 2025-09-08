import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-forest-950 text-white pt-16 pb-8 w-full">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and About */}
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl font-bold">EverGreen Landscaping</h3>
            <p className="font-body text-stone-300 leading-relaxed">
              Creating beautiful, sustainable landscapes in Vancouver, British Columbia since 2010.
            </p>
            <div className="flex space-x-4 pt-2">
              {/* Social Media Icons */}
              <a href="#" className="text-white hover:text-forest-300 transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-forest-300 transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-forest-300 transition-colors" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-playfair">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-stone-300 hover:text-forest-300 transition-colors">Home</Link>
              <Link to="/about" className="text-stone-300 hover:text-forest-300 transition-colors">About Us</Link>
              <Link to="/projects" className="text-stone-300 hover:text-forest-300 transition-colors">Projects</Link>
              <Link to="/contact" className="text-stone-300 hover:text-forest-300 transition-colors">Contact</Link>
              <a href="#" className="text-stone-300 hover:text-forest-300 transition-colors">Privacy Policy</a>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-playfair">Our Services</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-stone-300 hover:text-forest-300 transition-colors">Landscape Design</a>
              <a href="#" className="text-stone-300 hover:text-forest-300 transition-colors">Garden Maintenance</a>
              <a href="#" className="text-stone-300 hover:text-forest-300 transition-colors">Hardscaping</a>
              <a href="#" className="text-stone-300 hover:text-forest-300 transition-colors">Irrigation Systems</a>
              <a href="#" className="text-stone-300 hover:text-forest-300 transition-colors">Outdoor Lighting</a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-playfair">Contact Us</h3>
            <address className="not-italic text-stone-300 space-y-3">
              <p className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-forest-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>123 Arbutus Street<br />Vancouver, BC V6J 3Z2</span>
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-forest-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(604) 555-1234</span>
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-forest-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@evergreenlandscaping.com</span>
              </p>
            </address>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-forest-800 pt-8 pb-6">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-2 font-playfair">Subscribe to Our Newsletter</h3>
            <p className="text-stone-300 mb-4">Stay updated with our latest projects and landscaping tips</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow rounded-md px-4 py-2 bg-forest-900 border border-forest-700 text-white focus:outline-none focus:ring-2 focus:ring-forest-400"
              />
              <Button className="bg-forest-600 hover:bg-forest-500 text-white">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-forest-800 mt-8 pt-6 text-center text-stone-400 text-sm">
          <p>&copy; {new Date().getFullYear()} EverGreen Landscaping. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
