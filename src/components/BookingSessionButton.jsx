'use client'
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { FaGraduationCap } from "react-icons/fa6";
const BookingSessionButton = ({ tutor }) => {
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
                  Complete the booking form below to reserve your tutoring session with this tutor.
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
                      <Input placeholder="Enter your phone number" />
                    </TextField>
                    <Modal.Footer>
                      <Button slot="close">Confirm Session</Button>
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
