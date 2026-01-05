import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function ProposalForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    organizationName: '',
    contactPerson: '',
    title: '',
    email: '',
    phone: '',
    propertyAddresses: '',
    contractType: '',
    estimatedSize: '',
    timeline: '',
    budgetRange: '',
    notes: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('proposals')
        .insert([
          {
            organization_name: formData.organizationName,
            contact_person: formData.contactPerson,
            title: formData.title,
            email: formData.email,
            phone: formData.phone,
            property_addresses: formData.propertyAddresses,
            contract_type: formData.contractType,
            estimated_size: formData.estimatedSize,
            timeline: formData.timeline,
            budget_range: formData.budgetRange,
            notes: formData.notes,
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
            type: 'proposal',
            data: {
              companyName: formData.organizationName,
              contactPerson: formData.contactPerson,
              email: formData.email,
              phone: formData.phone,
              propertyAddress: formData.propertyAddresses,
              propertySize: formData.estimatedSize,
              servicesNeeded: [formData.contractType],
              startDate: formData.timeline,
              additionalInfo: `Title: ${formData.title}\nBudget Range: ${formData.budgetRange || 'Not specified'}\n\nProject Scope:\n${formData.notes}`,
            },
          }),
        }
      );

      if (!emailResponse.ok) {
        console.error('Failed to send email notification');
      }

      setSubmitted(true);
      setFormData({
        organizationName: '',
        contactPerson: '',
        title: '',
        email: '',
        phone: '',
        propertyAddresses: '',
        contractType: '',
        estimatedSize: '',
        timeline: '',
        budgetRange: '',
        notes: '',
      });
    } catch (error) {
      console.error('Error submitting proposal:', error);
      alert('There was an error submitting your proposal. Please try again.');
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

  if (submitted) {
    return (
      <section id="proposal" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 rounded-xl p-12 text-center">
            <CheckCircle className="mx-auto mb-6 text-green-600" size={64} />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Proposal Submitted Successfully
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Thank you for your interest in The Rolling Group. We have received your proposal request and will reach out within the next few business days to discuss your project needs.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-8 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-200"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="proposal" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Request a Commercial Proposal
          </h2>
          <p className="text-xl text-gray-600">
            Tell us about your property maintenance needs and we'll provide a detailed proposal.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Organization Name *
              </label>
              <input
                type="text"
                name="organizationName"
                value={formData.organizationName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Contact Person *
              </label>
              <input
                type="text"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Work Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Contract Type *
              </label>
              <select
                name="contractType"
                value={formData.contractType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 outline-none transition-all"
              >
                <option value="">Select contract type</option>
                <option value="municipal">Municipal Contract</option>
                <option value="state">State Agency</option>
                <option value="federal">Federal Contract</option>
                <option value="school">School District/ISD</option>
                <option value="university">University</option>
                <option value="corporate">Corporate</option>
                <option value="industrial">Industrial</option>
                <option value="hoa">HOA/Commercial Real Estate</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Estimated Acreage / Sq. Ft. *
              </label>
              <input
                type="text"
                name="estimatedSize"
                value={formData.estimatedSize}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Timeline for Award *
              </label>
              <input
                type="text"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 outline-none transition-all"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Property Address(es) *
            </label>
            <textarea
              name="propertyAddresses"
              value={formData.propertyAddresses}
              onChange={handleChange}
              required
              rows={3}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0E3D2F] focus:ring-2 focus:ring-[#0E3D2F]/20 outline-none transition-all"
              placeholder="List all property addresses"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Budget Range (Optional)
            </label>
            <input
              type="text"
              name="budgetRange"
              value={formData.budgetRange}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0E3D2F] focus:ring-2 focus:ring-[#0E3D2F]/20 outline-none transition-all"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Notes / Project Scope *
            </label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0E3D2F] focus:ring-2 focus:ring-[#0E3D2F]/20 outline-none transition-all"
              placeholder="Describe your maintenance needs and any special requirements"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full px-8 py-4 bg-emerald-600 text-white rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Submitting...' : 'Submit Proposal Request'}
          </button>
        </form>
      </div>
    </section>
  );
}
