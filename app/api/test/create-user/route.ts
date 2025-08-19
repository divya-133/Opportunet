// app/api/test/create-user/route.ts
import { connectToDatabase } from "@/lib/mongoose";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDatabase();

    const newUser = await User.create({
      name: "Divya",
      email: "divya@example.com",
      password: "hashedpassword123", // Just for testing; don't store plain text!
    });

    return NextResponse.json({
      message: "✅ User created successfully!",
      user: newUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
