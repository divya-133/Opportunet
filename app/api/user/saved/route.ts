import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
import { connectToDatabase } from '@/lib/mongoose';
import User from '@/models/User';
import "@/models/Opportunity"; 


export async function GET(req: NextRequest) {
  try {
    await connectToDatabase();

    const authHeader = req.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'No token provided' }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];
    const decoded = verifyToken(token);

    if (!decoded || typeof decoded !== 'object' || !('userId' in decoded)) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }

    const user = await User.findById(decoded.userId)
      .populate('savedOpportunities')
      .exec();

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ savedOpportunities: user.savedOpportunities }, { status: 200 });
  } catch (error: any) {
    console.error("❌ Error details:", error.message);
    return NextResponse.json({ error: "Server error", details: error.message }, { status: 500 });
  }
}

