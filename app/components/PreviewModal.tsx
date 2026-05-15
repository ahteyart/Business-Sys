"use client";
import { Department } from "../data/industries";

interface PreviewModalProps {
  department: Department;
  industryName: string;
  onClose: () => void;
}

export default function PreviewModal({ department, industryName, onClose }: PreviewModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white rounded-t-2xl border-b border-gray-100 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{department.icon}</span>
            <div>
              <h2 className="font-bold text-gray-900 text-lg">{department.name}</h2>
              <p className="text-sm text-gray-500">{industryName} Department</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Complexity & Time */}
          <div className="flex gap-3">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              department.complexity === "Simple"
                ? "bg-green-100 text-green-700"
                : department.complexity === "Medium"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-red-100 text-red-700"
            }`}>
              {department.complexity}
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
              ⏱ {department.estimatedTime}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">{department.description}</p>

          {/* Key Features */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span>✨</span> Key Features
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {department.previewFeatures.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-green-500 flex-shrink-0">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Screens */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span>🖥️</span> Screens Included
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {department.previewScreens.map((screen, i) => (
                <div
                  key={i}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center"
                >
                  <div className="w-full h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded mb-2 flex items-center justify-center">
                    <span className="text-2xl">{department.icon}</span>
                  </div>
                  <p className="text-xs text-gray-600 font-medium">{screen}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Prompt Preview */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span>💬</span> Claude Code Prompt Preview
            </h3>
            <div className="bg-gray-900 rounded-xl p-4 max-h-48 overflow-y-auto">
              <pre className="text-green-400 text-xs font-mono whitespace-pre-wrap leading-relaxed">
                {department.prompt.slice(0, 400)}...
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
