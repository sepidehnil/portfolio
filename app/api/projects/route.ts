import { NextResponse } from 'next/server';
import { getPortfolioData } from '@/lib/portfolio';

export async function GET() {
  const { projects } = getPortfolioData();
  return NextResponse.json(projects);
}
