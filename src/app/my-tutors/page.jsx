import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import { BookOpen, DollarSign, MapPin, Pencil, Trash2 } from "lucide-react";
import { Button } from "@heroui/react";
import { EditModal } from "@/components/EditModal";
import { DeleteTutorAlert } from "@/components/DeleteTutorAlert";

const MyTutorPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const res = await fetch(
    `http://localhost:5000/my-tutors/${user.id}`);

  const tutors = await res.json();

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-10">
          <h1 className="text-4xl font-black text-slate-900">
            My Tutors
          </h1>

          <p className="text-slate-500 mt-2">
            Manage all tutors you have added.
          </p>
        </div>

        {tutors.length === 0 ? (
          <div className="bg-white rounded-3xl p-10 text-center shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-700">
              No tutors added yet
            </h2>

            <p className="text-slate-500 mt-2">
              Start by adding your first tutor profile.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutors.map((tutor) => (
              <div
                key={tutor._id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100"
              >
                
                <div className="relative h-64 w-full">
                  <Image
                    src={tutor.photoUrl}
                    alt={tutor.tutorName}
                    fill
                    className="object-cover"
                  />
                </div>

                
                <div className="p-6">
                  
                  <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold">
                    <BookOpen size={16} />
                    {tutor.subject}
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900 mt-4">
                    {tutor.tutorName}
                  </h2>

                  <p className="text-slate-500 mt-3 line-clamp-2">
                    {tutor.experience}
                  </p>

                  
                  <div className="space-y-3 mt-6">

                    <div className="flex items-center gap-2 text-slate-600">
                      <DollarSign size={18} />
                      <span>${tutor.hourlyFee}/hr</span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-600">
                      <MapPin size={18} />
                      <span>{tutor.location}</span>
                    </div>
                  </div>

                  
                  <div className="flex gap-3 mt-8">
                    
                  <EditModal tutor={tutor} />

                 <DeleteTutorAlert tutor={tutor} />

                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyTutorPage;