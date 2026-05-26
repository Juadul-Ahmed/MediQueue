import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import {
  Calendar,
  Clock3,
  DollarSign,
  GraduationCap,
  Phone,
  BookOpen,
} from "lucide-react";
import { Button } from "@heroui/react";
import { DeleteSessionAlert } from "@/components/DeleteSessionAlert";

const MyBookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const {token} = await auth.api.getToken({
    headers: await headers()
  })

  const user = session?.user;

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-slate-800">
          Please login first
        </h1>
      </div>
    );
  }

  const res = await fetch(`http://localhost:5000/booking/${user.id}`, {
  headers: {
    authorization: `Bearer ${token}`,
  },
});

  const data = await res.json();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-14 px-6 transition-colors">
      <div className="max-w-7xl mx-auto">
      
        <div className="mb-12 border-l-4 border-red-600 pl-6">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
            My <span className="text-red-600">Booked Sessions</span>
          </h1>

          <p className="text-slate-500 dark:text-slate-400 mt-3 text-lg">
            Track all your reserved tutoring sessions in one place.
          </p>
        </div>

        {data.length === 0 && (
          <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-lg p-14 text-center border border-slate-100 dark:border-slate-800">
            <GraduationCap size={70} className="mx-auto text-red-500 mb-5" />

            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-3">
              No Bookings Yet
            </h2>

            <p className="text-slate-500 dark:text-slate-400 text-lg">
              You haven't booked any tutoring sessions yet.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {data.map((booking) => (
            <div
              key={booking._id}
              className="bg-white dark:bg-slate-900 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800 overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <div className="bg-gradient-to-r from-red-500 to-red-600 p-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen size={20} />
                  <p className="font-semibold">{booking.subject}</p>
                </div>

                <h2 className="text-3xl font-black">{booking.tutorName}</h2>
              </div>

              <div className="p-6 space-y-5">
                <div className="flex items-center gap-3">
                  <DollarSign className="text-red-500" />
                  <div>
                    <p className="text-sm text-slate-400">Hourly Fee</p>

                    <h3 className="font-bold text-slate-800 dark:text-white">
                      ${booking.hourlyFee}/hr
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <GraduationCap className="text-red-500" />
                  <div>
                    <p className="text-sm text-slate-400">Institution</p>

                    <h3 className="font-bold text-slate-800 dark:text-white">
                      {booking.institution}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar className="text-red-500" />
                  <div>
                    <p className="text-sm text-slate-400">Session Start</p>

                    <h3 className="font-bold text-slate-800 dark:text-white">
                      {booking.sessionStartDate}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock3 className="text-red-500" />
                  <div>
                    <p className="text-sm text-slate-400">Available Timing</p>

                    <h3 className="font-bold text-slate-800 dark:text-white">
                      {booking.availableTiming}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="text-red-500" />
                  <div>
                    <p className="text-sm text-slate-400">Your Phone</p>

                    <h3 className="font-bold text-slate-800 dark:text-white">
                      {booking.phoneNumber}
                    </h3>
                  </div>
                </div>

                <DeleteSessionAlert bookingId={booking._id} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyBookingsPage;
