import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative mt-16">
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white via-white/80 to-[#1E5F46] -translate-y-16"></div>
      <div className="relative bg-gradient-to-r from-[#1E5F46] to-[#174C39] text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div>
              <img src="/image_(5) copy copy copy copy.png" alt="The Rolling Group" className="h-20 w-auto mb-4" />
              <p className="text-white/70 text-sm">Commercial Grounds & Property Services</p>
            </div>

          <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
            <Link to="/" className="text-white/90 hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-white/40">·</span>
            <Link to="/services" className="text-white/90 hover:text-white transition-colors">
              Services
            </Link>
            <span className="text-white/40">·</span>
            <Link to="/about" className="text-white/90 hover:text-white transition-colors">
              About
            </Link>
            <span className="text-white/40">·</span>
            <Link to="/contact" className="text-white/90 hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          <div className="space-y-2 text-sm text-white/90 md:text-right">
            <div className="flex items-center md:justify-end">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Houston, TX</span>
            </div>
            <div className="flex items-center md:justify-end">
              <Phone className="w-4 h-4 mr-2" />
              <a href="tel:+18328015009" className="hover:text-white transition-colors">
                (832) 801-5009
              </a>
            </div>
            <div className="flex items-center md:justify-end">
              <Mail className="w-4 h-4 mr-2" />
              <a href="mailto:Nicrolling@therollinggroup.com" className="hover:text-white transition-colors">
                Nicrolling@therollinggroup.com
              </a>
            </div>
          </div>
        </div>
      </div>

        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white/60">
              <p>&copy; {new Date().getFullYear()} The Rolling Group</p>
              <div className="flex items-center gap-3 mt-2 md:mt-0">
                <Link to="/contact" className="hover:text-white/90 transition-colors">
                  Privacy
                </Link>
                <span>·</span>
                <Link to="/contact" className="hover:text-white/90 transition-colors">
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
