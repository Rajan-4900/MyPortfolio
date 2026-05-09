const PlaceholderAdminPage = ({ title, description }) => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">{title}</h1>
        <p className="text-slate-400">{description}</p>
      </div>

      <div className="glass-card p-12 text-center rounded-3xl border border-white/5 flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-20 h-20 bg-[#0F172A] rounded-full border border-white/5 flex items-center justify-center mb-6">
          <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Coming Soon</h2>
        <p className="text-slate-400 max-w-md mx-auto">
          The {title.toLowerCase()} module is currently under development. You'll be able to manage these records directly from this interface soon.
        </p>
      </div>
    </div>
  );
};

export const ResumeManager = () => <PlaceholderAdminPage title="Resume Management" description="Manage your experience, education, and achievements." />;
export const SkillsManager = () => <PlaceholderAdminPage title="Skills Management" description="Configure your frontend, backend, and toolstack skills." />;
export const AnalyticsSection = () => <PlaceholderAdminPage title="Analytics Overview" description="View detailed traffic and engagement statistics." />;
export const SettingsPanel = () => <PlaceholderAdminPage title="System Settings" description="Configure your profile, theme, and admin preferences." />;
