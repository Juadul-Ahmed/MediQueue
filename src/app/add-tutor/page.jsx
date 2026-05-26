"use client";

import React from "react";
import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  TextArea,
  TextField,
  Select,
} from "@heroui/react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function AddTutorPage() {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const tutor = Object.fromEntries(formData.entries());

    const tutorData = {
      ...tutor,
      userId: user?.id,
      userName: user?.name,
      userEmail: user?.email,
    };

    const res = await fetch("http://localhost:5000/tutor", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(tutorData),
    });

    const data = await res.json();
    console.log(data);

    toast.success("Data added Successfully");
  };

  return (
    <div className="max-w-4xl mx-auto my-12 px-4 text-slate-900 dark:text-white">
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-6 md:p-10">
        <div className="mb-8 border-b border-slate-100 pb-4">
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Add <span className="text-red-600">Tutor Profile</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm md:text-base">
            Fill out the credentials below to register a brand new
            <span className="font-semibold text-slate-700">
              {" "}
              active study queue.
            </span>
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <TextField name="tutorName" isRequired>
                <Label className="text-sm font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  Tutor Name
                </Label>
                <Input placeholder="John Doe" className="w-full placeholder:text-slate-400 dark:placeholder:text-slate-500" />
                <FieldError className="text-xs text-red-500 mt-1" />
              </TextField>
            </div>

            <div className="md:col-span-2">
              <TextField name="photoUrl" type="url" >
                <Label className="text-sm font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  Photo URL
                </Label>
                <Input
                  placeholder="post your image link"
                  type="url"
                  className="w-full placeholder:text-slate-400 dark:placeholder:text-slate-500"
                />
                <FieldError className="text-xs text-red-500 mt-1" />
              </TextField>
            </div>

            <div>
              <Select
                name="subject"
                isRequired
                className="w-full placeholder:text-slate-400 dark:placeholder:text-slate-500"
                placeholder="Select Subject"
              >
                <Label className="text-sm font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  Subject / Category
                </Label>
                <Select.Trigger>
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item
                      id="Linear Algebra"
                      textValue="Linear Algebra"
                    >
                      Linear Algebra
                    </ListBox.Item>
                    <ListBox.Item
                      id="Discrete Mathematics"
                      textValue="Discrete Mathematics"
                    >
                      Discrete Mathematics
                    </ListBox.Item>
                    <ListBox.Item id="Digital Logic" textValue="Digital Logic">
                      Digital Logic
                    </ListBox.Item>
                    <ListBox.Item
                      id="Object Oriented Programming"
                      textValue="Object Oriented Programming"
                    >
                      Object Oriented Programming
                    </ListBox.Item>
                    <ListBox.Item
                      id="Intro to C language"
                      textValue="Intro to C language"
                    >
                      Intro to C language
                    </ListBox.Item>
                    <ListBox.Item
                      id="Professional English"
                      textValue="Professional English"
                    >
                      Professional English
                    </ListBox.Item>
                    <ListBox.Item
                      id="Data Structure and ALgorithm"
                      textValue="Data Structure and ALgorithm"
                    >
                      Data Structure and ALgorithm
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            <div>
              <TextField name="availableTiming" isRequired>
                <Label className="text-sm font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  Available Days and Time
                </Label>
                <Input
                  placeholder="Sun - Thu 5:00 PM - 8:00 PM"
                  className="w-full placeholder:text-slate-400 dark:placeholder:text-slate-500"
                />
                <FieldError className="text-xs text-red-500 mt-1" />
              </TextField>
            </div>

            <div>
              <TextField name="hourlyFee" type="number" isRequired>
                <Label className="text-sm font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  Hourly Fee
                </Label>
                <Input placeholder="500" type="number" className="w-full placeholder:text-slate-400 dark:placeholder:text-slate-500" />
                <FieldError className="text-xs text-red-500 mt-1" />
              </TextField>
            </div>

            <div>
              <TextField name="totalSlots" type="number" isRequired>
                <Label className="text-sm font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  Total Slot
                </Label>
                <Input placeholder="10" type="number" className="w-full placeholder:text-slate-400 dark:placeholder:text-slate-500" />
                <FieldError className="text-xs text-red-500 mt-1" />
              </TextField>
            </div>

            <div>
              <TextField name="sessionStartDate" type="date" isRequired>
                <Label className="text-sm font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  Session Start Date
                </Label>
                <Input type="date" className="w-full" />
                <FieldError className="text-xs text-red-500 mt-1" />
              </TextField>
            </div>

            <div>
              <TextField name="institution" isRequired>
                <Label className="text-sm font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  Institution
                </Label>
                <Input placeholder="Sichuan University" className="w-full placeholder:text-slate-400 dark:placeholder:text-slate-500" />
                <FieldError className="text-xs text-red-500 mt-1" />
              </TextField>
            </div>

            <div>
              <TextField name="location" isRequired>
                <Label className="text-sm font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  Location (Area/City)
                </Label>
                <Input placeholder="Chengdu" className="w-full placeholder:text-slate-400 dark:placeholder:text-slate-500" />
                <FieldError className="text-xs text-red-500 mt-1" />
              </TextField>
            </div>

            <div>
              <Select
                name="teachingMode"
                isRequired
                className="w-full"
                placeholder="Select Mode"
              >
                <Label className="text-sm font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  Teaching Mode
                </Label>
                <Select.Trigger>
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="Online" textValue="Online">
                      Online
                    </ListBox.Item>
                    <ListBox.Item id="Offline" textValue="Offline">
                      Offline
                    </ListBox.Item>
                    <ListBox.Item id="Both" textValue="Both">
                      Both
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            <div className="md:col-span-2">
              <TextField name="experience" isRequired>
                <Label className="text-sm font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  Experience
                </Label>
                <TextArea
                  placeholder="3 years teaching experience..."
                  className="w-full min-h-[100px] placeholder:text-slate-400 dark:placeholder:text-slate-500"
                />
                <FieldError className="text-xs text-red-500 mt-1" />
              </TextField>
            </div>
          </div>

          <div className="pt-4">
            <Button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-100 hover:text-black text-white font-semibold py-3 rounded-xl shadow-md transition duration-200"
            >
              Add Tutor
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
