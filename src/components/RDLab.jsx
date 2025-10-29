import React from 'react';

const investigations = [
  {
    title: 'Investigation: Git-Vis',
    problem: 'Repository complexity obscures hotspots and ownership drift.',
    solution: 'Graph commit topology with author entropy and module risk scoring.',
    link: 'https://github.com/'
  },
  {
    title: 'Investigation: Virtual File System',
    problem: 'Heterogeneous storage backends slow data access and replication.',
    solution: 'Unified abstraction layer with adaptive caching and policy routing.',
    link: 'https://github.com/'
  },
  {
    title: 'Investigation: Telemetry Guard',
    problem: 'Metrics floods hide the real incident signals.',
    solution: 'Adaptive anomaly filtering with priority lanes and SLO-aware routing.',
    link: 'https://github.com/'
  },
  {
    title: 'Investigation: Log Schema',
    problem: 'Inconsistent log shapes block correlation at scale.',
    solution: 'Declarative schema registry with compile-time bindings for services.',
    link: 'https://github.com/'
  },
];

export default function RDLab() {
  return (
    <section className="min-h-[calc(100vh-56px)] bg-[#0f1115] text-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <header>
          <h2 className="text-xl sm:text-2xl font-semibold tracking-wide uppercase text-slate-100">
            R&D LAB
          </h2>
          <div className="mt-3 h-px bg-slate-800 w-full" />
        </header>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {investigations.map((item) => (
            <article key={item.title} className="border border-slate-800 bg-[#0b0e13] p-5 rounded-none">
              <h3 className="text-sm tracking-widest text-slate-400 uppercase">{item.title}</h3>
              <div className="mt-3 space-y-2 text-sm text-slate-300">
                <p><span className="text-slate-400">Problem:</span> {item.problem}</p>
                <p><span className="text-slate-400">Solution:</span> {item.solution}</p>
              </div>
              <div className="mt-4">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block px-3 py-1.5 border border-cyan-400 text-cyan-300 uppercase tracking-wide text-xs hover:bg-[#0e131b] rounded-none"
                >
                  View Technical Briefing
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
