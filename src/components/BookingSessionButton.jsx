"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaGraduationCap } from "react-icons/fa6";

const BookingSessionButton = ({ tutor }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleBook = async () => {
    if (!phoneNumber) {
      return toast.error("Please enter your phone number");
      
    }
    const bookingData = {
      userId: user?.id,
      userName: user?.name,
      userEmail: user?.email,
      tutorId: tutor?._id,
      tutorName: tutor?.tutorName,
      hourlyFee: tutor?.hourlyFee,
      institution: tutor?.institution,
      subject: tutor?.subject,
      sessionStartDate: tutor?.sessionStartDate,
      availableTiming: tutor?.availableTiming,
      phoneNumber,
    };

    const res = await fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });

    const data = await res.json();
    if (!res.ok) {
      return toast.error(data.message || "Booking failed");
    }

    toast.success("Session Confirmed Successfully");
    window.location.reload()
  };

  return (
    <div>
      <Modal>
        <Button
          className={
            "bg-red-600 hover:bg-red-700 transition text-white px-6 py-3 rounded-2xl font-semibold"
          }
        >
          Book Session
        </Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                  <FaGraduationCap />
                </Modal.Icon>
                <Modal.Heading>Book Your session </Modal.Heading>
                <p className="mt-1.5 text-sm leading-5 text-muted">
                  Complete the booking form below to reserve your tutoring
                  session with this tutor.
                </p>
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form className="flex flex-col gap-4">
                    <TextField
                      defaultValue={tutor?.tutorName}
                      className="w-full"
                      name="name"
                      type="text"
                      variant="secondary"
                    >
                      <Label>Tutor Name</Label>
                      <Input placeholder="Enter your name" />
                    </TextField>
                    <TextField
                      defaultValue={tutor.availableTiming}
                      className="w-full"
                      name="timing"
                      type="text"
                      variant="secondary"
                    >
                      <Label>Available Timing</Label>
                      <Input placeholder="Available Time" />
                    </TextField>
                    <TextField
                      defaultValue={tutor.subject}
                      className="w-full"
                      name="subject"
                      variant="secondary"
                    >
                      <Label>Subject</Label>
                      <Input placeholder="Enter your company name" />
                    </TextField>
                    <TextField
                      className="w-full"
                      name="phone"
                      type="tel"
                      variant="secondary"
                    >
                      <Label>Your Phone</Label>

                      <Input
                        placeholder="Enter your phone number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </TextField>
                    <Modal.Footer>
                      <Button
                        onClick={handleBook}
                        disabled={tutor.totalSlots <= 0}
                        className={`bg-red-600 hover:bg-red-700 transition text-white px-6 py-3 rounded-2xl font-semibold ${
                          tutor.totalSlots <= 0
                            ? "opacity-50 cursor-not-allowed"
                            : ""
                        }`}
                      >
                        {tutor.totalSlots <= 0
                          ? "Fully Booked"
                          : "Confirm Session"}
                      </Button>
                    </Modal.Footer>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default BookingSessionButton;
