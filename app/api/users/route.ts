import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req: Request) {
  try {
    console.log("[POST] /api/users request received");

    const formData = await req.formData();

    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const phoneNumber = formData.get("phoneNumber");
    const imageFile = formData.get("image") as File | null;

    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Handle local file upload
    let imagePath = null;
    if (imageFile) {
      const buffer = Buffer.from(await imageFile.arrayBuffer());
      const fileName = `${Date.now()}-${imageFile.name}`;
      const fs = require("fs");
      const path = require("path");
      const uploadDir = path.join(process.cwd(), "public/uploads");

      if (!fs.existsSync(uploadDir))
        fs.mkdirSync(uploadDir, { recursive: true });

      const filePath = path.join(uploadDir, fileName);
      fs.writeFileSync(filePath, buffer);
      imagePath = `/uploads/${fileName}`;
    }

    await connectDB();
    const newUser = new User({
      firstName,
      lastName,
      email,
      image: imagePath,
      phoneNumber,
    });
    await newUser.save();

    return NextResponse.json(newUser, { status: 201 });
  } catch (error: any) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "Failed to create user", details: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    console.log("[GET] /api/users request received");
    await connectDB();
    const users = await User.find();
    return NextResponse.json(users, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Failed to fetch users", details: error.message },
      { status: 500 }
    );
  }
}
