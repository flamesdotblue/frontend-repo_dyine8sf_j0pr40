import React from 'react';

const tabs = [
  { key: 'MISSION BRIEFING', label: 'MISSION BRIEFING' },
  { key: 'CASE FILE 001: PROJECT TRIKAL', label: 'CASE FILE 001: PROJECT TRIKAL' },
  { key: 'CASE FILE 002: PROJECT JAGAKSH', label: 'CASE FILE 002: PROJECT JAGAKSH' },
  { key: 'R&D LAB', label: 'R&D LAB' },
  { key: 'SECURE CHANNEL', label: 'SECURE CHANNEL' },
];

export default function Navigation({ active, onChange }) {
  return (
    <header className="sticky top-0 z-50 bg-[#0b0e13] border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <div className="text-cyan-400 tracking-widest font-semibold select-none">
          THE ANALYST'S DOSSIER
        </div>
        <nav className="flex items-center gap-3">
          {tabs.map((t) => {
            const isActive = active === t.key;
            return (
              <button
                key={t.key}
                onClick={() => onChange(t.key)}
                className={`px-3 py-1.5 text-xs sm:text-sm uppercase tracking-wide border ${
                  isActive
                    ? 'border-cyan-400 text-cyan-300'
                    : 'border-slate-800 text-slate-300 hover:text-cyan-200 hover:border-slate-700'
                } bg-transparent rounded-none transition-colors`}
              >
                {t.label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
