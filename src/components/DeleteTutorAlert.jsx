"use client";

import { AlertDialog, Button } from "@heroui/react";
import { Trash2 } from "lucide-react";
import toast from "react-hot-toast";

export function DeleteTutorAlert({ tutor }) {
  const handleDelete = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/tutor/${tutor._id}`,
      {
        method: "DELETE",
      }
    );

    await res.json();

    toast.success("Tutor deleted successfully");
    window.location.reload();
  };

  return (
    <AlertDialog>
      <Button
        variant="danger"
        className="flex-1 rounded-2xl font-semibold bg-red-600 hover:bg-red-700 text-white transition"
      >
        <Trash2 size={18} />
        Delete
      </Button>

      <AlertDialog.Backdrop className="bg-black/50 backdrop-blur-sm">
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px] bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl transition-colors">

            <AlertDialog.CloseTrigger className="text-slate-400 hover:text-slate-600 dark:hover:text-white" />

            <AlertDialog.Header>
              <AlertDialog.Icon
                status="danger"
                className="bg-red-100 dark:bg-red-500/10 text-red-600 dark:text-red-400"
              />

              <AlertDialog.Heading className="text-slate-900 dark:text-white">
                Delete tutor permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body className="text-slate-600 dark:text-slate-400">
              <p>
                This will permanently delete{" "}
                <strong className="text-slate-900 dark:text-white">
                  your tutor
                </strong>
                . This action cannot be undone.
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer className="gap-3">

              <Button
                slot="close"
                className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl"
              >
                Cancel
              </Button>

              <Button
                onClick={handleDelete}
                slot="close"
                className="bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold"
              >
                <Trash2 size={16} />
                Delete
              </Button>

            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}