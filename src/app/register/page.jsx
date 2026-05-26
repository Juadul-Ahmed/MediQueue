"use client";

import React from "react";
import Link from "next/link";
import {
  Button,
  Card,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  Description,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { GrGoogle } from "react-icons/gr";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      email: user.email,
      name: user.name,
      password: user.password,
      image: user.image,
    });

    if (error) {
      toast.error(error.message || "Registration failed");
      return;
    }

    toast.success("Registration successful");
    router.push("/login");
  };

  const handleGoogleSignin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center px-4 py-12 transition-colors">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800">

        
        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-red-600 to-red-500 text-white p-14 relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-5xl font-black">
              Start Your Learning Journey
            </h1>
            <p className="mt-6 text-red-100 text-lg">
              Connect with expert tutors and book sessions easily.
            </p>
          </div>
        </div>

       
        <div className="flex items-center justify-center p-8 md:p-14">

          <Card className="w-full shadow-none border-none p-6 bg-white dark:bg-slate-900">

            <div className="mb-8">
              <h2 className="text-4xl font-black text-slate-900 dark:text-white">
                Create Account
              </h2>
              <p className="text-slate-500 dark:text-slate-400 mt-2">
                Register to get started
              </p>
            </div>

            <Form onSubmit={onSubmit} className="flex flex-col gap-5">

              <TextField isRequired name="name">
                <Label  className="dark:text-slate-300">Name</Label>
                <Input placeholder="Your Name"  className="placeholder:text-slate-400 dark:placeholder:text-slate-500 dark:text-white"/>
                <FieldError />
              </TextField>

              <TextField name="image">
                <Label  className="dark:text-slate-300">Image URL</Label>
                <Input placeholder="Image URL" className="placeholder:text-slate-400 dark:placeholder:text-slate-500 dark:text-white"/>
              </TextField>

              <TextField isRequired name="email">
                <Label  className="dark:text-slate-300">Email</Label>
                <Input placeholder="john@example.com" className="placeholder:text-slate-400 dark:placeholder:text-slate-500 dark:text-white"/>
                <FieldError />
              </TextField>

              <TextField isRequired name="password">
                <Label  className="dark:text-slate-300">Password</Label>
                <Input type="password" placeholder="Enter password" className="placeholder:text-slate-400 dark:placeholder:text-slate-500 dark:text-white"/>
                <Description className="text-slate-500 dark:text-slate-400">
                  8+ chars, 1 uppercase, 1 number
                </Description>
                <FieldError />
              </TextField>

              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold h-12 rounded-xl"
              >
                Get Started
              </Button>

              <Button
              variant="outline"
                type="button"
                onClick={handleGoogleSignin}
                className="w-full border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white font-semibold h-12 rounded-xl flex items-center justify-center gap-2"
              >
                Register with Google <GrGoogle />
              </Button>

              <p className="text-center text-slate-500 dark:text-slate-400 text-sm">
                Already have an account?{" "}
                <Link href="/login" className="text-red-600 font-semibold">
                  Login
                </Link>
              </p>

            </Form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;