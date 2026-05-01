export default function Footer() {
  return (
    <footer className="border-t border-black/5 px-6 sm:px-10 lg:px-16 py-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div className="text-ink">
          <span className="font-extrabold text-xl tracking-tight">Sweatbuds</span>
          <span className="text-muted"> · Sweat together</span>
        </div>
        <div className="flex items-center gap-8 text-muted">
          <a href="/privacy" className="hover:text-ink transition">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-ink transition">
            Terms of Use
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 text-center text-sm text-muted">
        © 2026 Sweatbuds. All rights reserved.
      </div>
    </footer>
  );
}
