import Image from "next/image";
import {
  MapPin,
  BookOpen,
  DollarSign,
  Calendar,
  Clock3,
  GraduationCap,
  Monitor,
  Briefcase,
} from "lucide-react";
import { Button } from "@heroui/react";
import BookingSessionButton from "@/components/BookingSessionButton";
import { FaCheckToSlot } from "react-icons/fa6";

const TutorDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/tutor/${id}`);

  const tutor = await res.json();

  const {
    tutorName,
    photoUrl,
    subject,
    hourlyFee,
    location,
    availableTiming,
    sessionStartDate,
    institution,
    teachingMode,
    experience,
    totalSlots,
  } = tutor;

  return (
    <div className="min-h-screen bg-slate-50 py-14 px-6">
      <div className="max-w-6xl mx-auto">

       
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 grid md:grid-cols-2">

         
          <div className="relative min-h-[450px]">
            <Image
              src={photoUrl}
              alt={tutorName}
              fill
              className="object-cover"
            />
          </div>


          <div className="p-10 flex flex-col justify-center">

            <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold w-fit mb-5">
              <BookOpen size={18} />
              {subject}
            </div>

            <h1 className="text-4xl font-black text-slate-900 leading-tight">
              {tutorName}
            </h1>

            <p className="text-slate-500 mt-4 leading-relaxed">
              {experience}
            </p>

  
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">

              <div className="bg-slate-50 rounded-2xl p-4">
                <div className="flex items-center gap-2 text-slate-500 text-sm mb-1">
                  <DollarSign size={16} />
                  Hourly Fee
                </div>

                <h3 className="font-bold text-xl text-slate-900">
                  ${hourlyFee}/hr
                </h3>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4">
                <div className="flex items-center gap-2 text-slate-500 text-sm mb-1">
                  <MapPin size={16} />
                  Location
                </div>

                <h3 className="font-bold text-xl text-slate-900">
                  {location}
                </h3>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4">
                <div className="flex items-center gap-2 text-slate-500 text-sm mb-1">
                  <Calendar size={16} />
                  Session Starts
                </div>

                <h3 className="font-bold text-lg text-slate-900">
                  {sessionStartDate}
                </h3>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4">
                <div className="flex items-center gap-2 text-slate-500 text-sm mb-1">
                  <Clock3 size={16} />
                  Available Timing
                </div>

                <h3 className="font-bold text-sm text-slate-900">
                  {availableTiming}
                </h3>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4">
                <div className="flex items-center gap-2 text-slate-500 text-sm mb-1">
                  <GraduationCap size={16} />
                  Institution
                </div>

                <h3 className="font-bold text-sm text-slate-900">
                  {institution}
                </h3>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4">
                <div className="flex items-center gap-2 text-slate-500 text-sm mb-1">
                  <Monitor size={16} />
                  Teaching Mode
                </div>

                <h3 className="font-bold text-lg text-slate-900">
                  {teachingMode}
                </h3>
              </div>
              <div className="bg-slate-50 rounded-2xl p-4">
                <div className="flex items-center gap-2 text-slate-500 text-sm mb-1">
                     <FaCheckToSlot size={16} />
                  Total Slots
                </div>

                <h3 className="font-bold text-lg text-slate-900">
             
                  {totalSlots}
                </h3>
              </div>
            </div>

         
            <div className="flex gap-4 mt-10">
             <BookingSessionButton tutor={tutor} />

              <Button className={"border border-slate-300 hover:bg-blue-300 hover:border-blue-600 hover:text-white transition px-6 py-3 rounded-2xl font-semibold"}>
                Message Tutor
              </Button>
            </div>
          </div>
        </div>

     
        <div className="bg-white mt-10 rounded-3xl p-8 shadow-lg border border-slate-100">
          <div className="flex items-center gap-3 mb-5">
            <Briefcase className="text-red-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              Teaching Experience
            </h2>
          </div>

          <p className="text-slate-600 leading-relaxed text-lg">
            {experience}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TutorDetailsPage;