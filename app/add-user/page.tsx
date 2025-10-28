"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import InputField from "@/components/InputField";
import Button from "@/components/Button";

export default function AddUser() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const router = useRouter();

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: any) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const form = new FormData();
      form.append("firstName", formData.firstName);
      form.append("lastName", formData.lastName);
      form.append("email", formData.email);
      form.append("phoneNumber", formData.phoneNumber);
      if (imageFile) form.append("image", imageFile);

      const res = await axios.post("/api/users", form);
      if (res.status === 201) {
        alert("✅ User added successfully!");
        router.push("/");
      }
    } catch (error) {
      console.error(error);
      alert("❌ Failed to add user");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Add New User</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <InputField
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <InputField
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <InputField
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <InputField
          name="phoneNumber"
          placeholder="Mobile Number"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <InputField
          label="Profile Image"
          type="file"
          name="image"
          onChange={handleFileChange}
        />
        <Button label="Add User" type="submit" />
      </form>
    </div>
  );
}
