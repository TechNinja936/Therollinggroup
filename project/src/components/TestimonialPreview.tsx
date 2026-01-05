import { Link } from 'react-router-dom';
import { Quote, ArrowRight } from 'lucide-react';
import BackgroundPattern from './BackgroundPattern';

export default function TestimonialPreview() {
  const testimonials = [
    {
      name: 'Harris County',
      text: 'The Rolling Group handles multiple county facilities with consistency, professionalism, and outstanding response times.',
    },
    {
      name: 'Texas Southern',
      text: 'Reliable, punctual, and always safety-compliant. Their crews manage our campuses flawlessly.',
    },
    {
      name: 'Texas Department',
      text: 'High-quality commercial service. The Rolling Group meets state compliance standards and keeps our properties inspection-ready.',
    },
  ];

  return (
    <section className="relative py-16 lg:py-20 bg-white overflow-hidden">
      <BackgroundPattern />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-emerald-50 text-emerald-800 rounded-full text-sm font-semibold mb-6">
            Client Testimonials
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Leading Organizations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Organizations across Texas rely on us for consistent, professional grounds management and long-term partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:border-emerald-200 transition-colors duration-300"
            >
              <div className="bg-emerald-600 rounded-lg w-12 h-12 flex items-center justify-center mb-6">
                <Quote className="text-white" size={24} />
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                {testimonial.text}
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-gray-900">
                  {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/testimonials"
            className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            View All Testimonials
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
