import Link from "next/link";
import { FaStar, FaBookOpen } from "react-icons/fa";

async function getTutors() {
  const res = await fetch("http://localhost:5000/tutor/all");


  return res.json();
}

export default async function TopCoursesSection() {
  const tutors = await getTutors();
  const topCourses = tutors.slice(0, 3);

  return (
    <section className="relative py-20  text-black overflow-hidden mt-10 container mx-auto">

   
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-red-500/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-600/10 blur-[140px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-red-400 bg-red-500/10 px-4 py-1 rounded-full border border-red-500/20">
            Top Rated Courses
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold mt-4">
            Learn From Expert Tutors
          </h2>

          <p className="text-slate-400 text-sm mt-2">
            Hand-picked top learning sessions based on student demand
          </p>
        </div>

  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {topCourses.map((course) => (
            <div
              key={course._id}
              className="group bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 hover:border-red-500/40 transition hover:-translate-y-1"
            >

          
              <div className="flex justify-between items-start mb-4">

                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400">
                  <FaBookOpen />
                </div>

                <div className="flex items-center gap-1 text-amber-400 text-xs font-bold bg-white/5 px-2 py-1 rounded-lg border border-white/10">
                  <FaStar />
                  4.8+
                </div>

              </div>

     
              <h3 className="text-xl font-bold group-hover:text-red-400 transition">
                {course.subject}
              </h3>

              <p className="text-xs text-slate-400 mt-1">
                Tutor: {course.tutorName}
              </p>

              <p className="text-sm text-slate-400 mt-3 line-clamp-2">
                {course.experience}
              </p>

          
              <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center">

                <span className="font-bold text-slate-400">
                  ${course.hourlyFee}
                  <span className="text-xs text-slate-400 font-normal">/hr</span>
                </span>

                <Link
                  href={`/tutors/${course._id}`}
                  className="text-sm font-semibold text-red-400 hover:text-red-300 transition"
                >
                  View →
                </Link>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}