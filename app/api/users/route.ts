import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/mongodb";
import User from "@/models/User";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { firstName, lastName, email, image } = await req.json();
    const newUser = new User({ firstName, lastName, email, image });
    await newUser.save();
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create user", errorDetails: error },
      { status: 500 }
    );
  }
}
