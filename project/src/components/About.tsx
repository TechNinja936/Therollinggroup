import { Award, Shield, Users, Target } from 'lucide-react';
import BackgroundPattern from './BackgroundPattern';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'Providing dependable, scalable, and safety-focused landscaping solutions for commercial, municipal, and government agencies.',
    },
    {
      icon: Shield,
      title: 'Compliance First',
      description: 'Full commitment to safety standards, OSHA compliance, and contract-ready operations for government and corporate clients.',
    },
    {
      icon: Users,
      title: 'Professional Teams',
      description: 'Experienced crews managing large-scale operations with professionalism, structure, and accountability.',
    },
    {
      icon: Award,
      title: 'Long-Term Partnerships',
      description: 'Building lasting relationships through consistent quality, clear communication, and reliable service delivery.',
    },
  ];

  return (
    <section id="about" className="relative py-20 bg-white overflow-hidden">
      <BackgroundPattern />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="order-2 lg:order-1 flex flex-col items-center justify-start pt-12">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-xl overflow-hidden shadow-2xl mb-6 bg-white">
              <img
                src="/1738171591111.jpeg"
                alt="Nicholas Rolling - Founder & CEO"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-lg px-6 py-3 text-white text-center shadow-lg">
              <p className="text-xl font-semibold mb-1">Nicholas Rolling</p>
              <p className="text-sm text-emerald-100">Founder & CEO</p>
            </div>
          </div>

          <div className="order-1 lg:order-2 pt-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About The Founder
            </h2>
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-emerald-600 mb-2">
                Nicholas Rolling
              </h3>
              <p className="text-lg text-gray-600 mb-4">Founder & CEO</p>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Nicholas Rolling founded The Rolling Group with a mission to provide dependable, scalable, and safety-focused landscaping solutions for commercial, municipal, and government agencies.
              </p>
              <p>
                With experience managing large teams and complex maintenance operations, Nicholas built the company around professionalism, structure, and accountability. The Rolling Group today serves organizations that require consistent, contract-ready grounds management supported by clear communication, compliance, and reliability.
              </p>
              <p>
                Under Nicholas's leadership, the company has grown to become a trusted partner for public and private institutions across Texas, known for exceptional service quality and unwavering commitment to client success.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:bg-emerald-600 hover:text-white transition-all duration-300 group border border-gray-100 hover:border-emerald-600"
              >
                <div className="bg-emerald-600 group-hover:bg-white rounded-lg w-14 h-14 flex items-center justify-center mb-4 transition-colors duration-300">
                  <value.icon className="text-white group-hover:text-emerald-600 transition-colors duration-300" size={28} />
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-white transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="text-gray-600 group-hover:text-gray-200 transition-colors duration-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative bg-emerald-600 rounded-2xl p-12 text-white overflow-hidden shadow-xl">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full"></div>
          </div>
          <div className="relative max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">
              Experience & Expertise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-emerald-100">Years of Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-emerald-100">Properties Managed</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-emerald-100">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
