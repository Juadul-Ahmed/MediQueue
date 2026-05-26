"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa6";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <Button
        variant="outline"
        size="icon"
        className="rounded-full relative"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <FaSun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />

        <FaMoon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
    </div>
  );
};

export default ThemeToggle;