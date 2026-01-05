import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      organization: 'Texas Southern',
      text: 'The Rolling Group handles multiple county facilities with consistency, professionalism, and outstanding response times.',
    },
    {
      organization: 'Texas Department',
      text: 'Reliable, punctual, and always safety-compliant. Their crews manage our campuses flawlessly.',
    },
    {
      organization: 'Harris County',
      text: 'High-quality commercial service. The Rolling Group meets state compliance standards and keeps our properties inspection-ready.',
    },
    {
      organization: 'Texas Southern',
      text: 'A dependable partner for large-scale grounds maintenance. Their team handles complex sites efficiently.',
    },
    {
      organization: 'Texas Department',
      text: 'The Rolling Group is our go-to for landscape management across multiple MUD facilities.',
    },
    {
      organization: 'Harris County',
      text: 'Their attention to detail and professional reporting sets them apart from other contractors.',
    },
    {
      organization: 'Texas Department',
      text: 'We rely on them for year-round maintenance and property appearance. Highly recommended.',
    },
    {
      organization: 'Harris County',
      text: 'They manage our multi-site commercial properties and keep every location consistent.',
    },
    {
      organization: 'Texas Department',
      text: 'Fast, safe, compliant. The Rolling Group is excellent for industrial grounds care.',
    },
    {
      organization: 'Harris County',
      text: 'Their commercial service contracts are transparent, efficient, and executed with precision.',
    },
  ];

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Leading Institutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Organizations across Texas rely on us for consistent, professional grounds management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 border border-gray-200"
            >
              <Quote className="text-gray-400 mb-4" size={32} />
              <p className="text-gray-700 mb-6 leading-relaxed">
                {testimonial.text}
              </p>
              <div className="pt-4 border-t border-gray-100">
                <p className="font-semibold text-gray-900">
                  {testimonial.organization}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
