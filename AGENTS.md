# iTrans — Dev Notes

## Design Direction
- Dark base (`#0a0a0f`) with animated gradient orbs (teal, emerald, cyan)
- Accent palette: teal (`#23765C` from logo) → bright cyan (`#02FDFB` from logo)
- Gradients: `from-teal-600 to-cyan-400`
- Card style: `bg-white/[0.03]` border `border-white/[0.06]`, teal glow on hover

## Sections (in order)
| Section | Content |
|---|---|
| Nav | Logo + Services, Tools, About links + "Let's Talk" CTA (gradient) |
| Hero | Logo + "We Build for Startups" headline, View Services + Get in Touch CTAs |
| Work/What We Do | 3 cards: Landing Pages & Portfolios, Full-Stack Web Apps, Firebase Powered |
| Stack/Our Stack | FE: React/Next.js + Tailwind (top), BE+DB: Spring Boot/Node.js + MongoDB/MySQL (left), Firebase (right, Auth DB & Backendless) with divider |
| Connect/Let's Talk | Big email button `contact.itrans@gmail.com`, no socials |
| About/How We Work | 3 value cards: No Fluff, Ownership, Straight Talk |

## Stack Tools
- Frontend: React / Next.js
- Styling: Tailwind CSS
- Backend: Spring Boot / Node.js
- Database: MongoDB / MySQL
- All-in-one: Firebase (Auth, DB & Backendless)

## Key Decisions
- "minor" → "small" everywhere
- "freelancers" removed from about
- Email: `contact.itrans@gmail.com`
- Favicon: `/iTrans.svg`
- Contact form + API route deleted
- No social links in Connect section
- Outer container: `max-w-6xl`
- FE cards: `max-w-md`; BE+DB+Firebase: `max-w-4xl` on md+ (each BE card = FE card size, Firebase = 2x width)
- Icons: `react-icons/si` (Simple Icons) for brand logos, `react-icons/fa6` for general icons
- Nav "Connect" link removed (only "Let's Talk" CTA remains)
