import { useMemo, useState } from 'react';
import { FaSearch, FaFilter } from 'react-icons/fa';
import SectionHeader from '../components/SectionHeader';
import { useStore } from '../store/useStore';
import type { Player } from '../types';

function PlayersPage() {
  const groups = useStore((state) => state.groups);
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');

  const allPlayers = useMemo(() => groups.flatMap((group) => group.players), [groups]);

  const filteredPlayers = useMemo(() => {
    return allPlayers.filter((player) => {
      const matchesSearch = player.name.toLowerCase().includes(search.toLowerCase());
      const matchesRole = roleFilter === 'All' || player.role === roleFilter;
      return matchesSearch && matchesRole;
    });
  }, [allPlayers, search, roleFilter]);

  return (
    <div>
      <SectionHeader title="Players" description="Browse all players by group and role." />
      <div className="mb-8 grid gap-4 md:grid-cols-[1fr_auto]">
        <p className="text-slate-600">Use the search and role filter to quickly locate players for live allocation review.</p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <label className="relative block w-full min-w-[220px]">
            <FaSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search players..."
              className="w-full rounded-3xl border border-slate-200 bg-white py-3 pl-12 pr-4 text-sm text-slate-700 outline-none transition focus:border-violet-500/80 focus:ring-2 focus:ring-violet-500/20"
            />
          </label>
          <div className="relative inline-flex w-full min-w-[160px] items-center rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
            <FaFilter className="mr-3 text-slate-500" />
            <select
              value={roleFilter}
              onChange={(event) => setRoleFilter(event.target.value)}
              className="w-full bg-transparent text-sm text-slate-700 outline-none"
            >
              <option value="All">All roles</option>
              <option value="All Rounder">All Rounder</option>
              <option value="Batsman">Batsman</option>
              <option value="Bowler">Bowler</option>
              <option value="Wicketkeeper">Wicketkeeper</option>
            </select>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-0 text-sm text-slate-700">
            <thead>
              <tr className="bg-slate-50 text-left text-xs uppercase tracking-[0.25em] text-slate-500">
                <th className="px-6 py-4">#</th>
                <th className="px-6 py-4">Player</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">Age</th>
                <th className="px-6 py-4">Group</th>
              </tr>
            </thead>
            <tbody>
              {filteredPlayers.map((player, index) => (
                <tr key={player.id} className="border-t border-slate-200 transition hover:bg-slate-50">
                  <td className="px-6 py-4 text-slate-500">{index + 1}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={player.avatar} alt={player.name} className="h-10 w-10 rounded-2xl border border-slate-200 object-cover" />
                      <div>
                        <span className="font-semibold text-slate-900">{player.name}</span>
                        <p className="mt-1 text-xs text-slate-500">Live roster candidate</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">
                      {player.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-600">{player.age}</td>
                  <td className="px-6 py-4 text-slate-600">{player.groupId.replace('group-', 'Group ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PlayersPage;
