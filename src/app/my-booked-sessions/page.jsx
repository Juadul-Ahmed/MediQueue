import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MyBookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  })
  const user = session?.user

  const res = await fetch(`http://localhost:5000/booking/${user.id}`)
  const data = await res.json()
  console.log(data);
  
  return (
    <div>
      <h1>My bookings</h1>
      {data.map((booking) => (
    <div key={booking._id}>
      <h1>{booking.tutorName}</h1>
    </div>
  ))}
    </div>
  );
};

export default MyBookingsPage;