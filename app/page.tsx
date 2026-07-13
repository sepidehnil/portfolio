import { getPortfolioData } from '@/lib/portfolio';
import { HomePage } from '@/components/HomePage';

export default function Page() {
  const data = getPortfolioData();
  return <HomePage data={data} />;
}
