import { useState, useEffect } from 'react';
import { supabase } from '../../services/supabase';
import { toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { FaPlus, FaTrash, FaEdit, FaTimes } from 'react-icons/fa';
import Spinner from '../../components/ui/Spinner';
import LazyImage from '../../components/ui/LazyImage';

const ProjectsManager = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase.from('projects').select('*').order('created_at', { ascending: false });
      if (error) throw error;
      setProjects(data || []);
    } catch (err) {
      toast.error('Failed to load projects');
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (data) => {
    // Convert comma-separated string to array
    const technologiesArray = typeof data.technologies === 'string' 
      ? data.technologies.split(',').map(t => t.trim()) 
      : data.technologies;

    const payload = {
      ...data,
      technologies: technologiesArray
    };

    try {
      if (editingId) {
        const { error } = await supabase.from('projects').update(payload).eq('id', editingId);
        if (error) throw error;
        toast.success('Project updated successfully');
      } else {
        const { error } = await supabase.from('projects').insert([payload]);
        if (error) throw error;
        toast.success('Project added successfully');
      }
      
      closeModal();
      fetchProjects();
    } catch (err) {
      toast.error(err.message || 'An error occurred');
    }
  };

  const deleteProject = async (id) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return;
    try {
      const { error } = await supabase.from('projects').delete().eq('id', id);
      if (error) throw error;
      setProjects(projects.filter(p => p.id !== id));
      toast.success('Project deleted');
    } catch (err) {
      toast.error('Failed to delete project');
    }
  };

  const openEditModal = (project) => {
    setEditingId(project.id);
    setValue('title', project.title);
    setValue('description', project.description);
    setValue('image', project.image);
    setValue('technologies', project.technologies.join(', '));
    setValue('category', project.category);
    setValue('github_url', project.github_url || '');
    setValue('live_demo_url', project.live_demo_url || '');
    setValue('featured', project.featured);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingId(null);
    reset();
  };

  return (
    <div className="max-w-7xl mx-auto relative">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Project Management</h1>
          <p className="text-slate-400">Add, edit, or delete portfolio projects.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-lg hover:shadow-lg transition-all"
        >
          <FaPlus className="mr-2" /> Add Project
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center py-20"><Spinner size={40} /></div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="glass-card rounded-2xl border border-white/5 overflow-hidden group">
              <div className="h-40 overflow-hidden relative">
                <LazyImage src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                {project.featured && (
                  <div className="absolute top-2 left-2 px-2 py-1 bg-yellow-500/90 text-black text-xs font-bold rounded">Featured</div>
                )}
                <div className="absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onClick={() => openEditModal(project)} className="p-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600"><FaEdit size={14}/></button>
                  <button onClick={() => deleteProject(project.id)} className="p-2 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600"><FaTrash size={14}/></button>
                </div>
              </div>
              <div className="p-5">
                <div className="text-xs font-semibold text-blue-400 mb-1">{project.category}</div>
                <h3 className="font-bold text-white text-lg mb-2 truncate">{project.title}</h3>
                <p className="text-slate-400 text-sm line-clamp-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#0F172A]/80 backdrop-blur-sm" onClick={closeModal}></div>
          <div className="glass-card w-full max-w-2xl bg-[#111827] rounded-2xl border border-white/10 relative z-10 max-h-[90vh] flex flex-col">
            <div className="p-6 border-b border-white/5 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">{editingId ? 'Edit Project' : 'New Project'}</h2>
              <button onClick={closeModal} className="text-slate-400 hover:text-white"><FaTimes size={20}/></button>
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)} className="p-6 overflow-y-auto custom-scrollbar space-y-4 flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-400 mb-1">Title</label>
                  <input {...register('title', { required: true })} className="w-full bg-[#0F172A] border border-white/10 rounded-lg px-3 py-2 text-white focus:border-blue-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-1">Category</label>
                  <select {...register('category', { required: true })} className="w-full bg-[#0F172A] border border-white/10 rounded-lg px-3 py-2 text-white focus:border-blue-500 outline-none">
                    <option value="Full Stack">Full Stack</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                    <option value="UI/UX">UI/UX</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-1">Description</label>
                <textarea {...register('description', { required: true })} rows={3} className="w-full bg-[#0F172A] border border-white/10 rounded-lg px-3 py-2 text-white focus:border-blue-500 outline-none"></textarea>
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-1">Image URL</label>
                <input {...register('image', { required: true })} className="w-full bg-[#0F172A] border border-white/10 rounded-lg px-3 py-2 text-white focus:border-blue-500 outline-none" />
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-1">Technologies (comma separated)</label>
                <input {...register('technologies', { required: true })} placeholder="React, Node, Tailwind..." className="w-full bg-[#0F172A] border border-white/10 rounded-lg px-3 py-2 text-white focus:border-blue-500 outline-none" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-400 mb-1">GitHub URL (Optional)</label>
                  <input {...register('github_url')} className="w-full bg-[#0F172A] border border-white/10 rounded-lg px-3 py-2 text-white focus:border-blue-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-1">Live Demo URL (Optional)</label>
                  <input {...register('live_demo_url')} className="w-full bg-[#0F172A] border border-white/10 rounded-lg px-3 py-2 text-white focus:border-blue-500 outline-none" />
                </div>
              </div>

              <div className="flex items-center mt-4">
                <input type="checkbox" id="featured" {...register('featured')} className="w-4 h-4 rounded bg-[#0F172A] border-white/10 text-blue-500 focus:ring-blue-500" />
                <label htmlFor="featured" className="ml-2 text-sm text-slate-300">Mark as Featured Project</label>
              </div>

              <div className="pt-4 border-t border-white/5 flex justify-end gap-3 mt-6">
                <button type="button" onClick={closeModal} className="px-4 py-2 text-slate-300 hover:bg-white/5 rounded-lg transition-colors">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">Save Project</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsManager;
