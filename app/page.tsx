"use client";
import { useState, useMemo } from "react";
import { industries } from "./data/industries";
import IndustrySection from "./components/IndustrySection";

export default function Home() {
  const [search, setSearch] = useState("");
  const [expandedIndustries, setExpandedIndustries] = useState<Set<string>>(new Set(["retail"]));
  const [complexityFilter, setComplexityFilter] = useState<string>("All");

  const toggleIndustry = (id: string) => {
    setExpandedIndustries(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const expandAll = () => setExpandedIndustries(new Set(industries.map(i => i.id)));
  const collapseAll = () => setExpandedIndustries(new Set());

  const filteredIndustries = useMemo(() => {
    if (!search && complexityFilter === "All") return industries;
    const q = search.toLowerCase();
    return industries
      .map(ind => ({
        ...ind,
        departments: ind.departments.filter(dep => {
          const matchesSearch = !q ||
            dep.name.toLowerCase().includes(q) ||
            dep.description.toLowerCase().includes(q) ||
            ind.name.toLowerCase().includes(q);
          const matchesComplexity = complexityFilter === "All" || dep.complexity === complexityFilter;
          return matchesSearch && matchesComplexity;
        })
      }))
      .filter(ind => ind.departments.length > 0);
  }, [search, complexityFilter]);

  const totalSystems = industries.reduce((sum, i) => sum + i.departments.length, 0);
  const filteredSystems = filteredIndustries.reduce((sum, i) => sum + i.departments.length, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-14 sm:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm px-4 py-1.5 rounded-full mb-6 border border-white/10">
              <span>⚡</span>
              <span>Powered by Vibe Coding with Claude Code</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4">
              Build Your{" "}
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Business Systems
              </span>
            </h1>
            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-8">
              Browse department systems by industry. Copy the Claude Code prompt, paste it,
              and get a production-ready system built in hours — not months.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span>{industries.length} Industries</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                <span>{totalSystems} Ready-to-Build Systems</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                <span>Copy → Paste → Build</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔍</span>
              <input
                type="text"
                placeholder="Search systems or industries..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="flex rounded-xl border border-gray-200 overflow-hidden flex-shrink-0">
              {["All", "Simple", "Medium", "Advanced"].map(c => (
                <button
                  key={c}
                  onClick={() => setComplexityFilter(c)}
                  className={`px-3 py-2.5 text-sm font-medium transition-colors ${
                    complexityFilter === c
                      ? "bg-slate-900 text-white"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="flex gap-2 flex-shrink-0">
              <button
                onClick={expandAll}
                className="px-3 py-2.5 text-sm rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
              >
                Expand All
              </button>
              <button
                onClick={collapseAll}
                className="px-3 py-2.5 text-sm rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
              >
                Collapse
              </button>
            </div>
          </div>

          {(search || complexityFilter !== "All") && (
            <p className="text-xs text-gray-500 mt-2">
              Showing {filteredSystems} of {totalSystems} systems
              {search && <> matching &ldquo;<strong>{search}</strong>&rdquo;</>}
              {complexityFilter !== "All" && <> · Complexity: <strong>{complexityFilter}</strong></>}
            </p>
          )}
        </div>
      </div>

      {/* Industry List */}
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-4">
        {filteredIndustries.length === 0 ? (
          <div className="text-center py-20">
            <span className="text-5xl">🔍</span>
            <p className="text-gray-500 mt-4 text-lg">No systems found for &ldquo;<strong>{search}</strong>&rdquo;</p>
            <button onClick={() => { setSearch(""); setComplexityFilter("All"); }} className="mt-4 text-blue-600 hover:underline text-sm">
              Clear filters
            </button>
          </div>
        ) : (
          filteredIndustries.map(industry => (
            <IndustrySection
              key={industry.id}
              industry={industry}
              isExpanded={expandedIndustries.has(industry.id)}
              onToggle={() => toggleIndustry(industry.id)}
            />
          ))
        )}
      </div>

      {/* How to use */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">How to Use</h2>
          <p className="text-center text-gray-500 text-sm mb-8">Get a full business system running in 3 simple steps</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                icon: "🏭",
                title: "Choose Your Industry",
                desc: "Browse by industry category and find the department system that matches your business needs."
              },
              {
                step: "2",
                icon: "📋",
                title: "Copy the Prompt",
                desc: "Click \"Copy Prompt\" on any department card. The detailed prompt is ready for Claude Code."
              },
              {
                step: "3",
                icon: "⚡",
                title: "Paste into Claude Code",
                desc: "Open Claude Code, paste the prompt, and watch your system get built automatically in hours."
              }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-blue-100 flex items-center justify-center text-2xl mx-auto mb-3">
                  {item.icon}
                </div>
                <div className="inline-block bg-blue-600 text-white text-xs font-bold px-2.5 py-0.5 rounded-full mb-2">
                  Step {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="border-t border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-400">
          <p>SME Department System Builder · {totalSystems} systems across {industries.length} industries</p>
          <p>Built with ⚡ Vibe Coding + Claude Code</p>
        </div>
      </footer>
    </div>
  );
}
