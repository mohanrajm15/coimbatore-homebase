import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

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
  '/blog/pg-near-colleges-saravanampatti'
]

;(async () => {
  for (const url of routesToPrerender) {
    const appHtml = render(url);
    const html = template.replace(`<!--app-html-->`, appHtml)

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
