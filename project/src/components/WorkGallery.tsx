import BackgroundPattern from './BackgroundPattern';

export default function WorkGallery() {
  const images = [
    {
      src: '/commercial_landscaping_crew_roadside_mowing_2 copy.jpg',
      alt: 'Roadside mowing equipment with safety signage',
      title: 'Roadside Vegetation Management'
    },
    {
      src: '/harvesting-mowing.jpg copy.webp',
      alt: 'Commercial grounds maintenance crew at work',
      title: 'Commercial Grounds Care'
    },
    {
      src: '/56afee5d071df19c7d639db230c98466 copy.jpeg',
      alt: 'Highway right-of-way maintenance',
      title: 'Highway Right-of-Way Services'
    }
  ];

  return (
    <section className="relative py-16 lg:py-20 bg-gray-50 overflow-hidden">
      <BackgroundPattern />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our Work in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional equipment, experienced crews, and commitment to safety on every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-lg">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
