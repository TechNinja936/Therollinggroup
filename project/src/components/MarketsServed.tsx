import { Building2, GraduationCap, Store, Factory, Building, Heart } from 'lucide-react';
import BackgroundPattern from './BackgroundPattern';

export default function MarketsServed() {
  const markets = [
    {
      icon: Building2,
      title: 'Commercial Properties',
      description: 'Office parks, business centers, and corporate campuses across Texas'
    },
    {
      icon: Store,
      title: 'Retail Centers',
      description: 'Shopping centers, strip malls, and standalone retail locations'
    },
    {
      icon: Factory,
      title: 'Industrial Facilities',
      description: 'Warehouses, distribution centers, and manufacturing plants'
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Schools, universities, and educational institutions'
    },
    {
      icon: Building,
      title: 'Government',
      description: 'Municipal, state, and federal facilities with compliance expertise'
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Medical centers, hospitals, and healthcare facilities'
    }
  ];

  return (
    <section className="relative py-16 lg:py-20 bg-white overflow-hidden">
      <BackgroundPattern />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-emerald-50 text-emerald-800 rounded-full text-sm font-semibold mb-6">
            Markets We Serve
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Serving Diverse Industries
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Specialized expertise across multiple sectors, delivering tailored grounds management solutions that meet each industry's unique requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {markets.map((market, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-emerald-200"
            >
              <div className="bg-emerald-50 rounded-lg w-14 h-14 flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                <market.icon className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{market.title}</h3>
              <p className="text-gray-600 leading-relaxed">{market.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
