/** Case-study details merged onto projects by title. */
export const projectDetails: Record<
  string,
  { role: string; features: string[]; description?: string }
> = {
  'Ventura — Camping & Outdoor Gear': {
    role:
      'Led the frontend build end to end — layout system, product discovery UI, featured deals, and motion details — using Next.js, React, TypeScript, and Tailwind CSS, with Zustand for client state and Prisma for product data.',
    description:
      'Ventura is a modern camping and outdoor gear storefront built for trail-ready shopping. Visitors can explore curated products by category, browse featured picks and timed deals, and enjoy a clean, responsive experience that feels premium from first scroll to checkout intent.',
    features: [
      'Category browsing for backpacks, tents, lighting, drinkware, and more',
      'Featured product highlights with limited-time deal countdowns',
      'Brand storytelling sections that reinforce outdoor trust',
      'Responsive UI with Framer Motion for smooth, intentional motion',
      'Client state with Zustand and product data with Prisma',
    ],
  },
  'Weather Forecast': {
    role:
      'Built the full frontend experience — search flows, API-driven UI states, and an authentication-ready login path.',
    description:
      'A clean weather app that helps users check live conditions by location, with a simple interface, clear feedback states, and smooth everyday interactions.',
    features: [
      'Location-based weather search via REST APIs',
      'Mobile-first responsive interface',
      'Loading and empty states for better UX',
      'Authentication-ready login flow',
    ],
  },
  'Luxury Home Online Shop': {
    role:
      'Built client-facing shopping flows and admin-oriented management views for a furniture e-commerce experience.',
    description:
      'A furniture e-commerce experience built for smooth shopping on the client side, with clear product flows and admin-friendly views for managing catalog and orders.',
    features: [
      'Product catalog and shopping experience',
      'Admin-oriented product and order management views',
      'REST API integration with React Query',
      'Reusable React components with Tailwind and MUI',
    ],
  },
};
