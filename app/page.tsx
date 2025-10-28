"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Button from "@/components/Button";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold mb-4 text-gray-800"
      >
        Welcome to the Full Stack User Management App 🚀
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-gray-600 max-w-2xl mb-6 leading-relaxed"
      >
        This is a{" "}
        <span className="font-semibold text-blue-600">
          Full Stack Application
        </span>{" "}
        built entirely with <span className="font-semibold">Next.js 14</span>{" "}
        and <span className="font-semibold">TypeScript</span>. It uses Next.js{" "}
        <strong>Server Components</strong> and <strong>API Routes</strong> for
        backend functionality, enabling smooth{" "}
        <strong>user registration, listing, and management</strong> — all inside
        a single unified Next.js project.
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
        Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.
      </motion.p>
    </div>
  );
}
