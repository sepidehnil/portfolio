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
      'Layout system, product discovery UI, featured deals, and motion details',
      'Category browsing with featured picks and timed deals',
      'Zustand for client state and Prisma for product data',
      'Built with Next.js, React, TypeScript, and Tailwind CSS',
    ],
  },
  'FlowBoard — Multi-user SaaS Dashboard': {
    role:
      'Designed a multi-user data model (projects, tasks, clients, invoices, activity) with server-side userId ownership so users never see another account’s data.',
    description:
      'Designed a multi-user data model (projects, tasks, clients, invoices, activity) with server-side userId ownership so users never see another account’s data.',
    features: [
      'Email/password auth with Auth.js (JWT sessions), bcrypt hashing, protected routes, and email-based password reset',
      'Full CRUD for projects, tasks, clients, and invoices using Next.js Server Actions, Prisma, and Zod + React Hook Form validation',
      'Live metrics dashboard and analytics charts (Recharts) fed from PostgreSQL',
      'Demo data seeding on signup',
    ],
  },
  'Weather Forecast': {
    role:
      'Built a weather forecasting platform that lets users register and search for weather information for specific countries.',
    description:
      'This website is a weather forecasting platform that allows users to register and search for weather information for specific countries. It leverages JavaScript, Tailwind CSS, animations, and a REST API to fetch weather data.',
    features: [
      'Register before searching weather by country',
      'REST API for live weather data',
      'JavaScript, Tailwind CSS, and animations',
    ],
  },
  'Luxury Home Online Shop': {
    role:
      'Built client-side shopping and admin tools for managing products, orders, and user accounts.',
    description:
      'My online shop combines client-side and server-side functionalities to create a comprehensive e-commerce platform, providing users with a seamless shopping experience while enabling administrators to efficiently manage products, orders, and user accounts.',
    features: [
      'Client-side shopping experience and admin product/order management',
      'React, Tailwind CSS, Material-UI, React Query, and React Router',
      'Authentication, React Hook Form, REST API, and Postman',
    ],
  },
};
