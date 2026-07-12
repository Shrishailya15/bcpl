import SectionHeader from '../components/SectionHeader';

function SettingsPage() {
  return (
    <div>
      <SectionHeader title="Settings" description="Manage live allocation display settings." />
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-card">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[28px] border border-white/10 bg-slate-950/80 p-6">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Display mode</p>
            <h3 className="mt-3 text-xl font-semibold text-white">Projector-ready UI</h3>
            <p className="mt-3 text-slate-400">Optimize contrast, motion, and layout for stadium screens and LED walls.</p>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-slate-950/80 p-6">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Interactivity</p>
            <h3 className="mt-3 text-xl font-semibold text-white">Touch-safe controls</h3>
            <p className="mt-3 text-slate-400">Buttons and cards are sized for quick live ceremony operations.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
