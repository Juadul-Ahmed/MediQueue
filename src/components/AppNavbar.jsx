"use client";

import React, { useState } from "react";
import { Link, Button, Avatar } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import ThemeToggle from "@/app/ThemeToggle";

export default function AppNavbar() {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleLogout = async () => {
    await authClient.signOut();
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-950/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <Link href="/">
            <p className="font-bold text-2xl text-red-500">
              Medi<span className="text-black dark:text-white">Queue</span>
            </p>
          </Link>
        </div>

        <ul className="hidden sm:flex items-center gap-6">
          <li>
            <Link color="foreground" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link color="foreground" href="/tutors">
              Tutors
            </Link>
          </li>
          <li>
            <Link color="foreground" href="/add-tutor">
              Add Tutor
            </Link>
          </li>
          <li>
            <Link color="foreground" href="/my-tutors">
              My Tutors
            </Link>
          </li>
          <li>
            <Link color="foreground" href="/my-booked-sessions">
              My Booked Sessions
            </Link>
          </li>
        </ul>

        {user ? (
          <div className="flex items-center gap-3">
           <ThemeToggle />
            <div className="relative group">
              <Avatar className="cursor-pointer">
                <Avatar.Image
                  referrerPolicy="no-referrer"
                  alt={user?.name}
                  src={user?.image}
                />

                <Avatar.Fallback>{user?.name?.[0]}</Avatar.Fallback>
              </Avatar>

              <div className="absolute right-0 mt-3 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl overflow-hidden">
                  <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-800">
                    <p className="font-semibold text-slate-900 dark:text-white">
                      {user?.name}
                    </p>

                    <p className="text-sm text-slate-500 dark:text-slate-400 truncate">
                      {user?.email}
                    </p>
                  </div>

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-3 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 transition font-medium"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="hidden sm:flex flex gap-4">
            <ThemeToggle/>
              <Link href="/login">
                <Button color="primary" variant="outline">
                  Login
                </Button>
              </Link>

              <Link href="/register">
                <Button variant="danger">Register</Button>
              </Link>
            </div>
          </>
        )}

        <button
          className="sm:hidden p-2 text-slate-900 dark:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {isMenuOpen && (
        <ul className="sm:hidden flex flex-col p-6 gap-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/tutors">Tutors</Link>
          </li>
          <li>
            <Link href="/add-tutor">Add Tutor</Link>
          </li>
          <li>
            <Link href="/my-tutors">My Tutors</Link>
          </li>
          <li>
            <Link href="/my-booked-sessions">My Booked Sessions</Link>
          </li>
          <li>
            <Link href="/login">
              <Button variant="outline" className={""}>
                Login
              </Button>
            </Link>
          </li>
          <li>
            <Link href="/register">
              <Button color="primary" href="" variant="danger" fullWidth>
                Register
              </Button>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
