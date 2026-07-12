import { FaTrophy } from 'react-icons/fa';
import SectionHeader from '../components/SectionHeader';

const champions = [
  { year: '2025', team: 'Royal Strikers', captain: 'Rahul', mvp: 'Akash', runnerUp: 'Thunder Warriors', color: 'bg-amber-400' },
  { year: '2024', team: 'Thunder Warriors', captain: 'Rohit', mvp: 'Sagar', runnerUp: 'Kings XI', color: 'bg-slate-300' },
  { year: '2023', team: 'Kings XI', captain: 'Nikhil', mvp: 'Prathmesh', runnerUp: 'Super Giants', color: 'bg-amber-700' },
];

function HallOfChampionsPage() {
  return (
    <div>
      <SectionHeader title="Hall of Champions" description="Past winners and legendary moments." />

      <div className="mb-10 rounded-[32px] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-violet-50 p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Legendary legacy</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">Celebrating the teams that shaped BCPL history.</h2>
          </div>
          <div className="flex items-center gap-3 rounded-3xl border border-violet-200 bg-violet-50 px-4 py-3 text-sm font-medium text-violet-700">
            <FaTrophy className="text-lg" />
            <span>3 championship seasons showcased</span>
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        {champions.map((item) => (
          <div
            key={item.year}
            className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:border-violet-300"
          >
            <div className="flex items-center justify-between gap-4">
              <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${item.color} text-3xl shadow-lg`}>
                🏆
              </div>
              <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-semibold text-slate-600">
                {item.year}
              </div>
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-slate-900">{item.team}</h3>
            <div className="mt-5 space-y-2 text-sm leading-7 text-slate-600">
              <p><span className="font-semibold text-slate-800">Captain:</span> {item.captain}</p>
              <p><span className="font-semibold text-slate-800">MVP:</span> {item.mvp}</p>
              <p><span className="font-semibold text-slate-800">Runner Up:</span> {item.runnerUp}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Champions timeline</p>
        <div className="mt-8 grid gap-5 lg:grid-cols-6">
          {champions.map((item) => (
            <div key={item.year} className="rounded-[28px] border border-slate-200 bg-slate-50 p-4 text-center text-slate-600">
              <p className="text-sm text-slate-500">{item.year}</p>
              <p className="mt-3 text-lg font-semibold text-slate-900">{item.team}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HallOfChampionsPage;
