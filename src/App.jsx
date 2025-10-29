import React, { useMemo, useState } from 'react';
import Navigation from './components/Navigation';
import MissionBriefing from './components/MissionBriefing';
import CaseFile from './components/CaseFile';
import RDLab from './components/RDLab';

function App() {
  const [active, setActive] = useState('MISSION BRIEFING');

  const trikalLogs = useMemo(
    () => [
      { date: '2025-10-29', text: 'Initial reconnaissance complete. Defined SLA and data ingress contracts.' },
      { date: '2025-11-02', text: 'Provisioned ingestion bus. Implemented idempotent writer with backpressure.' },
      { date: '2025-11-10', text: 'Deployed first dashboard slice with alert lattice and incident drilldowns.' },
    ],
    []
  );

  const jagakshLogs = useMemo(
    () => [
      { date: '2025-08-12', text: 'Threat model established. Identified primary latency chokepoints.' },
      { date: '2025-08-20', text: 'Put circuit-breakers in place. Introduced tail-latency guards.' },
      { date: '2025-09-01', text: 'Stabilized P95 by 38%. Rolled out progressive hardening.' },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-[#0f1115] text-slate-200">
      <Navigation active={active} onChange={setActive} />

      {active === 'MISSION BRIEFING' && (
        <MissionBriefing onNavigate={setActive} />
      )}

      {active === 'CASE FILE 001: PROJECT TRIKAL' && (
        <CaseFile
          title="CASE FILE 001: PROJECT TRIKAL"
          threatAssessment="Critical data synchronization across multi-tenant systems created integrity risks and operational blind spots. Objective: establish a verifiable, low-latency pipeline with deterministic reconciliation and audit-grade observability."
          logEntries={trikalLogs}
        />
      )}

      {active === 'CASE FILE 002: PROJECT JAGAKSH' && (
        <CaseFile
          title="CASE FILE 002: PROJECT JAGAKSH"
          threatAssessment="User-facing services exhibited tail-latency spikes under burst load, threatening conversion and trust. Objective: harden the path, prioritize critical flows, and expose failure domains with actionable telemetry."
          logEntries={jagakshLogs}
        />
      )}

      {active === 'R&D LAB' && <RDLab />}

      {active === 'SECURE CHANNEL' && (
        <section className="min-h-[calc(100vh-56px)] bg-[#0f1115]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <header>
              <h2 className="text-xl sm:text-2xl font-semibold tracking-wide uppercase text-slate-100">
                SECURE CHANNEL
              </h2>
              <div className="mt-3 h-px bg-slate-800 w-full" />
            </header>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="border border-slate-800 bg-[#0b0e13] p-6 rounded-none">
                <h3 className="text-sm font-semibold tracking-widest text-slate-400 uppercase">Transmission Form</h3>
                <form
                  className="mt-4 space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert('Transmission acknowledged. I will respond on priority.');
                  }}
                >
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-slate-400">Your Name</label>
                    <input
                      type="text"
                      required
                      className="mt-1 w-full bg-[#0f1115] border border-slate-800 px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-cyan-400 rounded-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-slate-400">Email</label>
                    <input
                      type="email"
                      required
                      className="mt-1 w-full bg-[#0f1115] border border-slate-800 px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-cyan-400 rounded-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-slate-400">Message</label>
                    <textarea
                      rows={6}
                      required
                      className="mt-1 w-full bg-[#0f1115] border border-slate-800 px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-cyan-400 rounded-none"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">Encryption in transit enforced</span>
                    <button
                      type="submit"
                      className="px-4 py-2 border border-cyan-400 text-cyan-300 uppercase tracking-wide text-xs hover:bg-[#0e131b] rounded-none"
                    >
                      Send Transmission
                    </button>
                  </div>
                </form>
              </div>

              <div className="border border-slate-800 bg-[#0b0e13] p-6 rounded-none">
                <h3 className="text-sm font-semibold tracking-widest text-slate-400 uppercase">Signal</h3>
                <div className="mt-3 text-sm text-slate-300 space-y-2">
                  <p>Availability: GMT+5:30</p>
                  <p>Typical response: <span className="text-cyan-300">T+24h</span></p>
                  <p>Engagement modes: assessment, rapid prototyping, incident drill, dashboard hardening.</p>
                </div>
                <div className="mt-6 h-px bg-slate-800" />
                <div className="mt-6 text-xs text-slate-500 font-mono">
                  [ NOTICE ] Use the form for initial contact. Sensitive details are shared post-NDA only.
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default App;
