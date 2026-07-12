import { useParams } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import { useStore } from '../store/useStore';

function TeamDetailsPage() {
  const { teamId } = useParams();
  const team = useStore((state) => state.teams.find((entry) => entry.id === teamId));

  if (!team) {
    return <div className="rounded-[32px] border border-slate-200 bg-white p-8 text-slate-600">Team not found.</div>;
  }

  return (
    <div>
      <SectionHeader title="Team Details" description={team.name} />
      <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.24)] text-white">
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 shadow-[0_20px_60px_rgba(99,102,241,0.24)]">
              <span className="text-5xl">{team.logo}</span>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-slate-400">Elite squad</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">{team.name}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">Captain {team.captain} leads a championship-ready roster focused on speed, strategy, and broadcast-ready performance.</p>
            </div>
            <div className="grid w-full gap-3 sm:grid-cols-2">
              <div className="rounded-[24px] border border-white/10 bg-white/10 p-4 text-left shadow-[0_10px_30px_rgba(15,23,42,0.16)]">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Strength</p>
                <p className="mt-2 text-3xl font-semibold text-white">{team.strength}</p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/10 p-4 text-left shadow-[0_10px_30px_rgba(15,23,42,0.16)]">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Titles</p>
                <p className="mt-2 text-3xl font-semibold text-white">{team.titles}</p>
              </div>
            </div>
            <div className="mt-4 w-full rounded-[24px] border border-white/10 bg-slate-900/60 p-4 text-left shadow-[0_10px_30px_rgba(15,23,42,0.2)]">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Team pulse</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">This squad is positioned for live allocation dominance and premium BCPL broadcast moments. Every player is tuned for peak performance.</p>
            </div>
          </div>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Roster</p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-900">Allocated players</h3>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-slate-700">{team.players.length} players</span>
            </div>
            <div className="grid gap-3">
              {team.players.length ? (
                team.players.map((player, index) => (
                  <div key={`${team.id}-${player}-${index}`} className="group overflow-hidden rounded-[24px] border border-slate-200 bg-slate-50 p-4 shadow-[0_8px_20px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-0.5 hover:border-violet-300">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{player}</p>
                        <p className="mt-1 text-xs text-slate-500">Player #{index + 1}</p>
                      </div>
                      <span className="rounded-2xl bg-violet-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-violet-700">Allocated</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="rounded-[24px] border border-dashed border-slate-300 bg-slate-50 p-6 text-center text-sm text-slate-500">No players allocated yet.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamDetailsPage;
