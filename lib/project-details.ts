/** Case-study details merged onto projects by title. */
export const projectDetails: Record<
  string,
  { role: string; features: string[]; description?: string }
> = {
  'Velora — Premium Footwear': {
    role:
      'Owned the frontend storefront: layout system, product presentation, and conversion-focused UI with React and Tailwind CSS.',
    description:
      'Built a responsive e-commerce storefront for a premium footwear brand — product discovery, category browsing, and a polished shopping experience designed to convert visitors into buyers.',
    features: [
      'Featured collections and category-based browsing',
      'Responsive product cards optimized for mobile shopping',
      'Clear CTAs and modern SaaS-style visual hierarchy',
      'Reusable UI components for faster iteration',
    ],
  },
  'Weather Forecast': {
    role:
      'Developed the full frontend experience, including search flows, API-driven UI states, and an authentication-ready login path.',
    description:
      'Built a responsive weather platform that helps users find real-time conditions by location — with clean UX, smooth interactions, and reliable REST API integration.',
    features: [
      'Location-based weather search via REST APIs',
      'Mobile-first responsive interface',
      'Loading and empty states for better UX',
      'Authentication-ready login flow',
    ],
  },
  'Luxury Home Online Shop': {
    role:
      'Built client-facing shopping flows and admin-oriented management views for a full e-commerce platform.',
    description:
      'Developed a furniture e-commerce platform so customers can browse and purchase with confidence while administrators manage products, orders, and accounts efficiently.',
    features: [
      'Product catalog and shopping experience',
      'Admin-oriented product and order management views',
      'REST API integration with React Query',
      'Reusable React components with Tailwind and MUI',
    ],
  },
};
