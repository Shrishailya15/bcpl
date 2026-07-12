import { FaSearch } from 'react-icons/fa';
import { useMemo, useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import GroupCard from '../components/GroupCard';
import { useStore } from '../store/useStore';

function GroupsPage() {
  const { groups } = useStore();
  const [search, setSearch] = useState('');

  const filteredGroups = useMemo(
    () => groups.filter((group) => group.name.toLowerCase().includes(search.toLowerCase())),
    [groups, search],
  );

  return (
    <div>
      <SectionHeader title="Groups" description="Review all allocation groups." />
      <div className="mb-8 grid gap-4 md:grid-cols-[1fr_auto]">
        <p className="text-slate-600">Prepare your live ceremony by reviewing status and queue order for each group.</p>
        <label className="relative block w-full max-w-sm">
          <FaSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search groups..."
            className="w-full rounded-3xl border border-slate-200 bg-white py-3 pl-12 pr-4 text-sm text-slate-700 outline-none transition focus:border-violet-500/80 focus:ring-2 focus:ring-violet-500/20"
          />
        </label>
      </div>
      <div className="grid gap-6 xl:grid-cols-3">
        {filteredGroups.map((group) => (
          <GroupCard key={group.id} group={group} />
        ))}
      </div>
    </div>
  );
}

export default GroupsPage;
