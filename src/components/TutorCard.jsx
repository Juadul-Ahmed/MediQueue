import Image from 'next/image';
import React from 'react';
import { MapPin, BookOpen, DollarSign } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@heroui/react';

const TutorCard = ({ tutor }) => {
  const {_id, tutorName, photoUrl, subject, hourlyFee, location } = tutor;

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">
     
      <div className="relative h-56 w-full">
        <Image
          src={photoUrl}
          alt={tutorName}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-slate-800 mb-1">{tutorName}</h3>
        
        <div className="flex items-center gap-2 text-red-600 font-semibold text-sm mb-4">
          <BookOpen size={16} />
          <span>{subject}</span>
        </div>

        <div className="space-y-2 text-slate-500 text-sm">
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2 font-bold text-slate-900">
            <DollarSign size={16} />
            <span>{hourlyFee}/hr</span>
          </div>
        </div>

        <Link href={`tutors/${_id}`}>
           <Button className={"w-full mt-6 bg-slate-900 text-white py-2 rounded-xl font-semibold hover:bg-red-600 transition-colors"} >View Profile</Button>
        </Link>
        
      </div>
    </div>
  );
};

export default TutorCard;