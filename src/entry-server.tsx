import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

// Meta tags configuration for each route
const routeMeta: Record<string, { title: string; description: string; canonical: string }> = {
  '/': {
    title: 'Ladies Hostel in Saravanampatti — ₹8,500/mo',
    description: 'Best ladies hostel in Saravanampatti near KCT Tech Park & KGISL. Safe womens hostel in Coimbatore with AC rooms, WiFi. Affordable PG for working women & students.',
    canonical: 'https://www.theroyalneststudiohouse.com/'
  },
  '/about': {
    title: 'About Us - Ladies Hostel Saravanampatti | The Royal Nest Studio House',
    description: 'Learn about The Royal Nest - premium womens hostel in Saravanampatti. Exclusively for women near tech parks and colleges in Coimbatore.',
    canonical: 'https://www.theroyalneststudiohouse.com/about'
  },
  '/rooms': {
    title: 'Twin & Triple Sharing Ladies PG Saravanampatti — Room + Kitchen',
    description: 'AC ladies hostel rooms in Saravanampatti. Deluxe and Suite options for working women. Affordable monthly rent with modern amenities.',
    canonical: 'https://www.theroyalneststudiohouse.com/rooms'
  },
  '/gallery': {
    title: 'Gallery - Ladies Hostel Photos Saravanampatti | The Royal Nest',
    description: 'View photos of our womens hostel in Saravanampatti. See rooms, facilities, and amenities at The Royal Nest ladies PG near tech parks.',
    canonical: 'https://www.theroyalneststudiohouse.com/gallery'
  },
  '/location': {
    title: 'Ladies Hostel Near KCT Tech Park & KGISL — 5 Min Walk, Saravanampatti',
    description: 'Womens hostel near KCT Tech Park, KGISL & colleges in Saravanampatti. Perfect location for ladies PG in Coimbatore with excellent connectivity.',
    canonical: 'https://www.theroyalneststudiohouse.com/location'
  },
  '/pricing': {
    title: 'Pricing - Affordable Ladies Hostel Monthly Rent Coimbatore | The Royal Nest',
    description: 'Transparent pricing for ladies hostel in Saravanampatti. Monthly rent from ₹8,500. No hidden charges. AC rooms, WiFi, security included.',
    canonical: 'https://www.theroyalneststudiohouse.com/pricing'
  },
  '/testimonials': {
    title: 'Testimonials - Ladies Hostel Reviews Saravanampatti | The Royal Nest',
    description: 'Read reviews from residents of our womens hostel in Saravanampatti. Working women and students share their experience at The Royal Nest ladies PG.',
    canonical: 'https://www.theroyalneststudiohouse.com/testimonials'
  },
  '/contact': {
    title: 'Contact Us - Ladies Hostel Saravanampatti | The Royal Nest',
    description: 'Contact The Royal Nest womens hostel in Saravanampatti. Book a visit to our ladies PG near tech parks in Coimbatore. Call or WhatsApp us today.',
    canonical: 'https://www.theroyalneststudiohouse.com/contact'
  },
  '/faq': {
    title: 'FAQ - Ladies Hostel Questions Answered | The Royal Nest Saravanampatti',
    description: 'Common questions about our womens hostel in Saravanampatti. Learn about rent, amenities, security, and booking process for ladies PG.',
    canonical: 'https://www.theroyalneststudiohouse.com/faq'
  },
  '/blog': {
    title: 'Blog - Ladies Hostel & PG Tips Coimbatore | The Royal Nest',
    description: 'Expert tips on finding ladies hostels in Coimbatore. Read about womens PG accommodation, safety tips, and location guides.',
    canonical: 'https://www.theroyalneststudiohouse.com/blog'
  },
  '/blog/best-womens-pg-kct-tech-park': {
    title: "Best Women's PGs Near KCT Tech Park Coimbatore | The Royal Nest",
    description: 'Complete guide to finding the best ladies hostel near KCT Tech Park Saravanampatti. AC rooms, WiFi, security, and affordable monthly rent for working women.',
    canonical: 'https://www.theroyalneststudiohouse.com/blog/best-womens-pg-kct-tech-park'
  },
  '/blog/working-womens-hostel-saravanampatti': {
    title: "Working Women's Hostel in Saravanampatti - Complete Facilities Guide",
    description: 'Comprehensive guide to working womens hostel facilities in Saravanampatti near tech parks. AC rooms, WiFi, security for professional women.',
    canonical: 'https://www.theroyalneststudiohouse.com/blog/working-womens-hostel-saravanampatti'
  },
  '/blog/ladies-hostel-monthly-rent-coimbatore': {
    title: 'Ladies Hostel Monthly Rent in Coimbatore - Budget Planning Guide',
    description: 'Plan your budget for ladies hostel in Saravanampatti Coimbatore. Monthly rent breakdown, included amenities, and cost comparison.',
    canonical: 'https://www.theroyalneststudiohouse.com/blog/ladies-hostel-monthly-rent-coimbatore'
  },
  '/blog/safe-womens-accommodation-coimbatore': {
    title: "Safe Women's Accommodation in Coimbatore | Top 5 Safety Tips - The Royal Nest",
    description: 'How to choose a secure ladies hostel in Saravanampatti Coimbatore. Safety tips for women-only PG with 24/7 security and CCTV surveillance.',
    canonical: 'https://www.theroyalneststudiohouse.com/blog/safe-womens-accommodation-coimbatore'
  },
  '/blog/pg-near-colleges-saravanampatti': {
    title: 'Best PG Near SNS and Kumaraguru College | Student Guide - The Royal Nest',
    description: 'Find affordable ladies hostels near SNS and Kumaraguru colleges in Saravanampatti. Student-friendly PG with study areas, WiFi, and good connectivity.',
    canonical: 'https://www.theroyalneststudiohouse.com/blog/pg-near-colleges-saravanampatti'
  },
  '/blog/best-womens-hostel-saravanampatti-2025': {
    title: "Best Women's Hostel in Saravanampatti: Complete 2025 Guide | Royal Nest",
    description: "Discover the best women's hostel in Saravanampatti for 2025. Complete guide covering ladies hostel options near IT Park, KGISL, TCS, Cognizant with AC, WiFi, security & attached bathrooms.",
    canonical: 'https://www.theroyalneststudiohouse.com/blog/best-womens-hostel-saravanampatti-2025'
  },
  '/blog/womens-hostel-vs-pg-saravanampatti': {
    title: "Women's Hostel vs PG in Saravanampatti – Which Is Better? | Royal Nest",
    description: "Confused between women's hostel and PG in Saravanampatti? Compare facilities, pricing, security & amenities. Complete guide for IT professionals & students.",
    canonical: 'https://www.theroyalneststudiohouse.com/blog/womens-hostel-vs-pg-saravanampatti'
  },
  '/womens-hostel-saravanampatti': {
    title: "Women's Hostel in Saravanampatti | The Royal Nest",
    description: "Best women's hostel in Saravanampatti, Coimbatore. Safe ladies hostel near KCT Tech Park, KGISL & Adithya Techno Park. AC rooms, WiFi, 24/7 security. Monthly rent from ₹8,500.",
    canonical: 'https://www.theroyalneststudiohouse.com/womens-hostel-saravanampatti'
  },
  '/blog/top-womens-hostels-saravanampatti-comparison': {
    title: "Top 6 Women's Hostels in Saravanampatti 2025 | Comparison Guide",
    description: "Compare the top 6 women's hostels in Saravanampatti, Coimbatore near CHIL SEZ IT Park and tech parks. Find the best ladies hostel with amenities, security, and location details for 2025.",
    canonical: 'https://www.theroyalneststudiohouse.com/blog/top-womens-hostels-saravanampatti-comparison'
  }
};

export function render(url: string) {
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
  
  return html;
}

export function getMetaTags(url: string): string {
  const meta = routeMeta[url] || routeMeta['/'];
  
  return `
    <title>${meta.title}</title>
    <meta name="description" content="${meta.description}" />
    <meta property="og:description" content="${meta.description}" />
    <meta name="twitter:description" content="${meta.description}" />
    <link rel="canonical" href="${meta.canonical}" />
  `;
}

