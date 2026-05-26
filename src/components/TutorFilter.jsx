"use client";

import { Search, DollarSign, Calendar } from "lucide-react";
import { useState } from "react";

const TutorFilter = ({ setTutors }) => {
  const [tutorName, setTutorName] = useState("");
  const [hourlyFee, setHourlyFee] = useState("");
  const [sessionStartDate, setSessionStartDate] = useState("");

  const handleSearch = async () => {
    const params = new URLSearchParams();

    if (tutorName) {
      params.append("tutorName", tutorName);
    }

    if (hourlyFee) {
      params.append("hourlyFee", hourlyFee);
    }

    if (sessionStartDate) {
      params.append("sessionStartDate", sessionStartDate);
    }

    const res = await fetch(
      `http://localhost:5000/tutor/all?${params.toString()}`
    );

    const data = await res.json();

    setTutors(data);
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl shadow-md dark:shadow-black/20 mb-10 grid md:grid-cols-4 gap-4 transition-colors">

      <div className="flex items-center border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 rounded-xl px-3">

        <Search
          className="text-slate-400 dark:text-slate-500"
          size={18}
        />

        <input
          type="text"
          placeholder="Search Tutor"
          className="w-full p-3 outline-none bg-transparent text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
          value={tutorName}
          onChange={(e) => setTutorName(e.target.value)}
        />
      </div>

      <div className="flex items-center border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 rounded-xl px-3">

        <DollarSign
          className="text-slate-400 dark:text-slate-500"
          size={18}
        />

        <input
          type="number"
          placeholder="Max Fee"
          className="w-full p-3 outline-none bg-transparent text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
          value={hourlyFee}
          onChange={(e) => setHourlyFee(e.target.value)}
        />
      </div>

      <div className="flex items-center border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 rounded-xl px-3">

        <Calendar
          className="text-slate-400 dark:text-slate-500"
          size={18}
        />

        <input
          type="date"
          className="w-full p-3 outline-none bg-transparent text-slate-900 dark:text-white"
          value={sessionStartDate}
          onChange={(e) => setSessionStartDate(e.target.value)}
        />
      </div>

      <button
        onClick={handleSearch}
        className="bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition py-3"
      >
        Search
      </button>

    </div>
  );
};

export default TutorFilter;