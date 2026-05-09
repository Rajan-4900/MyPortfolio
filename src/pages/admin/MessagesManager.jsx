import { useState, useEffect } from 'react';
import { supabase } from '../../services/supabase';
import { toast } from 'react-hot-toast';
import { FaTrash, FaExternalLinkAlt } from 'react-icons/fa';
import Spinner from '../../components/ui/Spinner';

const MessagesManager = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setMessages(data || []);
    } catch (err) {
      toast.error('Failed to load messages. Table may not exist.');
    } finally {
      setLoading(false);
    }
  };

  const deleteMessage = async (id) => {
    if (!window.confirm('Are you sure you want to delete this message?')) return;
    
    try {
      const { error } = await supabase.from('contact_messages').delete().eq('id', id);
      if (error) throw error;
      setMessages(messages.filter(msg => msg.id !== id));
      toast.success('Message deleted successfully');
    } catch (err) {
      toast.error('Failed to delete message');
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Inbox Messages</h1>
        <p className="text-slate-400">View and manage contact form submissions.</p>
      </div>

      {loading ? (
        <div className="flex justify-center py-20"><Spinner size={40} /></div>
      ) : messages.length === 0 ? (
        <div className="glass-card p-12 text-center rounded-2xl border border-white/5">
          <p className="text-slate-400">No messages found. Your inbox is empty!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className="glass-card p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-bold text-white text-lg">{msg.name}</h3>
                    <span className="text-xs text-slate-500 bg-[#0F172A] px-2 py-1 rounded">
                      {new Date(msg.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <a href={`mailto:${msg.email}`} className="text-sm text-blue-400 hover:underline mb-4 inline-block">{msg.email}</a>
                  <h4 className="font-medium text-slate-300 mb-2">Subject: {msg.subject}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed bg-[#0F172A] p-4 rounded-lg mt-2 border border-white/5">
                    {msg.message}
                  </p>
                </div>
                <div className="flex md:flex-col gap-2 flex-shrink-0">
                  <a 
                    href={`mailto:${msg.email}`}
                    className="p-2 bg-blue-500/10 text-blue-400 rounded-lg hover:bg-blue-500/20 transition-colors"
                    title="Reply via Email"
                  >
                    <FaExternalLinkAlt size={16} />
                  </a>
                  <button 
                    onClick={() => deleteMessage(msg.id)}
                    className="p-2 bg-red-500/10 text-red-400 rounded-lg hover:bg-red-500/20 transition-colors"
                    title="Delete Message"
                  >
                    <FaTrash size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MessagesManager;
