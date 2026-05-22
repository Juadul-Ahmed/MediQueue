"use client";

import React, { useState } from "react";
import { Link, Button } from "@heroui/react";

export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-default-200 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        
     
        <div className="flex items-center gap-3">
          <Link href="/">
            <p className="font-bold text-2xl text-red-500">Medi<span className="text-black">Queue</span></p>
          </Link>
        </div>

     
        <ul className="hidden sm:flex items-center gap-6">
          <li><Link color="foreground" href="/">Home</Link></li>
          <li><Link color="foreground" href="/tutors">Tutors</Link></li>
          <li><Link color="foreground" href="/add-tutor">Add Tutor</Link></li>
          <li><Link color="foreground" href="/my-tutors">My Tutors</Link></li>
          <li><Link color="foreground" href="/my-booked-sessions">My Booked Sessions</Link></li>
        </ul>

      
        <div className="hidden sm:flex flex gap-4">
          <Button  color="primary" href="/login" variant="outline">
            Login
          </Button>
          <Button  color="primary" href="/register" variant="danger">
            Register
          </Button>
        </div>

      
        <button 
          className="sm:hidden p-2" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

    
      {isMenuOpen && (
        <ul className="sm:hidden flex flex-col p-6 gap-4 border-t border-default-100 bg-background">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/tutors">Tutors</Link></li>
          <li><Link href="/add-tutor">Add Tutor</Link></li>
          <li><Link href="/my-tutors">My Tutors</Link></li>
          <li><Link href="/my-booked-sessions">My Booked Sessions</Link></li>
          <li><Button color="primary" href="/login" variant="outline" fullWidth>Login</Button></li>
          <li><Button color="primary" href="/register" variant="danger" fullWidth>Register</Button></li>
        </ul>
      )}
    </nav>
  );
}