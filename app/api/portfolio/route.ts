import { NextResponse } from 'next/server';
import { getPortfolioData } from '@/lib/portfolio';

export async function GET() {
  return NextResponse.json(getPortfolioData());
}
