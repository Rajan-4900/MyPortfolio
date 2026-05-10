import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Core Components (Not lazy loaded to prevent layout shifts)
import MainLayout from '../layouts/MainLayout';
import AdminLayout from '../layouts/AdminLayout';
import ProtectedRoute from '../components/auth/ProtectedRoute';
import ErrorBoundary from '../components/ui/ErrorBoundary';
import LoadingSkeleton from '../components/ui/LoadingSkeleton';

// Lazy loaded public pages
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Skills = lazy(() => import('../pages/Skills'));
const Projects = lazy(() => import('../pages/Projects'));
const Resume = lazy(() => import('../pages/Resume'));
const Contact = lazy(() => import('../pages/Contact'));
const Login = lazy(() => import('../pages/Login'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

// Lazy loaded admin pages
const DashboardOverview = lazy(() => import('../pages/admin/DashboardOverview'));
const ProjectsManager = lazy(() => import('../pages/admin/ProjectsManager'));
const MessagesManager = lazy(() => import('../pages/admin/MessagesManager'));
import { ResumeManager, SettingsPanel } from '../pages/admin/AdminPlaceholders';

const PageLoader = () => (
  <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 w-full">
    <LoadingSkeleton type="hero" />
  </div>
);

const AppRoutes = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<PageLoader />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Public Routes */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="skills" element={<Skills />} />
            <Route path="projects" element={<Projects />} />
            <Route path="resume" element={<Resume />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>

          {/* Protected Admin Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<DashboardOverview />} />
              <Route path="projects" element={<ProjectsManager />} />
              <Route path="messages" element={<MessagesManager />} />
              <Route path="resume" element={<ResumeManager />} />
              <Route path="settings" element={<SettingsPanel />} />
            </Route>
          </Route>
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};

export default AppRoutes;
