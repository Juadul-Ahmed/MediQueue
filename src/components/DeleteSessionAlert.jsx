"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import toast from "react-hot-toast";

export function DeleteSessionAlert({ bookingId }) {
  
  const handleDeleteBooking = async () => {
    const {data:tokenData} = await authClient.token()
    const res = await fetch(`http://localhost:5000/booking/${bookingId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenData?.token}`
      }
    });
    const data = await res.json();
    
   
    

    if (data.deletedCount > 0) {
      toast.success("Booking deleted successfully");
       window.location.reload()
    }
  };

  return (
    <AlertDialog>
      <Button
        className="w-full mt-4 rounded-2xl font-semibold hover:scale-[1.02] transition bg-slate-900 hover:bg-red-600 py-3 "
        color="danger"
      >
        Delete Session
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete session permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>your session</strong> This
                action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDeleteBooking} slot="close" variant="danger">
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
