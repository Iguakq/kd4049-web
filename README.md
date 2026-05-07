# 🏰 KD4049 — Kingdom Website

Official website of **Kingdom 4049**, built to centralize all kingdom information and make it accessible to every member and future recruit.

🌐 **Live:** [kd4049.com](https://kd4049.com)

---

## 📖 About

KD4049 is a community platform designed to unify internal organization and improve communication across the kingdom. It provides a single, up-to-date reference point covering community info, immigration guides, the event calendar, and more — making it easier to onboard new players and keep existing members informed.

---

## ✨ Features

- **Community** — Information about the kingdom and its members
- **Immigration** — Guide for players looking to join KD4049
- **Calendar** — Upcoming events, KvK dates, and kingdom activities
- **Simple & accessible** — Clean UI built for quick navigation

---

## 🛠️ Tech Stack

| Technology | Version |
|---|---|
| [Next.js](https://nextjs.org) | 16 |
| [React](https://react.dev) | 19 |
| TypeScript | 5 |
| [Tailwind CSS](https://tailwindcss.com) | 4 |
| [Motion](https://motion.dev) | 12 |
| [Base UI](https://base-ui.com) | 1 |
| [Vercel Analytics](https://vercel.com/analytics) | 2 |
| [Vercel Speed-insights](https://vercel.com/analytics) | 2 |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- [pnpm](https://pnpm.io/) (recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/Iguakq/kd4049-web.git
cd kd4049-web

# Install dependencies
pnpm install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
pnpm build
pnpm start
```

### Lint

```bash
pnpm lint
```

---

## 📁 Project Structure

```
kd4049-web/
├── app/              # Next.js App Router (pages & layouts)
├── components/       # Reusable UI components
├── public/           # Static assets
├── next.config.ts
├── tailwind.config   # Tailwind CSS config
└── tsconfig.json
```

---

## 🌍 Deployment

The project is deployed on **Vercel**. Every push to `main` triggers an automatic deployment.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Iguakq/kd4049-web)

---

## 📜 License

This project is licensed under the [GPL-3.0 License](./LICENSE).

---

> Built with ❤️ for Kingdom 4049
