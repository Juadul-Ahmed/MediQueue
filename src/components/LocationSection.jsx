import React from "react";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export function LocationSection() {
  return (
    <section className="py-16 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 dark:bg-red-500/10 dark:text-red-400 px-3 py-1 rounded-md">
                Global Operations
              </span>

              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-3">
                Our Learning Hubs
              </h2>

              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                Connect with our support nodes, register on-site, or book
                physical testing appointments.
              </p>
            </div>

            <div className="space-y-4">

              <div className="flex gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 transition-colors">
                <div className="text-red-600 dark:text-red-400 mt-1">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Main Administrative Center
                  </h4>

                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Financial Tower, Suite 401, Chengdu, Sichuan
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 transition-colors">
                <div className="text-red-600 dark:text-red-400 mt-1">
                  <FaEnvelope />
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Electronic Support Desk
                  </h4>

                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    juadulahmed9@gmail.com
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="lg:col-span-7 w-full h-[320px] rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 relative shadow-sm">
            <iframe
              title="Campus Map Location Reference"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434.786524673898!2d103.99961607630737!3d30.55576567467026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34ee0bd2ca9b3ebd%3A0x23abe90978321963!2sSichuan%20University%20Jiang'an%20Campus!5e0!3m2!1sen!2s!4v1716335000000!5m2!1sen!2s"
              className="w-full h-full border-0 grayscale dark:brightness-75 dark:contrast-125 opacity-90"
              allowFullScreen=""
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
}