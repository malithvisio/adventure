import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Gallery from '@/models/Gallery';

// GET - Fetch all published galleries
export async function GET(request: NextRequest) {
  try {
    console.log('Public gallery API called');

    await connectToDatabase();

    // Fetch all published galleries
    const galleries = await Gallery.find({ published: true })
      .sort({ position: 1, createdAt: -1 })
      .select('name description images')
      .lean();

    console.log(`Found ${galleries.length} published galleries`);

    return NextResponse.json({
      success: true,
      galleries,
    });
  } catch (error: any) {
    console.error('Error fetching public galleries:', error);

    return NextResponse.json(
      { success: false, error: `Failed to fetch galleries: ${error.message}` },
      { status: 500 }
    );
  }
}
