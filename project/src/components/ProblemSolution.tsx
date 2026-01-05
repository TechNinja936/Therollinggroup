import { CheckCircle2 } from 'lucide-react';
import BackgroundPattern from './BackgroundPattern';

export default function ProblemSolution() {
  return (
    <section className="relative py-16 lg:py-20 bg-white overflow-hidden">
      <BackgroundPattern />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-emerald-50 text-emerald-800 rounded-full text-sm font-semibold mb-6">
            Why The Rolling Group
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Commercial-First from the Ground Up
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            While most contractors juggle residential and commercial work, we focus exclusively on commercial properties. This singular commitment means better service, deeper expertise, and partnerships built to last.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Specialized Teams</h4>
              <p className="text-gray-600">Every crew member is trained for commercial operations, safety protocols, and multi-facility management.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Enterprise Systems</h4>
              <p className="text-gray-600">Purpose-built processes for managing multiple locations with consistent quality and detailed reporting.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Long-Term Partnerships</h4>
              <p className="text-gray-600">We measure success in years, not seasons. Your success is our success.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
