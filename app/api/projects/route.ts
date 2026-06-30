import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { order: 'asc' },
    });

    return NextResponse.json(
      projects.map((p) => ({
        ...p,
        tags: JSON.parse(p.tags) as string[],
      })),
    );
  } catch (error) {
    console.error('GET /api/projects:', error);
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}
