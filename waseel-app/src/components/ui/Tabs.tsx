"use client";

import { useState, ReactNode } from "react";

interface Tab {
  id: string;
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
}

export function Tabs({ tabs, defaultTab }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  return (
    <div>
      {/* Tab Headers */}
      <div className="flex bg-[var(--surface-secondary)] rounded-xl p-1 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
              activeTab === tab.id
                ? "bg-[var(--surface)] text-[var(--text-primary)] shadow-sm"
                : "text-[var(--text-secondary)]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}
