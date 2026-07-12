import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="rounded-[32px] border border-white/10 bg-white/5 p-16 text-center shadow-card">
      <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Page not found</p>
      <h1 className="mt-4 text-4xl font-semibold text-white">404</h1>
      <p className="mt-4 max-w-xl mx-auto text-slate-300">The page you’re looking for does not exist. Return to the dashboard to continue the live allocation ceremony.</p>
      <Link to="/" className="mt-8 inline-flex rounded-3xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-500">
        Go Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
