import { getPortfolioData } from '@/lib/portfolio';
import { HomePage } from '@/components/HomePage';

export const dynamic = 'force-dynamic';

export default async function Page() {
  const data = await getPortfolioData();
  return <HomePage data={data} />;
}
