"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Button from "@/components/Button";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4  text-gray-100">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold mb-4 text-white"
      >
        Welcome to the Full Stack User Management App 🚀
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-gray-400 max-w-2xl mb-6 leading-relaxed"
      >
        This is a{" "}
        <span className="font-semibold text-blue-500">
          Full Stack Application
        </span>{" "}
        built entirely with{" "}
        <span className="font-semibold text-blue-500">Next.js 14</span> and{" "}
        <span className="font-semibold text-blue-500">TypeScript</span>. It uses{" "}
        <strong className="text-gray-300">Server Components</strong> and{" "}
        <strong className="text-gray-300">API Routes</strong> for backend
        functionality, enabling smooth{" "}
        <strong className="text-gray-300">
          user registration, listing, and management
        </strong>{" "}
        — all inside a single unified Next.js project.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <Button label="➕ Add User" onClick={() => router.push("/add-user")} />
        <Button label="👥 View Users" onClick={() => router.push("/users")} />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-10 text-sm text-gray-500"
      >
        Built with ❤️ using{" "}
        <span className="text-blue-500 font-semibold">Next.js</span>,{" "}
        <span className="text-blue-500 font-semibold">TypeScript</span>, and{" "}
        <span className="text-blue-500 font-semibold">Tailwind CSS</span>.
      </motion.p>
    </div>
  );
}
