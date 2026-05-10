# Rajan L | Full Stack Developer Portfolio

A premium, high-performance portfolio website built with **React 19**, **Vite**, **Tailwind CSS 4**, and **Framer Motion**. Featuring a secure **Supabase** integration for authentication, real-time data management, and contact handling.

![Portfolio Preview](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop)

## 🚀 Live Demo
[View Live Site](https://portfolio-rajan-l.vercel.app) *(Update this link after deployment)*

## ✨ Key Features
- **Modern & Premium UI**: Sleek dark-mode aesthetic with glassmorphism, background blurs, and smooth micro-animations.
- **Secure Authentication**: Integrated **Google** and **GitHub** OAuth along with Magic Link and Email/Password login.
- **Protected Resources**: Resume downloads are restricted to authenticated users to ensure high-quality engagement.
- **Dynamic Projects Showcase**: Real-time project fetching from Supabase with interactive filtering and detailed modals.
- **Advanced Skill Tracking**: Visualized skill levels with animated progress indicators and technical arsenal categorization.
- **Interactive Contact System**: Functional contact form with database persistence and real-time toast notifications.
- **SEO Optimized**: Dynamic meta tags, Open Graph previews, and titles for every page using React Helmet.
- **Admin Dashboard**: Secure control panel for managing projects and reviewing incoming messages.

## 🛠️ Tech Stack
- **Frontend**: React 19, Vite, Tailwind CSS 4, Framer Motion, Lucide React.
- **Backend/Database**: Supabase (PostgreSQL, GoTrue for Auth).
- **Deployment**: Vercel.
- **State Management**: React Hooks & Context API.

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Rajan-4900/FUTURE_FS_01.git
   cd FUTURE_FS_01
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start development:**
   ```bash
   npm run dev
   ```

## 🔐 Auth Configuration (Supabase)
To enable the social login features implemented in this portfolio:
1. Go to your **Supabase Dashboard** > **Authentication** > **Providers**.
2. Enable **Google** and **GitHub**.
3. Provide the Client ID and Secret for each.
4. Add your deployment URL (e.g., `https://your-site.vercel.app`) to the **Redirect URLs** section.

## 🏗️ Project Structure
```text
src/
├── animations/    # Framer Motion transition & animation configs
├── components/    # Atomic UI components & section-based blocks
├── hooks/         # Custom React hooks (useProjects, etc.)
├── layouts/       # MainLayout and AdminLayout wrappers
├── pages/         # View components (Home, Projects, Login, etc.)
├── routes/        # AppRoutes and ProtectedRoute logic
├── services/      # API clients (Supabase configuration)
└── utils/         # Formatting and helper utilities
```

## 🚀 Deployment Guide
This project is production-ready for **Vercel**:
1. Push your code to GitHub.
2. Connect the repo to Vercel.
3. Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` as Environment Variables.
4. Vercel will handle the rest using the pre-configured `vercel.json` for SPA routing.

## 📄 License
MIT License - Copyright (c) 2026 Rajan L.

---
Built with ❤️ by [Rajan L](https://github.com/Rajan-4900)
