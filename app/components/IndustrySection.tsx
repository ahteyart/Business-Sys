"use client";
import { Industry } from "../data/industries";
import DepartmentCard from "./DepartmentCard";

interface IndustrySectionProps {
  industry: Industry;
  isExpanded: boolean;
  onToggle: () => void;
}

export default function IndustrySection({ industry, isExpanded, onToggle }: IndustrySectionProps) {
  return (
    <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
      {/* Industry Header */}
      <button
        className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors"
        onClick={onToggle}
      >
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center text-2xl flex-shrink-0`}>
            {industry.icon}
          </div>
          <div className="text-left">
            <h2 className="text-lg font-bold text-gray-900">{industry.name}</h2>
            <p className="text-sm text-gray-500">{industry.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0 ml-4">
          <span className="bg-gray-100 text-gray-600 text-sm px-2.5 py-1 rounded-full font-medium">
            {industry.departments.length} systems
          </span>
          <span className={`text-gray-400 text-xl transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}>
            ▾
          </span>
        </div>
      </button>

      {/* Departments Grid */}
      {isExpanded && (
        <div className="px-5 pb-5 border-t border-gray-100 pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industry.departments.map(department => (
              <DepartmentCard
                key={department.id}
                department={department}
                industryName={industry.name}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
