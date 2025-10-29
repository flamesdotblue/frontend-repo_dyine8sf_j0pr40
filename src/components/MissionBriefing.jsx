import React from 'react';
import Spline from '@splinetool/react-spline';

export default function MissionBriefing({ onNavigate }) {
  return (
    <section className="min-h-[calc(100vh-56px)] bg-[#0f1115] text-slate-200">
      {/* Hero */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        <div className="flex flex-col justify-center order-2 lg:order-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-tight text-slate-100">
            My name is Om Patel. I am a problem-solver. When I am on your team, you can consider it done.
          </h1>
          <div className="mt-6 h-px w-full bg-slate-800" />
          <p className="mt-6 text-sm text-slate-400 max-w-prose">
            Operative profile: analytical systems, data pipelines, and mission-critical dashboards. Focus: reliability, latency, clarity.
          </p>
        </div>
        <div className="relative order-1 lg:order-2 h-[340px] sm:h-[420px] lg:h-[520px] border border-slate-800">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f1115] via-transparent to-transparent opacity-50" />
        </div>
      </div>

      {/* Quick Access Cards */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ActionCard
            title="CASE FILE 001"
            subtitle="PROJECT TRIKAL"
            onClick={() => onNavigate('CASE FILE 001: PROJECT TRIKAL')}
          />
          <ActionCard
            title="CASE FILE 002"
            subtitle="PROJECT JAGAKSH"
            onClick={() => onNavigate('CASE FILE 002: PROJECT JAGAKSH')}
          />
          <ActionCard
            title="R&D LAB"
            subtitle="Investigations"
            onClick={() => onNavigate('R&D LAB')}
          />
        </div>
      </div>
    </section>
  );
}

function ActionCard({ title, subtitle, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group w-full text-left border border-slate-800 bg-[#0b0e13] hover:bg-[#0e131b] transition-colors p-6 rounded-none"
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs tracking-widest text-slate-400">{title}</div>
          <div className="mt-1 text-xl font-semibold text-slate-100">{subtitle}</div>
        </div>
        <div className="text-cyan-400 text-sm tracking-wide">
          OPEN ▶
        </div>
      </div>
      <div className="mt-4 h-px w-full bg-slate-800" />
      <p className="mt-4 text-sm text-slate-400">
        Access operational dossier. Structured findings, system blueprints, and field logs.
      </p>
    </button>
  );
}
