import { Link } from 'react-router-dom';
import { Building2, Landmark, Factory, TreeDeciduous, ArrowRight } from 'lucide-react';
import BackgroundPattern from './BackgroundPattern';

export default function ServiceOverview() {
  const services = [
    {
      icon: Landmark,
      title: 'Government & Institutional',
      description: 'Specialized maintenance for municipal, state, and federal properties with full compliance support and experienced crews.',
      image: '/Government-Facility-Grounds-Maintenance-at-Winchester-Opequon-Water-Reclemation-Center-in-Winchester-VA-1024x683.jpg'
    },
    {
      icon: Building2,
      title: 'Commercial Properties',
      description: 'Year-round property care for corporate campuses, office parks, and multi-building facilities with reliable service.',
      image: '/rs=w_600,h_300,cg_true.webp'
    },
    {
      icon: Factory,
      title: 'Industrial Operations',
      description: 'Heavy-duty grounds care for warehouses, distribution centers, and industrial complexes requiring specialized equipment.',
      image: '/rs=w_600,h_300,cg_true (1).webp'
    },
    {
      icon: TreeDeciduous,
      title: 'Multi-Site Management',
      description: 'Coordinated maintenance across multiple locations with consistent quality, centralized reporting, and dedicated account management.',
      image: '/rs=w_600,h_300,cg_true (2).webp'
    },
  ];

  return (
    <section className="relative py-16 lg:py-20 bg-white overflow-hidden">
      <BackgroundPattern />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Service Lines
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Four core service offerings designed to meet the unique needs of commercial clients across Texas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-emerald-100 rounded-lg p-3 mr-4">
                    <service.icon className="text-emerald-600" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="h-1 w-full bg-gradient-to-r from-emerald-600 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            View All Services
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
