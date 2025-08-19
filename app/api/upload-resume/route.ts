import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongoose";
import User from "@/models/User";
import jwt from "jsonwebtoken";
import { writeFile } from "fs/promises";
import path from "path";
import { mkdir } from "fs/promises";

export async function POST(req: NextRequest) {
  try {
    const token = req.headers.get("authorization")?.replace("Bearer ", "");
    if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { userId }: any = jwt.verify(token, process.env.JWT_SECRET!);

    const formData = await req.formData();
    const file: File | null = formData.get("resume") as File;
    if (!file) return NextResponse.json({ error: "No file uploaded" }, { status: 400 });

    await connectToDatabase();

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadsDir = path.join(process.cwd(), "public", "uploads", userId);
    await mkdir(uploadsDir, { recursive: true });

    const filename = `${Date.now()}-${file.name}`;
    const filePath = path.join(uploadsDir, filename);
    await writeFile(filePath, buffer);

    const resumeUrl = `/uploads/${userId}/${filename}`;

    await User.findByIdAndUpdate(userId, { resumeUrl });

    return NextResponse.json({ success: true, resumeUrl });
  } catch (err) {
    console.error("Resume upload error:", err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
