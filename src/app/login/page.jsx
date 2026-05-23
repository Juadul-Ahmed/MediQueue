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
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

const LoginPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const user = Object.fromEntries(formData.entries());
    console.log(user);
    
    const { data, error } = await authClient.signIn.email({
      email: user?.email,
      password: user?.password,
    })
    console.log({data,error});
    
    if(data) {
      redirect('/')
    }
    if(error){
      toast.error("wrong credentials")
    }
    toast.success("Registration was successful")
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-12">

      <div className="w-full max-w-6xl grid lg:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100">

      
        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-red-600 to-red-500 text-white p-14 relative overflow-hidden">

          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-black/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h1 className="text-5xl font-black leading-tight">
              Start Your Learning Journey Today
            </h1>

            <p className="mt-6 text-red-100 text-lg leading-relaxed">
              Connect with expert tutors, book personalized sessions, and level
              up your education from anywhere in the world.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-white" />
                <p>Top-rated tutors worldwide</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-white" />
                <p>Flexible online learning sessions</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-white" />
                <p>Affordable hourly pricing</p>
              </div>
            </div>
          </div>
        </div>

   
        <div className="flex items-center justify-center p-8 md:p-14">

          <Card className="w-full shadow-none border-none">
            <Card>

              <div className="mb-8">
                <h2 className="text-4xl font-black text-slate-900">
                  Login Account
                </h2>

                <p className="text-slate-500 mt-2">
                  Login to get started with your tutoring journey.
                </p>
              </div>

              <Form onSubmit={onSubmit} className="flex flex-col gap-5">

             
                

           
                <TextField
                  isRequired
                  name="email"
                  type="email"
                  validate={(value) => {
                    if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                    ) {
                      return "Please enter a valid email address";
                    }

                    return null;
                  }}
                >
                  <Label>Email</Label>

                  <Input
                    className="rounded-xl"
                    placeholder="john@example.com"
                  />

                  <FieldError />
                </TextField>

               
                <TextField
                  isRequired
                  minLength={8}
                  name="password"
                  type="password"
                  validate={(value) => {
                    if (value.length < 8) {
                      return "Password must be at least 8 characters";
                    }

                    if (!/[A-Z]/.test(value)) {
                      return "Password must contain at least one uppercase letter";
                    }

                    if (!/[0-9]/.test(value)) {
                      return "Password must contain at least one number";
                    }

                    return null;
                  }}
                >
                  <Label>Password</Label>

                  <Input
                    className="rounded-xl"
                    placeholder="Enter your password"
                  />

                  <Description>
                    Must contain 8+ characters, 1 uppercase letter and 1 number
                  </Description>

                  <FieldError />
                </TextField>

               
                <Button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold h-12 rounded-xl mt-2"
                >
                  Login
                </Button>

                <p className="text-center text-slate-500 text-sm mt-2">
                  Already have an account?{" "}

                  <Link
                    href="/login"
                    className="text-red-600 font-semibold hover:underline"
                  >
                    Login
                  </Link>
                </p>
              </Form>
            </Card>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;