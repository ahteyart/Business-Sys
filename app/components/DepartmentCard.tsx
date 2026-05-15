"use client";
import { useState } from "react";
import { Department } from "../data/industries";
import PreviewModal from "./PreviewModal";

interface DepartmentCardProps {
  department: Department;
  industryName: string;
}

export default function DepartmentCard({ department, industryName }: DepartmentCardProps) {
  const [copied, setCopied] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(department.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div className={`rounded-xl border-2 ${department.color} bg-white p-5 flex flex-col gap-3 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5`}>
        {/* Header */}
        <div className="flex items-start gap-3">
          <span className="text-2xl flex-shrink-0">{department.icon}</span>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-gray-900 text-base leading-tight">{department.name}</h3>
            <p className="text-sm text-gray-500 mt-0.5 line-clamp-2">{department.description}</p>
          </div>
        </div>

        {/* Badges */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
            department.complexity === "Simple"
              ? "bg-green-100 text-green-700"
              : department.complexity === "Medium"
              ? "bg-amber-100 text-amber-700"
              : "bg-rose-100 text-rose-700"
          }`}>
            {department.complexity}
          </span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-sky-100 text-sky-700 font-medium">
            ⏱ {department.estimatedTime}
          </span>
        </div>

        {/* Feature pills */}
        <div className="flex flex-wrap gap-1.5">
          {department.previewFeatures.slice(0, 3).map((f, i) => (
            <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
              {f}
            </span>
          ))}
          {department.previewFeatures.length > 3 && (
            <span className="text-xs bg-gray-100 text-gray-400 px-2 py-0.5 rounded-full">
              +{department.previewFeatures.length - 3} more
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-1">
          <button
            onClick={() => setShowPreview(true)}
            className="flex-1 text-sm px-3 py-2 rounded-lg border-2 border-gray-200 text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-colors font-medium flex items-center justify-center gap-1.5"
          >
            <span>👁️</span> Preview
          </button>
          <button
            onClick={handleCopy}
            className={`flex-1 text-sm px-3 py-2 rounded-lg font-medium transition-all flex items-center justify-center gap-1.5 ${
              copied
                ? "bg-green-500 text-white border-2 border-green-500"
                : "bg-gray-900 text-white hover:bg-gray-700 border-2 border-gray-900"
            }`}
          >
            {copied ? (
              <><span>✅</span> Copied!</>
            ) : (
              <><span>📋</span> Copy Prompt</>
            )}
          </button>
        </div>
      </div>

      {showPreview && (
        <PreviewModal
          department={department}
          industryName={industryName}
          onClose={() => setShowPreview(false)}
        />
      )}
    </>
  );
}
