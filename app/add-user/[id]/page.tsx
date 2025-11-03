"use client";
import { useCallback, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import InputField from "@/components/InputField";
import Button from "@/components/Button";

export default function AddUser() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    image: "",
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const router = useRouter();
  const { id } = useParams();

  console.log(">>> Params:", id);

  useEffect(() => {
    if (id === "create") return; // Skip fetching if creating a new user

    fetchUser();
  }, [id]);

  const fetchUser = useCallback(async () => {
    try {
      const res = await axios.get(`/api/users/${id}`);
      const user = res.data;

      console.log(" >>> Fetched user data:", user);
      setFormData({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        phoneNumber: user.phoneNumber || "",
        image: user.image || "",
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }, [id]);

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

      if (id !== "create") {
        if (id !== "create") form.append("_id", id);

        // Update existing user
        const res = await axios.put(`/api/users/${id}`, form);
        if (res.status === 200) {
          alert("User updated successfully!");
          router.push("/");
          return;
        }
      }
      const res = await axios.post("/api/users", form);
      if (res.status === 201) {
        alert("User added successfully!");
        router.push("/");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to add user");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-[#1a1a1a] p-6 rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-white">Add New User</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <InputField
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="bg-transparent border-2 border-gray-600 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
        />
        <InputField
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="bg-transparent border-2 border-gray-600 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
        />
        <InputField
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="bg-transparent border-2 border-gray-600 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
        />
        <InputField
          name="phoneNumber"
          placeholder="Mobile Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="bg-transparent border-2 border-gray-600 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
        />
        <InputField
          label="Profile Image"
          type="file"
          name="image"
          onChange={handleFileChange}
          className="bg-transparent text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
        />

        <Button
          label={id === "create" ? "Add User" : "Update User"}
          type="submit"
        />
      </form>
    </div>
  );
}
