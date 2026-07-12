import { FaShieldAlt, FaUsers, FaLayerGroup, FaBullseye, FaTrophy } from 'react-icons/fa';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import StatCard from '../components/StatCard';
import SectionHeader from '../components/SectionHeader';
import { useStore } from '../store/useStore';

function DashboardPage() {
  const { teams, groups } = useStore();
  const completedCount = groups.filter((group) => group.allocated).length;
  const progress = Math.round((completedCount / groups.length) * 100);

  const recentGroups = useMemo(
    () => groups.slice(0, 2).map((group) => ({ ...group, subtitle: `${group.players.length} players` })),
    [groups],
  );

  const allocatedPlayers = completedCount * 30;
  const remainingPlayers = Math.max(0, 300 - allocatedPlayers);
  const remainingGroups = Math.max(0, groups.length - completedCount);

  return (
    <div>
      <SectionHeader title="Dashboard" description="Premium BCPL Allocation Control" />
      <div className="grid gap-4 xl:grid-cols-4">
        <StatCard label="Teams" value={`${teams.length}`} caption="30 teams across BCPL live draw." icon={<FaUsers />} />
        <StatCard label="Players" value="300" caption="Total players ready for allocation." icon={<FaShieldAlt />} />
        <StatCard label="Groups" value="10" caption="Groups queued for live allocation." icon={<FaLayerGroup />} />
        <StatCard label="Progress" value={`${progress}%`} caption={`${completedCount} groups completed so far.`} icon={<FaBullseye />} />
      </div>

      <div className="mt-8 grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="overflow-hidden rounded-[26px] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-fuchsia-50 p-4 shadow-[0_12px_28px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-5 max-h-[520px]">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.32em] text-slate-500">Auction progress</p>
              <h3 className="mt-1 text-xl font-semibold text-slate-900">Live Group Allocation</h3>
            </div>
            <div className="space-y-1 rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-700 to-cyan-500 px-3 py-2 text-white shadow-lg shadow-violet-500/20">
              <p className="text-[11px] text-violet-100">Groups Completed</p>
              <p className="text-xl font-semibold text-white">{completedCount}/10</p>
            </div>
          </div>
          <div className="mt-4 grid gap-4 rounded-[22px] border border-slate-200 bg-white/95 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_14px_30px_rgba(15,23,42,0.06)] sm:p-5">
            <div className="flex flex-col items-center gap-4 rounded-[22px] bg-gradient-to-br from-slate-900 to-violet-900/95 p-4 text-white shadow-lg shadow-violet-600/15 md:flex-row md:justify-between md:gap-4">
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-slate-950/90 shadow-[0_12px_35px_rgba(18,110,230,0.12)]">
                <div className="absolute inset-0 rounded-full bg-slate-900/80" />
                <div
                  className="absolute inset-3 rounded-full"
                  style={{
                    background: `conic-gradient(#a78bfa ${progress}%, rgba(255,255,255,0.18) ${progress}% 100%)`,
                  }}
                />
                <div className="relative flex flex-col items-center justify-center text-center">
                  <span className="text-3xl font-semibold text-white">{progress}%</span>
                  <span className="text-[11px] uppercase tracking-[0.32em] text-slate-300">Completed</span>
                </div>
              </div>
              <div className="grid w-full gap-2 text-xs sm:grid-cols-2">
                <div className="rounded-[18px] border border-white/15 bg-white/10 p-3 shadow-[0_8px_20px_rgba(15,23,42,0.08)]">
                  <p className="uppercase tracking-[0.28em] text-slate-300">Groups Completed</p>
                  <p className="mt-1 text-lg font-semibold text-white">{completedCount}/10</p>
                </div>
                <div className="rounded-[18px] border border-white/15 bg-white/10 p-3 shadow-[0_8px_20px_rgba(15,23,42,0.08)]">
                  <p className="uppercase tracking-[0.28em] text-slate-300">Players Allocated</p>
                  <p className="mt-1 text-lg font-semibold text-white">{allocatedPlayers}/300</p>
                </div>
                <div className="rounded-[18px] border border-white/15 bg-white/10 p-3 shadow-[0_8px_20px_rgba(15,23,42,0.08)]">
                  <p className="uppercase tracking-[0.28em] text-slate-300">Remaining Players</p>
                  <p className="mt-1 text-lg font-semibold text-white">{remainingPlayers}</p>
                </div>
                <div className="rounded-[18px] border border-white/15 bg-white/10 p-3 shadow-[0_8px_20px_rgba(15,23,42,0.08)]">
                  <p className="uppercase tracking-[0.28em] text-slate-300">Remaining Groups</p>
                  <p className="mt-1 text-lg font-semibold text-white">{remainingGroups}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[24px] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-cyan-50 p-4 shadow-[0_12px_32px_rgba(15,23,42,0.07)] backdrop-blur-xl sm:p-5 max-h-[440px] overflow-hidden">
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Upcoming groups</p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900">Next live draw is ready.</h3>
            </div>
            <Link
              to="/groups"
              className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-slate-900 to-slate-700 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:scale-[1.01] hover:from-slate-800 hover:to-slate-600"
            >
              View all groups
            </Link>
          </div>
          <div className="mt-5 grid gap-3">
            {recentGroups.map((group) => (
              <div key={group.id} className="rounded-[18px] border border-slate-200 bg-white p-3 shadow-[0_8px_18px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:border-violet-300">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">{group.name}</p>
                <h4 className="mt-1.5 text-base font-semibold text-slate-900">{group.subtitle}</h4>
                <p className="mt-2 text-sm text-slate-600">Status: {group.status}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 overflow-hidden rounded-[32px] border border-slate-200 bg-[radial-gradient(circle_at_top_left,_rgba(167,139,250,0.25),_transparent_35%),linear-gradient(135deg,_#111827_0%,_#1f2937_45%,_#4c1d95_100%)] p-6 text-white shadow-[0_18px_50px_rgba(15,23,42,0.16)] backdrop-blur-xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Hall of Champions</p>
            <h3 className="mt-3 text-3xl font-semibold text-white">Legends of BCPL</h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
              Past winners, iconic captains, and MVP moments are now showcased on the main stage.
            </p>
          </div>
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-xl text-white shadow-lg shadow-black/10 backdrop-blur">
            <FaTrophy />
          </div>
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <div className="rounded-[28px] border border-white/10 bg-white/10 p-5 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur">
            <p className="text-sm text-slate-300">2025 Winner</p>
            <h4 className="mt-2 text-xl font-semibold text-white">Royal Strikers</h4>
            <p className="mt-3 text-sm text-slate-300">Captain Rahul • MVP Akash</p>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/10 p-5 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur">
            <p className="text-sm text-slate-300">2024 Winner</p>
            <h4 className="mt-2 text-xl font-semibold text-white">Thunder Warriors</h4>
            <p className="mt-3 text-sm text-slate-300">Captain Rohit • MVP Sagar</p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/champions"
            className="inline-flex items-center justify-center rounded-3xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-black/10 transition hover:scale-[1.01]"
          >
            View champions
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
