import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  const { pathname } = useLocation();

  // Scroll restoration
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col relative selection:bg-blue-500/30">
      <Navbar />
      <main className="flex-grow pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
