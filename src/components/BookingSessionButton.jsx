"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
} from "@heroui/react";
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

    const { data: tokenData } = await authClient.token();

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
      body: JSON.stringify(bookingData),
    });

    const data = await res.json();

    if (!res.ok) {
      return toast.error(data.message || "Booking failed");
    }

    toast.success("Session Confirmed Successfully");
    window.location.reload();
  };

  return (
    <div>
      <Modal>
        <Button className="bg-red-600 hover:bg-red-700 transition text-white px-6 py-3 rounded-2xl font-semibold">
          Book Session
        </Button>

        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-colors">

              <Modal.CloseTrigger />

              <Modal.Header>
                <Modal.Icon className="bg-red-100 dark:bg-red-500/10 text-red-600 dark:text-red-400">
                  <FaGraduationCap />
                </Modal.Icon>

                <div>
                  <Modal.Heading className="text-slate-900 dark:text-white">
                    Book Your Session
                  </Modal.Heading>

                  <p className="mt-1.5 text-sm leading-5 text-slate-500 dark:text-slate-400">
                    Complete the booking form below to reserve your tutoring
                    session with this tutor.
                  </p>
                </div>
              </Modal.Header>

              <Modal.Body className="p-6">
                <Surface
                  variant="default"
                  className="bg-transparent dark:bg-transparent shadow-none"
                >
                  <form className="flex flex-col gap-4">

                    <TextField
                      defaultValue={tutor?.tutorName}
                      className="w-full"
                      name="name"
                      type="text"
                      variant="secondary"
                    >
                      <Label className="dark:text-slate-300">
                        Tutor Name
                      </Label>

                      <Input
                        readOnly
                        placeholder="Enter your name"
                        className="rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
                      />
                    </TextField>

                    <TextField
                      defaultValue={tutor.availableTiming}
                      className="w-full"
                      name="timing"
                      type="text"
                      variant="secondary"
                    >
                      <Label className="dark:text-slate-300">
                        Available Timing
                      </Label>

                      <Input
                        readOnly
                        placeholder="Available Time"
                        className="rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
                      />
                    </TextField>

                    <TextField
                      defaultValue={tutor.subject}
                      className="w-full"
                      name="subject"
                      variant="secondary"
                    >
                      <Label className="dark:text-slate-300">
                        Subject
                      </Label>

                      <Input
                        readOnly
                        placeholder="Enter subject"
                        className="rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
                      />
                    </TextField>

                    <TextField
                      className="w-full"
                      name="phone"
                      type="tel"
                      variant="secondary"
                    >
                      <Label className="dark:text-slate-300">
                        Your Phone
                      </Label>

                      <Input
                        placeholder="Enter your phone number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
                      />
                    </TextField>

                    <Modal.Footer className="px-0 pt-4">
                      <Button
                        onClick={handleBook}
                        disabled={tutor.totalSlots <= 0}
                        className={`w-full bg-red-600 hover:bg-red-700 transition text-white px-6 py-3 rounded-2xl font-semibold ${
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