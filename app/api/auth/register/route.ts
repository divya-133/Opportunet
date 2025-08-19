// app/api/auth/register/route.ts
import { connectToDatabase } from "@/lib/mongoose";
import  User  from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    await connectToDatabase();

    const { name, email, password } = await req.json();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ error: "User already exists" }), { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return Response.json({ message: "✅ Registered successfully", user });
  } catch (error) {
    console.error("Register Error:", error);
    return new Response(JSON.stringify({ error: "Server error", details: error }), {
      status: 500,
    });
  }
}
