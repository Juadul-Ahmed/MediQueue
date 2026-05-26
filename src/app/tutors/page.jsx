"use client";
import { useEffect, useState } from "react";
import TutorFilter from "@/components/TutorFilter";
import TutorCard from "@/components/TutorCard";
import { ClipLoader } from "react-spinners";

export default function TutorsPage() {
  const [loading, setLoading] = useState(true);
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tutor/all")
      .then((res) => res.json())
      .then((data) => {
        setTutors(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <ClipLoader size={50} color="#dc2626" />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <TutorFilter setTutors={setTutors} />
      <div className="mb-12 border-l-4 border-red-600 pl-6">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Find Your{" "}
          <span className="text-red-600 dark:text-red-500">
            Preferred Tutor
          </span>
        </h1>
        <p className="text-slate-500 mt-2 text-lg font-medium">
          Choose from our active study queue to start your awesome journey.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {tutors.map((tutor) => (
          <TutorCard tutor={tutor} key={tutor._id} />
        ))}
      </div>

      {tutors.length === 0 && (
        <div className="text-center py-20 text-slate-400">
          <p className="text-xl">No tutors available at the moment.</p>
        </div>
      )}
    </div>
  );
}
