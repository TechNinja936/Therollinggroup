import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-20"
    >
      <div
        className="absolute inset-0 opacity-90"
        style={{
          backgroundImage: 'url("/assets/rolling-hero-bg..svg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>

      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent via-white/50 to-white"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl">
          <div className="mb-8">
            <img
              src="/image_(5) copy copy copy copy.png"
              alt="The Rolling Group Logo"
              className="h-32 w-auto"
            />
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1]">
            Protecting the Value and Performance of Commercial Properties
          </h1>

          <p className="text-xl sm:text-2xl text-white/90 mb-10 leading-relaxed max-w-3xl">
            Professional grounds maintenance and landscape management for commercial properties, institutions, and multi-facility portfolios across Texas. We deliver consistent results, responsive service, and long-term reliability.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              to="/proposal"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Request a Consultation
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-900 bg-white backdrop-blur-sm border-2 border-white rounded-lg hover:bg-white/90 transition-all duration-200"
            >
              View Our Services
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-2xl">
            <div className="border-l-4 border-white/60 pl-4">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">15+</div>
              <div className="text-sm text-white/80">Years of Commercial Experience</div>
            </div>
            <div className="border-l-4 border-white/60 pl-4">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">100%</div>
              <div className="text-sm text-white/80">Commercial Property Focus</div>
            </div>
            <div className="border-l-4 border-white/60 pl-4">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm text-white/80">Response & Service Readiness</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
