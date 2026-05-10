# Rajan L | Full Stack Developer Portfolio

A premium, high-performance portfolio website built with **React 19**, **Vite**, **Tailwind CSS**, and **Framer Motion**. Integrated with **Supabase** for real-time data management and contact form handling.

![Portfolio Preview](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop)

## 🚀 Live Demo
[View Live Site](https://portfolio-rajan-l.vercel.app) *(Update this link after deployment)*

## ✨ Key Features
- **Modern & Premium UI**: Sleek dark-mode aesthetic with glassmorphism and smooth micro-animations.
- **Dynamic Projects Showcase**: Real-time project fetching from Supabase with filtering and detailed modals.
- **Advanced Skill Tracking**: Visualized skill levels with animated progress indicators.
- **Interactive Contact System**: Fully functional contact form with database persistence and real-time toast notifications.
- **Responsive Architecture**: Pixel-perfect design optimized for mobile, tablet, and desktop screens.
- **SEO Optimized**: Dynamic meta tags and titles for every page using React Helmet.
- **Admin Panel**: Secure dashboard for managing projects and viewing contact messages.

## 🛠️ Tech Stack
- **Frontend**: React 19, Vite, Tailwind CSS 4, Framer Motion, Lucide React.
- **Backend/Database**: Supabase (PostgreSQL, Auth).
- **Deployment**: Vercel.
- **Forms**: React Hook Form / Custom logic with Supabase.

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
   Create a `.env` file in the root directory and add your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

## 🏗️ Project Structure
```text
src/
├── animations/    # Framer Motion transition configs
├── components/    # Reusable UI components & section blocks
├── hooks/         # Custom React hooks (e.g., useProjects)
├── layouts/       # Page wrappers (Main, Admin)
├── pages/         # Full page components
├── routes/        # App routing configuration
├── services/      # API & Supabase services
└── utils/         # Helper functions
```

## 🚀 Deployment Guide
This project is configured for **Vercel**. To deploy:
1. Push your code to GitHub.
2. Connect your repository to Vercel.
3. Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` as Environment Variables in the Vercel dashboard.
4. Vercel will automatically build and deploy the project using the included `vercel.json` configuration.

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
Built with ❤️ by [Rajan L](https://github.com/Rajan-4900)
