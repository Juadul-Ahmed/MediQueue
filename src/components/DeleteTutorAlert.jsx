"use client";

import { AlertDialog, Button } from "@heroui/react";
import { Trash2 } from "lucide-react";
import toast from "react-hot-toast";

export function DeleteTutorAlert({tutor}) {
  const handleDelete = async () =>{
     const res = await fetch(
        `http://localhost:5000/tutor/${tutor._id}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      toast.success("Tutor deleted successfully");
      window.location.reload()
  }
  return (
    <AlertDialog>
      <Button variant="danger" className={"flex-1 rounded-2xl font-semibold"}>
        <Trash2 size={18} />
        Delete
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete tutor permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>your tutor</strong>{" "}
              This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              
              <Button
              onClick={handleDelete}
                variant="danger"
                className={"flex-1 rounded-2xl font-semibold"}
              >
               
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
