import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

export function ReviewSection() {
  return (
    <section className="py-16 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">What Our Students Say</h2>
          <p className="text-sm text-slate-500 mt-2">Read honest transformation reviews from developers, engineers, and language learners worldwide.</p>
        </div>

        {/* Static Asymmetric Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Review Card 1 */}
          <div className="bg-white border border-slate-200/60 p-6 rounded-3xl shadow-sm flex flex-col justify-between relative">
            <FaQuoteLeft className="absolute right-6 top-6 text-slate-100 text-4xl pointer-events-none" />
            <div className="space-y-3">
              <div className="flex text-amber-400 text-xs gap-0.5">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <p className="text-slate-600 text-sm leading-relaxed font-light italic">
                "The data structures explanation made graph theory matrices clear instantly."
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-slate-200 font-bold text-xs text-slate-700 flex items-center justify-center">
                J
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Juadul A.</h4>
                <p className="text-[11px] text-slate-400">Web Dev Student</p>
              </div>
            </div>
          </div>

          {/* Review Card 2 */}
          <div className="bg-white border border-slate-200/60 p-6 rounded-3xl shadow-sm flex flex-col justify-between relative">
            <FaQuoteLeft className="absolute right-6 top-6 text-slate-100 text-4xl pointer-events-none" />
            <div className="space-y-3">
              <div className="flex text-amber-400 text-xs gap-0.5">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <p className="text-slate-600 text-sm leading-relaxed font-light italic">
                "Subnet calculations were simplified down to simple step-by-step logic frameworks."
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-slate-200 font-bold text-xs text-slate-700 flex items-center justify-center">
                S
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Sarah M.</h4>
                <p className="text-[11px] text-slate-400">Undergrad Student</p>
              </div>
            </div>
          </div>

          {/* Review Card 3 */}
          <div className="bg-white border border-slate-200/60 p-6 rounded-3xl shadow-sm flex flex-col justify-between relative">
            <FaQuoteLeft className="absolute right-6 top-6 text-slate-100 text-4xl pointer-events-none" />
            <div className="space-y-3">
              <div className="flex text-amber-400 text-xs gap-0.5">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <p className="text-slate-600 text-sm leading-relaxed font-light italic">
                "Passed my OOP interview benchmarks faster than expected using their custom syntax sheets."
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-slate-200 font-bold text-xs text-slate-700 flex items-center justify-center">
                D
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">David K.</h4>
                <p className="text-[11px] text-slate-400">OOP Interviewer</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}