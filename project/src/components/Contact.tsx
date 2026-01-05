import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, CheckCircle, Zap, Building2, MessageSquare, ArrowRight } from 'lucide-react';
import { supabase } from '../lib/supabase';
import BackgroundPattern from './BackgroundPattern';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    propertyType: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            organization: formData.organization,
            email: formData.email,
            phone: formData.phone,
            property_type: formData.propertyType,
            message: formData.message,
          },
        ]);

      if (error) throw error;

      const emailResponse = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-notification-email`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            type: 'contact',
            data: {
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              message: `Organization: ${formData.organization}\nProperty Type: ${formData.propertyType}\n\n${formData.message}`,
            },
          }),
        }
      );

      if (!emailResponse.ok) {
        console.error('Failed to send email notification');
      }

      setSubmitted(true);
      setFormData({
        name: '',
        organization: '',
        email: '',
        phone: '',
        propertyType: '',
        message: '',
      });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('There was an error submitting your message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative bg-white overflow-hidden">
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <BackgroundPattern />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Let's Talk About Your Property
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Connect with our team to discuss commercial grounds management, ongoing maintenance, or property-specific needs. We'll respond quickly and professionally.
          </p>
        </div>
      </section>

      <section className="relative py-16 lg:py-24 overflow-hidden">
        <BackgroundPattern />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              What Happens When You Reach Out
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-emerald-600 hover:shadow-lg transition-all duration-300">
              <div className="bg-emerald-100 rounded-lg w-14 h-14 flex items-center justify-center mb-6">
                <Zap className="text-emerald-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Fast, Professional Response
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We respond promptly during business hours and offer after-hours support for active clients.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-emerald-600 hover:shadow-lg transition-all duration-300">
              <div className="bg-emerald-100 rounded-lg w-14 h-14 flex items-center justify-center mb-6">
                <Building2 className="text-emerald-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Commercial-Focused Conversations
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We work exclusively with commercial properties, institutions, and multi-site operations.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-emerald-600 hover:shadow-lg transition-all duration-300">
              <div className="bg-emerald-100 rounded-lg w-14 h-14 flex items-center justify-center mb-6">
                <MessageSquare className="text-emerald-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Clear Next Steps
              </h3>
              <p className="text-gray-600 leading-relaxed">
                No pressure. Just an honest discussion about your property and how we can help.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 lg:py-24 overflow-hidden">
        <BackgroundPattern />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-emerald-600 rounded-xl p-10 text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="mr-4 mt-1 flex-shrink-0 text-emerald-200" size={24} />
                    <div>
                      <h4 className="font-semibold mb-1">Service Area</h4>
                      <p className="text-emerald-100">
                        Greater Houston Area & Surrounding Counties
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="mr-4 mt-1 flex-shrink-0 text-emerald-200" size={24} />
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <a href="tel:+18328015009" className="text-emerald-100 hover:text-white transition-colors">
                        832-801-5009
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="mr-4 mt-1 flex-shrink-0 text-emerald-200" size={24} />
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <a href="mailto:ncirolling@therollinggroup.com" className="text-emerald-100 hover:text-white transition-colors break-all">
                        ncirolling@therollinggroup.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="mr-4 mt-1 flex-shrink-0 text-emerald-200" size={24} />
                    <div>
                      <h4 className="font-semibold mb-1">Business Hours</h4>
                      <p className="text-emerald-100 mb-2">
                        Monday – Friday<br />
                        8:00 AM – 6:00 PM
                      </p>
                      <p className="text-emerald-200 text-sm">
                        For urgent service matters, existing clients may contact us after hours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              {submitted ? (
                <div className="bg-emerald-50 rounded-xl p-12 text-center h-full flex flex-col items-center justify-center border border-emerald-200">
                  <CheckCircle className="mx-auto mb-6 text-emerald-600" size={64} />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Thank You for Contacting The Rolling Group
                  </h3>
                  <p className="text-gray-700 mb-2">
                    A member of our team will be in touch shortly.
                  </p>
                </div>
              ) : (
                <div className="bg-white rounded-xl p-10 border-2 border-gray-200 shadow-lg">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">Request a Consultation</h3>
                    <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full">
                      Commercial Clients Only
                    </span>
                  </div>
                  <p className="text-gray-600 mb-8">
                    Tell us a bit about your property so we can route your request appropriately.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 outline-none transition-all bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Organization / Property Name *
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 outline-none transition-all bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 outline-none transition-all bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 outline-none transition-all bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Property Type *
                      </label>
                      <select
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 outline-none transition-all bg-white"
                      >
                        <option value="">Select property type</option>
                        <option value="Office / Corporate">Office / Corporate</option>
                        <option value="Retail / Mixed-Use">Retail / Mixed-Use</option>
                        <option value="Industrial">Industrial</option>
                        <option value="Multifamily">Multifamily</option>
                        <option value="Institutional">Institutional</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 outline-none transition-all bg-white"
                        placeholder="Tell us about your property, service needs, location, or timeline."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full px-8 py-4 bg-emerald-600 text-white rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                    >
                      {loading ? 'Sending...' : 'Request Consultation'}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 lg:py-24 bg-gray-50 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Service Coverage
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              We proudly serve commercial properties throughout the Greater Houston region, including:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
            {[
              'Harris County',
              'Fort Bend County',
              'Montgomery County',
              'Brazoria County',
              'Galveston County',
              'Liberty County'
            ].map((county) => (
              <div key={county} className="bg-white rounded-lg p-4 border border-gray-200 text-center font-semibold text-gray-900">
                {county}
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto">
            For large or multi-site portfolios, please contact us to discuss extended coverage.
          </p>
        </div>
      </section>

      <section className="relative py-20 lg:py-32 overflow-hidden">
        <BackgroundPattern />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-emerald-600 rounded-2xl p-12 lg:p-16 text-white text-center overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full"></div>
            </div>
            <div className="relative max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                A Reliable Partner for Commercial Properties
              </h2>
              <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
                Whether you manage one site or multiple locations, The Rolling Group delivers consistent service, clear communication, and dependable results.
              </p>
              <Link
                to="/proposal"
                className="inline-flex items-center px-10 py-4 bg-white text-emerald-600 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all duration-200 shadow-xl"
              >
                Start the Conversation
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
