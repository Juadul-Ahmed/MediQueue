import Link from "next/link";
import { Button } from "@heroui/react";
import { SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-6 transition-colors">
      
      <div className="max-w-xl text-center">

        <div className="w-24 h-24 mx-auto rounded-3xl bg-red-100 dark:bg-red-500/10 flex items-center justify-center mb-8">
          <SearchX
            size={48}
            className="text-red-600 dark:text-red-500"
          />
        </div>

        <h1 className="text-6xl md:text-7xl font-black text-slate-900 dark:text-white">
          404
        </h1>

        <h2 className="mt-4 text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100">
          Page Not Found
        </h2>

        <p className="mt-4 text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
          The page you are looking for doesn&apos;t exist or may
          have been moved.
        </p>

        <div className="flex justify-center mt-10">
          <Link href="/">
            <Button className="bg-red-600 hover:bg-red-700 dark:hover:bg-red-500 text-white px-8 py-6 rounded-2xl font-semibold text-base transition">
              Back To Home
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}