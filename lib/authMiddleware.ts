// lib/authMiddleware.ts
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export function verifyToken(req: NextRequest) {
  try {
    const authHeader = req.headers.get("authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);

    // Attach decoded user to the request (if needed)
    return { user: decoded };
  } catch (error) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}
