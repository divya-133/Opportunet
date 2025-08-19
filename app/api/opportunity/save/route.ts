// app/api/opportunity/save/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongoose';
import { verifyToken } from '@/lib/auth';
import User from '@/models/User';
import '@/models/Opportunity'; // Ensure it's registered

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();

    const authHeader = req.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];
    const decoded = verifyToken(token);
    if (!decoded || typeof decoded !== 'object' || !('userId' in decoded)) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }

    const { opportunityId } = await req.json();
    if (!opportunityId) {
      return NextResponse.json({ error: 'Missing opportunityId' }, { status: 400 });
    }

    const user = await User.findById(decoded.userId);
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    if (!user.savedOpportunities.includes(opportunityId)) {
      user.savedOpportunities.push(opportunityId);
      await user.save();
    }

    return NextResponse.json({ message: 'Opportunity saved successfully' });
  } catch (err) {
    console.error('❌ Save Error:', err);
    return NextResponse.json({ error: 'Server error', details: err }, { status: 500 });
  }
}
