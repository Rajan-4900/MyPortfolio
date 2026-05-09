import { useState, useEffect } from 'react';
import { supabase } from '../services/supabase';

// Fallback mock data in case the table doesn't exist or is empty
const mockProjects = [
  {
    id: '1',
    title: 'Enterprise Analytics Dashboard',
    description: 'A high-performance analytics dashboard for enterprise clients. Features real-time data visualization, custom reporting, and role-based access control.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'PostgreSQL', 'Supabase'],
    github_url: 'https://github.com',
    live_demo_url: 'https://example.com',
    category: 'Full Stack',
    featured: true,
    created_at: '2024-01-15T00:00:00Z'
  },
  {
    id: '2',
    title: 'Study Management Platform',
    description: 'An interactive learning platform with spaced repetition flashcards, progress tracking, and AI-generated study guides.',
    image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2070&auto=format&fit=crop',
    technologies: ['React', 'Firebase', 'Framer Motion', 'Tailwind CSS'],
    github_url: 'https://github.com',
    live_demo_url: 'https://example.com',
    category: 'Frontend',
    featured: true,
    created_at: '2024-02-20T00:00:00Z'
  },
  {
    id: '3',
    title: 'E-Commerce API Service',
    description: 'A scalable RESTful API for e-commerce platforms handling inventory management, order processing, and payment gateway integration.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Redis', 'Docker'],
    github_url: 'https://github.com',
    live_demo_url: 'https://example.com',
    category: 'Backend',
    featured: false,
    created_at: '2024-03-10T00:00:00Z'
  },
  {
    id: '4',
    title: 'Design System Library',
    description: 'A comprehensive, accessible component library built for a SaaS product, complete with storybook documentation and automated testing.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop',
    technologies: ['React', 'TypeScript', 'Storybook', 'Jest'],
    github_url: 'https://github.com',
    live_demo_url: 'https://example.com',
    category: 'UI/UX',
    featured: false,
    created_at: '2024-04-05T00:00:00Z'
  }
];

export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        // Attempt to fetch from Supabase
        const { data, error: supabaseError } = await supabase
          .from('projects')
          .select('*')
          .order('created_at', { ascending: false });

        if (supabaseError) {
          throw supabaseError;
        }

        if (data && data.length > 0) {
          setProjects(data);
        } else {
          // Fallback to mock data if table is empty
          setProjects(mockProjects);
        }
      } catch (err) {
        console.warn('Supabase fetch failed, using fallback data.', err.message);
        // Fallback to mock data if table doesn't exist yet
        setProjects(mockProjects);
        // We don't set error state here to allow a graceful degradation
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
};
