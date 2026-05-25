"use client";

import { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import { FaCalendarAlt, FaUserCheck, FaTicketAlt } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const features = [
  {
    title: "Seamless Scheduling",
    headline: "Book Tutors Without Friction",
    description:
      "Choose time slots instantly and manage learning sessions with real-time availability.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
    icon: <FaCalendarAlt className="text-xl text-red-400" />,
  },
  {
    title: "Verified Tutors",
    headline: "Learn From Trusted Experts",
    description:
      "Connect with verified instructors in programming, math, and science fields.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600&auto=format&fit=crop",
    icon: <FaUserCheck className="text-xl text-emerald-400" />,
  },
  {
    title: "Smart Booking System",
    headline: "Zero Conflict Session Management",
    description:
      "Automatic slot control ensures fair booking and prevents overbooking.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
    icon: <FaTicketAlt className="text-xl text-violet-400" />,
  },
];

export default function Banner() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full min-h-[520px] text-white overflow-hidden rounded-2xl border border-slate-800">

      
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-red-500/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-500/10 blur-[120px] rounded-full" />

      <Swiper
        modules={[Autoplay, Navigation, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        navigation
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSwiper={setSwiperInstance}
        onSlideChange={(s) => setActiveIndex(s.activeIndex)}
        className="relative z-10"
      >
        {features.map((slide, index) => (
          <SwiperSlide key={index} className="px-6 md:px-16 py-20">
            
   
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20 scale-105"
              style={{ backgroundImage: `url(${slide.image})` }}
            />

           
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-red-950/40 to-transparent"  />

            <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-12 gap-10 items-center">

              <div className="md:col-span-7 space-y-5">
                
                <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase bg-white/5 border border-white/10 px-3 py-1 rounded-full text-slate-300">
                  {slide.title}
                </span>

                <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                  {slide.headline}
                </h1>

                <p className="text-slate-300 text-sm md:text-base max-w-xl leading-relaxed">
                  {slide.description}
                </p>

                <Link
                  href="/tutors"
                  className="inline-flex items-center mt-4 bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition hover:scale-[1.03]"
                >
                  Explore Tutors
                </Link>
              </div>

              <div className="md:col-span-5 flex justify-center">
                <div className="w-full max-w-sm bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 text-center space-y-4 shadow-2xl">

                  <div className="w-14 h-14 mx-auto rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {slide.icon}
                  </div>

                  <h3 className="font-semibold text-lg">{slide.title}</h3>

                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 animate-pulse" />
                  </div>

                  <p className="text-xs text-slate-400 uppercase tracking-wider">
                    Live Learning System
                  </p>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

   
      <div className="relative z-20 border-t border-white/10 bg-black/30 backdrop-blur-md">
        <div className="max-w-6xl mx-auto grid grid-cols-3 text-xs">
          {features.map((item, i) => (
            <button
              key={i}
              onClick={() => swiperInstance?.slideTo(i)}
              className={`py-3 transition ${
                activeIndex === i
                  ? "text-white border-t-2 border-red-500"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}