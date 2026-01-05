import { Link } from 'react-router-dom';
import { Sprout, Building, Factory, Trees } from 'lucide-react';
import BackgroundPattern from './BackgroundPattern';

export default function Services() {
  const commercialImages = [
    {
      url: '/rs=w_600,h_300,cg_true.webp',
      title: 'Texas Commercial Landscaping'
    },
    {
      url: '/rs=w_600,h_300,cg_true (1).webp',
      title: 'Corporate Property Maintenance'
    },
    {
      url: '/rs=w_600,h_300,cg_true (2).webp',
      title: 'Commercial Grounds Care'
    },
    {
      url: '/rs=w_600,h_300,cg_true (3).webp',
      title: 'Professional Landscape Management'
    },
    {
      url: '/istockphoto-1907187462-612x612.jpg',
      title: 'Government Facility Maintenance'
    },
    {
      url: '/Government-Facility-Grounds-Maintenance-at-Winchester-Opequon-Water-Reclemation-Center-in-Winchester-VA-1024x683.jpg',
      title: 'Water Facility Grounds Care'
    }
  ];

  const serviceCategories = [
    {
      title: 'Commercial Grounds Maintenance',
      icon: Sprout,
      services: [
        'Large-property mowing',
        'Industrial trimming/edging',
        'Herbicide/weed control',
        'Mulching',
        'Seasonal care',
        'Storm debris cleanup',
        'Irrigation system checks',
      ],
    },
    {
      title: 'Government & Institutional Services',
      icon: Building,
      services: [
        'Municipal landscapes',
        'State agency grounds care',
        'Federal property compliance',
        'School districts & universities',
        'Public parks maintenance',
        'Community facility upkeep',
      ],
    },
    {
      title: 'Corporate & Industrial Services',
      icon: Factory,
      services: [
        'Office parks',
        'Distribution centers',
        'Warehouses',
        'Car dealerships',
        'Retail centers',
        'Multi-building campuses',
      ],
    },
    {
      title: 'Additional Services',
      icon: Trees,
      services: [
        'Bulk trash & debris removal',
        'Land clearing',
        'Pressure washing',
        'Fence line clearing',
        'Parking lot maintenance',
      ],
    },
  ];

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <BackgroundPattern />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-emerald-50 text-emerald-800 rounded-full text-sm font-semibold mb-6">
            Our Services
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Grounds Management
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Full-service commercial grounds management designed for multi-facility operations and long-term partnerships across Texas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {serviceCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200 hover:border-emerald-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="bg-emerald-600 rounded-lg p-3 mr-4">
                  <category.icon className="text-white" size={26} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {category.services.map((service, serviceIndex) => (
                  <li
                    key={serviceIndex}
                    className="flex items-start text-gray-700"
                  >
                    <span className="text-emerald-600 mr-3 mt-1 font-bold">•</span>
                    <span className="leading-relaxed">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Project Portfolio
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real results from commercial properties across Texas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commercialImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-white font-bold text-lg">{image.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative bg-emerald-600 rounded-2xl p-12 lg:p-16 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full"></div>
          </div>
          <div className="relative text-center max-w-3xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-emerald-50 mb-8 leading-relaxed">
              Let's create a tailored maintenance program designed specifically for your facilities and operational needs.
            </p>
            <Link
              to="/proposal"
              className="inline-flex items-center px-10 py-4 bg-white text-emerald-600 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all duration-200 shadow-xl"
            >
              Request a Proposal
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
