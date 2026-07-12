import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render, getMetaTags } = await import('./dist/server/entry-server.js')

// Define all routes that match App.tsx
const routesToPrerender = [
  '/',
  '/about',
  '/rooms',
  '/gallery',
  '/location',
  '/pricing',
  '/testimonials',
  '/contact',
  '/faq',
  '/blog',
  '/blog/best-womens-pg-kct-tech-park',
  '/blog/working-womens-hostel-saravanampatti',
  '/blog/ladies-hostel-monthly-rent-coimbatore',
  '/blog/safe-womens-accommodation-coimbatore',
  '/blog/pg-near-colleges-saravanampatti',
  '/blog/best-womens-hostel-saravanampatti-2025',
  '/blog/womens-hostel-vs-pg-saravanampatti',
  '/blog/top-womens-hostels-saravanampatti-comparison',
  '/womens-hostel-saravanampatti'
]

;(async () => {
  for (const url of routesToPrerender) {
    const appHtml = render(url);
    const metaTags = getMetaTags(url);
    
    // Replace meta tags in head
    let html = template.replace(
      /<title>.*?<\/title>/,
      metaTags.match(/<title>.*?<\/title>/)[0]
    );
    html = html.replace(
      /<meta name="description" content=".*?" \/>/,
      metaTags.match(/<meta name="description" content=".*?" \/>/)[0]
    );
    html = html.replace(
      /<meta property="og:description" content=".*?" \/>/,
      metaTags.match(/<meta property="og:description" content=".*?" \/>/)[0]
    );
    html = html.replace(
      /<meta name="twitter:description" content=".*?" \/>/,
      metaTags.match(/<meta name="twitter:description" content=".*?" \/>/)[0]
    );
    html = html.replace(
      /<link rel="canonical" href=".*?" \/>/,
      metaTags.match(/<link rel="canonical" href=".*?" \/>/)[0]
    );
    html = html.replace(`<!--app-html-->`, appHtml)

    const filePath = `dist${url === '/' ? '/index' : url}.html`
    const fileDir = path.dirname(toAbsolute(filePath))
    
    // Create subdirectories if they don't exist
    if (!fs.existsSync(fileDir)) {
      fs.mkdirSync(fileDir, { recursive: true })
    }
    
    fs.writeFileSync(toAbsolute(filePath), html)
    console.log('pre-rendered:', filePath)
  }
})()
