import { useMemo, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import SectionHeader from '../components/SectionHeader';
import TeamCard from '../components/TeamCard';
import { useStore } from '../store/useStore';

function TeamsPage() {
  const teams = useStore((state) => state.teams);
  const [search, setSearch] = useState('');

  const filteredTeams = useMemo(
    () => teams.filter((team) => team.name.toLowerCase().includes(search.toLowerCase())),
    [search, teams],
  );

  return (
    <div>
      <SectionHeader title="Teams" description="Review team status and live roster updates." />
      <div className="mb-8 grid gap-4 md:grid-cols-[1fr_auto]">
        <p className="text-slate-600">Monitor team composition as groups are allocated live during the BCPL ceremony.</p>
        <label className="relative block w-full max-w-sm">
          <FaSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search teams..."
            className="w-full rounded-3xl border border-slate-200 bg-white py-3 pl-12 pr-4 text-sm text-slate-700 outline-none transition focus:border-violet-500/80 focus:ring-2 focus:ring-violet-500/20"
          />
        </label>
      </div>
      <div className="grid gap-6 xl:grid-cols-3">
        {filteredTeams.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </div>
    </div>
  );
}

export default TeamsPage;
