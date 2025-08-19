// import { connectToDatabase } from "@/lib/mongoose";
// import User from "@/models/User";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   try {
//     await connectToDatabase();
//     const { email, password } = await req.json();

//     const user = await User.findOne({ email });
//     if (!user)
//       return NextResponse.json({ error: "Invalid email" }, { status: 401 });

//     const valid = await bcrypt.compare(password, user.password);
//     if (!valid)
//       return NextResponse.json({ error: "Invalid password" }, { status: 401 });

//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, {
//       expiresIn: "7d",
//     });

//     return NextResponse.json({
//       message: "✅ Login successful",
//       token,
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//       },
//     });
//   } catch (err) {
//     console.error("❌ Login error:", err);
//     return NextResponse.json({ error: "Server error" }, { status: 500 });
//   }
// }


import { connectToDatabase } from "@/lib/mongoose";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const { email, password } = await req.json();

    const user = await User.findOne({ email });
    if (!user)
      return NextResponse.json({ error: "Invalid email" }, { status: 401 });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid)
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, {
      expiresIn: "7d",
    });

    return NextResponse.json({
      message: "✅ Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("❌ Login error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
