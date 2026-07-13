/** Case-study details merged onto projects by title (works with DB or fallback). */
export const projectDetails: Record<
  string,
  { role: string; features: string[]; description?: string }
> = {
  'Velora — Premium Footwear': {
    role: 'Designed and developed the frontend storefront with React and Tailwind CSS.',
    description:
      'Built a responsive e-commerce storefront for a premium footwear brand — product browsing, category filters, and a polished shopping experience aimed at conversion.',
    features: [
      'Featured product collections and category browsing',
      'Responsive product cards and shop layouts',
      'Modern SaaS-style UI with clear CTAs',
    ],
  },
  'Weather Forecast': {
    role: 'Developed the full frontend experience, including auth flow and API-driven UI.',
    description:
      'Created a weather search app that helps users get real-time conditions by location, with a clean interface and smooth interactions for everyday use.',
    features: [
      'Country/city weather search via REST APIs',
      'Responsive UI with animations',
      'Authentication-ready login flow',
    ],
  },
  'Luxury Home Online Shop': {
    role: 'Built client-facing and admin-facing frontend features for a full e-commerce platform.',
    description:
      'Developed a furniture e-commerce platform so customers can shop smoothly while admins manage products, orders, and accounts efficiently.',
    features: [
      'Product catalog and shopping flows',
      'Admin-oriented management views',
      'REST API integration with React Query',
    ],
  },
};
