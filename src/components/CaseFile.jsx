import React from 'react';

export default function CaseFile({
  title,
  threatAssessment,
  logEntries = [],
}) {
  return (
    <section className="min-h-[calc(100vh-56px)] bg-[#0f1115] text-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        <header>
          <h2 className="text-xl sm:text-2xl font-semibold tracking-wide uppercase text-slate-100">
            {title}
          </h2>
          <div className="mt-3 h-px bg-slate-800 w-full" />
        </header>

        {/* Threat Assessment */}
        <section>
          <h3 className="text-sm font-semibold tracking-widest text-slate-400 uppercase">
            Threat Assessment
          </h3>
          <p className="mt-3 text-sm text-slate-300 max-w-3xl">
            {threatAssessment}
          </p>
        </section>

        {/* System Blueprint */}
        <section>
          <h3 className="text-sm font-semibold tracking-widest text-slate-400 uppercase">
            System Blueprint
          </h3>
          <div className="mt-3 border border-slate-800 bg-[#0b0e13] h-[360px] w-full grid place-items-center rounded-none">
            <div className="text-slate-500 text-xs uppercase tracking-widest">
              ARCHITECTURE DIAGRAM PLACEHOLDER
            </div>
          </div>
        </section>

        {/* Field Log */}
        <section>
          <h3 className="text-sm font-semibold tracking-widest text-slate-400 uppercase">
            Field Log
          </h3>
          <div className="mt-3 border border-slate-800 bg-[#0b0e13] h-[280px] overflow-y-auto rounded-none">
            <ul className="divide-y divide-slate-800">
              {logEntries.map((entry, idx) => (
                <li key={idx} className="p-4 font-mono text-xs text-slate-300">
                  <span className="text-cyan-400">[ LOG_ENTRY: {entry.date} ]</span> - {entry.text}
                </li>
              ))}
              {logEntries.length === 0 && (
                <li className="p-4 font-mono text-xs text-slate-500">No entries recorded.</li>
              )}
            </ul>
          </div>
        </section>
      </div>
    </section>
  );
}
