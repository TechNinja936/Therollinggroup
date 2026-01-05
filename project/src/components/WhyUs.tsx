import { Shield, Target, Users, Award } from 'lucide-react';

export default function WhyUs() {
  const principles = [
    {
      icon: Target,
      title: '15+ Years of Experience',
      description: 'Over a decade serving Texas commercial properties with proven results and trusted partnerships.'
    },
    {
      icon: Shield,
      title: 'Full Compliance & Insurance',
      description: 'OSHA-compliant operations, comprehensive liability coverage, and safety-first protocols for every job.'
    },
    {
      icon: Users,
      title: 'Dedicated Account Teams',
      description: 'Personal service with dedicated account managers who understand your property and priorities.'
    },
    {
      icon: Award,
      title: 'Quality Guaranteed',
      description: 'Consistent, reliable service backed by our commitment to excellence and customer satisfaction.'
    }
  ];

  return (
    <section className="relative py-16 lg:py-20 bg-emerald-600 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white rounded-full"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6">
            Our Commitment
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Built on Trust and Excellence
          </h2>
          <p className="text-xl text-emerald-50 max-w-3xl mx-auto leading-relaxed">
            The Rolling Group delivers more than grounds maintenance. We deliver peace of mind through professional service, experienced teams, and a proven track record.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-emerald-100 rounded-lg w-14 h-14 flex items-center justify-center mb-6">
                <principle.icon className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{principle.title}</h3>
              <p className="text-gray-600 leading-relaxed">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
