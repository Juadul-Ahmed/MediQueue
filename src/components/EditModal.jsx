"use client";

import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
} from "@heroui/react";
import { Pencil, PencilIcon } from "lucide-react";
import toast from "react-hot-toast";

export function EditModal({ tutor, onUpdated }) {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const updatedTutor = Object.fromEntries(formData.entries());

    const res = await fetch(`http://localhost:5000/tutor/${tutor._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedTutor),
    });

    const data = await res.json();

    if (data.modifiedCount > 0) {
      toast.success("Tutor updated");
      onUpdated?.(updatedTutor);
    }
    window.location.reload()
  };

  return (
    <Modal>
      <Button variant="outline" className="flex-1">
        <Pencil size={18} />
        Update
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Icon>
                <PencilIcon />
              </Modal.Icon>

              <Modal.Heading>Edit Tutor</Modal.Heading>
              <p className="mt-1.5 text-sm text-muted">
                Update tutor details below.
              </p>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface>
                <form onSubmit={onSubmit} className="space-y-6">

              
                  <TextField name="tutorName" isRequired defaultValue={tutor.tutorName}>
                    <Label>Tutor Name</Label>
                    <Input />
                  </TextField>

              
                  <TextField name="photoUrl" isRequired defaultValue={tutor.photoUrl}>
                    <Label>Photo URL</Label>
                    <Input />
                  </TextField>

                
                  <TextField name="subject" isRequired defaultValue={tutor.subject}>
                    <Label>Subject</Label>
                    <Input />
                  </TextField>

                
                  <TextField name="hourlyFee" isRequired defaultValue={tutor.hourlyFee}>
                    <Label>Hourly Fee</Label>
                    <Input type="number" />
                  </TextField>

                  <Button type="submit" className="w-full bg-red-500 text-white">
                    Update Tutor
                  </Button>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}